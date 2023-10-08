import * as actionType from "../actions/actionType";
import { ProductItem } from "../actions/actions";

export interface listCart {
    cartAr:  ProductItem[],
    number: number
}

type Action ={
    type: string;
    payload: ProductItem;
}
const totalCart = () => {
    const number = JSON.parse(localStorage.getItem("listItem")!) || [];
   if(number){
   let sum = 0;
   for (let i = 0; i < number.length; i++){
       sum = number[i].items?.quanlity + sum;
    }
    return sum;
} return 0;
}
const numberList = totalCart();
const listCartItem:listCart = {
    cartAr:  JSON.parse(localStorage.getItem("listItem")!) || [],
    number:  numberList || 0
}


export const cartProduct = (state = listCartItem, action: Action) => {
    switch (action.type) {
        case actionType.BUY_PRODUCT:
            const productInCart = state.cartAr.find(
                (items) => items.items?.id === action.payload.items?.id
              );
              
            if(!productInCart){
                const newNumber = state.number +1;
                action.payload.items!.quanlity = 1;
                return {
                    ...state,
                    cartAr: [...state.cartAr, action.payload],
                    number: newNumber
                  };
            }
            else{
                let newList= [...state.cartAr];
                const index = newList.findIndex((item)=> (
                    item.items?.id === action.payload.items?.id
                ))
                if(newList[index].items?.quanlity !== undefined) {
                    newList[index].items!.quanlity =  newList[index].items!.quanlity +1;
                }
                const newNumber = state.number +1;
                return {
                    ...state,
                    cartAr: [...newList],
                    number: newNumber
                }
            }
        case actionType.DELETE_PRODUCT:
            const oldList = localStorage.getItem("listItem");
            if(oldList){
            let parsedData = JSON.parse(oldList);
            const objIndex = parsedData.findIndex((obj:ProductItem) =>  obj.items?.id === action.payload.items?.id);
             parsedData.splice(objIndex, 1);
             if(action.payload.items?.quanlity !== undefined){
                 const oldNumber = state.number - action.payload.items?.quanlity;
                return {
                    ...state,
                     cartAr: [...parsedData],
                     number: oldNumber
                 };
             }
             else{
                const oldNumber = state.number - 1;
                return {
                    ...state,
                     cartAr: [...parsedData],
                     number: oldNumber
                 };
            }
            
        }else {console.log("ko co du lieu");
        return {...state}}

        default:
          return state;
      }
}