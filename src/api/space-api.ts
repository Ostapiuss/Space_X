import axios from 'axios';

export const BASE_URL = 'https://api.spacexdata.com/v4/'

axios.defaults.baseURL = BASE_URL;

export const getLaunches = async (page: number) => {
  const { data: { docs } } = await axios.post('launches/query', {
    "options": {
      "page": page,
    }
  });

  return docs;
}
