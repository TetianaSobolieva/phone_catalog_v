import productsData from './data/products.json';
import phonesData from './data/phones.json';
import tabletsData from './data/tablets.json';
import accessoriesData from './data/accessories.json';

import { Product, ProductDetails } from '../types/Product';

const products = productsData as Product[];

export const getProducts = async (): Promise<Product[]> => {
  return products;
};

export const getPhones = async (): Promise<Product[]> => {
  return products.filter(product => product.category === 'phones');
};

export const getTablets = async (): Promise<Product[]> => {
  return products.filter(product => product.category === 'tablets');
};

export const getAccessories = async (): Promise<Product[]> => {
  return products.filter(product => product.category === 'accessories');
};

export const getProductDetails = async (
  category: string,
  itemId: string,
): Promise<ProductDetails> => {
  let categoryProducts: ProductDetails[];

  switch (category) {
    case 'phones':
      categoryProducts = phonesData as ProductDetails[];
      break;

    case 'tablets':
      categoryProducts = tabletsData as ProductDetails[];
      break;

    case 'accessories':
      categoryProducts = accessoriesData as ProductDetails[];
      break;

    default:
      throw new Error(`Unknown category: ${category}`);
  }

  const product = categoryProducts.find(
    product => product.id === itemId,
  );

  if (!product) {
    throw new Error(`Product not found: ${itemId}`);
  }

  return product;
};
