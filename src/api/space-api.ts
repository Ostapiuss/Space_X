import axios from 'axios';
import {LaunchDocsDataInterface, LaunchInterface} from "../interfaces/launch-interface";

export const BASE_URL = 'https://api.spacexdata.com/v4/'

axios.defaults.baseURL = BASE_URL;

export const getLaunches = async (page: number):Promise<Array<LaunchDocsDataInterface>> => {
  const { data: { docs } } = await axios.post('launches/query', {
    "options": {
      "page": page,
    }
  });
  return docs;
}

export const getLaunch = async (id: string): Promise<LaunchInterface | any> => {
  const {data: currentLaunch} = await axios.get(`launches/${id}`);
  return currentLaunch;
}
