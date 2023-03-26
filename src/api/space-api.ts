import axios from 'axios';
import { LaunchDocsDataInterface, LaunchInterface } from "../interfaces/launch-interface";
import { FilterSchema } from "../interfaces/filter-interface";

export const BASE_URL = 'https://api.spacexdata.com/v4/'

axios.defaults.baseURL = BASE_URL;

export const getLaunches = async (page: number):Promise<Array<LaunchDocsDataInterface>> => {
  const { data: { docs } } = await axios.post('launches/query', {
    "options": {
      "page": page,
      "limit": 15,
      "sort":{
        "date_local":"desc"
      }
    }
  });
  return docs;
}

export const getFilterLaunches = async (filters?: Array<FilterSchema>):Promise<Array<LaunchDocsDataInterface>> => {

  const getFilterQuery = () => {
    const query = {
    }

    filters.forEach(filter => {
      switch (filter.filterBy) {
        case 'rocketName' :
          query['name'] = filter.filterValue;
          break;
        case 'isSuccess':
          query['success'] = filter.filterValue ?? false;
          break;
      }
    });

    return query;
  }

  if (filters) {
    const allFilterQueries = getFilterQuery();

    const { data: { docs } } = await axios.post('launches/query', {
      "options": {
        "limit": 300,
        "sort":{
          "date_local":"desc"
        },
        "populate": [
          {
            "path": "rocket",
            "select": {
              "name": 1
            }
          }
        ]
      },

      "query": {
        "success": allFilterQueries['success']
      }
    });

    if (allFilterQueries['name']) {
      return docs.filter((doc) => doc.rocket.name.includes(allFilterQueries['name']));
    }

    return docs;
  }
}

export const getLaunch = async (id: string): Promise<LaunchInterface | any> => {
  const {data: currentLaunch} = await axios.get(`launches/${id}`);
  return currentLaunch;
}
