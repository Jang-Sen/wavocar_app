import { useQuery } from '@tanstack/react-query';
import { CarListParams } from '../../../../@types/car';
import { getCarList } from '../../../../services/CarService';

export const useCarList = (params: CarListParams) => {
  return useQuery({
    queryKey: ['cars', params],
    queryFn: () => getCarList(params),
  });
};
