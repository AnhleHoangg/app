import * as actionType from "./actionType";

export interface ProductItem {
    items?: {
      id: number;
      title: string;
      thumbnail: string;
      price: number;
      sale?: number;
      quanlity: number;
    };
  }
  

export const buyProduct = (product:ProductItem) => {
  return {
    type: actionType.BUY_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = (product:ProductItem) => {
  return {
    type: actionType.DELETE_PRODUCT,
    payload: product,
  };
};
export const checkProduct = (product:ProductItem) => {
  return {
    type: actionType.CHECK,
    payload: product,
  };
};
