import * as actionType from "../actions/actionType";
import { ProductItem } from "../actions/actions";

export interface listCart {
    cartAr:  any[],
    number: number
}

type Action ={
    type: string;
    payload: ProductItem;
}
const listCart:listCart = { 
    cartAr: [],
    number: 0
}

export const cartProduct = (state = listCart, action: Action) => {
    switch (action.type) {
        case actionType.BUY_PRODUCT:
            let newList= [...state.cartAr];
            const newNumber = state.number + 1;
            newList.push(action.payload);
            return {
                ...state,
                cartAr: newList,
                number: newNumber
            }
        case actionType.DELETE_PRODUCT:
            const oldList = localStorage.getItem("listItem");
            const oldNumber = state.number - 1;
            if(oldList){
            let parsedData = JSON.parse(oldList);
            const objIndex = parsedData.findIndex((obj:ProductItem) =>  obj.items?.id == action.payload.items?.id);
             parsedData.splice(objIndex, 1);
             return {
                ...state,
                 cartAr: [...parsedData],
                 number: oldNumber
             };
        }else {console.log("ko co du lieu");
    return {...state}}

        default:
          return state;
      }
}