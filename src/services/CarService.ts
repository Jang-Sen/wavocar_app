import ApiService from './ApiService';

export async function apiGetCarList() {
  // params: U,
  return ApiService.fetchDataWithAxios({
    url: '/car/findAll',
    method: 'get',
    // params,
  });
}

export async function apiGetCar({ id }) {
  return ApiService.fetchDataWithAxios({
    url: `/car/find/${id}`,
    method: 'get',
  });
}
