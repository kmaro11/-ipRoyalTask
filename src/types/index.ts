export type IOverviewBlock = {
  title: string;
  number: number;
  text: string;
  backgroundColor: string;
  textColor: string;
};

export type IChart = {
  name: string;
  total: number;
  men: number;
  women: number;
  variation: string;
  chart: string;
};

export type IPhone = {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: number;
  title: number;
};
