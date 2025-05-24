import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const getCarDetail = async (id) => {
  const { data } = await axios.get(`http://localhost:81/api/v1/car/find/${id}`);

  return data.body;
};

export const useCarDetail = (id: string) => {
  return useQuery({
    queryKey: ['car', id],
    queryFn: () => getCarDetail(id),
    // queryFn: async () => {
    //   const { data } = await axios.get(
    //     `http://localhost:81/api/v1/car/find/${id}`,
    //   );
    //
    //   console.log(data.body);
    //
    //   return data.body;
    // },
  });
  // return useQuery({
  //   queryFn: ['car', id],
  //   queryKey: async (id: string) => {
  //     const { data } = await axios.get(
  //       `http://localhost:81/api/v1/car/find/${id}`,
  //     );
  //
  //     return data.body;
  //   },
  // });
};
