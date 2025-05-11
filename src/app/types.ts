import { StaticImageData } from 'next/image';

// types.ts
export type Product = {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
  sizes?: string[];
  colors?: string[];
};


export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string; // stored as string in localStorage
};

 
export type Review = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  image?: string; // Add this line
};
