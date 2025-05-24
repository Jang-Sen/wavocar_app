export type Car = {
  id: string;
  name: string;
  productCode: string;
  img: string;
  category: string;
  price: number;
  stock: number;
  status: number;
  sales: number;
  salesPercentage: number;
};

export type Filter = {
  minAmount: number | string;
  maxAmount: number | string;
  productStatus: string;
  productType: string[];
};

export type GetCarListResponse = {
  list: Car[];
  total: number;
};
