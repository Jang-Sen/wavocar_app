import { useQuery } from '@tanstack/react-query';
import { getCarDetail } from '../../../../services/CarService';

export const useCarDetail = (id: string) => {
  return useQuery({
    queryKey: ['car', id],
    queryFn: () => getCarDetail(id),
    enabled: !!id,
  });
};
