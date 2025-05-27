export type Scale = '소형' | '중형' | '대형' | 'suv' | '미정';

export type Fuel = '휘발유' | '경유' | '하이브리드' | '전기' | '미정';

export type CarStatus = 'available' | 'waiting' | 'completed' | 'repair';

export type Sort =
  | 'LAST_CREATED'
  | 'FIRST_CREATED'
  | 'EXPENSIVE'
  | 'INEXPENSIVE';

export interface Car {
  id: string;
  createdAt: Date;
  carName: string;
  grade: string;
  scale: Scale;
  fuel: Fuel;
  price: number;
  carYear: number;
  carNo: string;
  transmission: string;
  mileage: number;
  displacement: number;
  carImgs: string[];
  memo: string;
  carStatus: CarStatus;
}

export interface Meta {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasBeforePage: boolean;
  hasNextPage: boolean;
}

export interface CarListResponse {
  list: Car[];
  meta: Meta;
}

export interface CarListParams {
  modelName?: string;
  grade?: string;
  fuel?: Fuel;
  carYear?: number;
  carStatus?: CarStatus;
  minCarPrice?: number;
  maxCarPrice?: number;
  sort?: Sort;
  page?: number;
  take?: number;
}
