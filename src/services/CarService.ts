import { Car, CarListParams, CarListResponse } from '../@types/car';
import axiosBase from './axios/AxiosBase';

export const getCarList = async (params?: CarListParams): Promise<Car[]> => {
  const { data } = await axiosBase.get<CarListResponse>('/car/findAll', {
    params,
  });

  return data?.body;
};

export const getCarDetail = async (id: string): Promise<Car> => {
  const { data } = await axiosBase.get<Car>(`/car/find/${id}`);

  return data?.body;
};
