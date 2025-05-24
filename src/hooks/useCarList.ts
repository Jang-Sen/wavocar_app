import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getCarList = async () => {
  const { data } = await axios.get(
    'http://localhost:81/api/v1/car/findAll?take=10',
  );
  // const { data } = await apiGetCarList();

  return data.body.data;
};

export const useCarList = () => {
  return useQuery({
    queryKey: ['cars'],
    queryFn: () => getCarList(),
  });
};
