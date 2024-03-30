//import { type } from "@testing-library/user-event/dist/type";

export default function reducer(allData,action){
    
    if (action.type === 'addItemsToCart') {
        const existingItemIndex = allData.data.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex === -1) {
          return { ...allData, data: [...allData.data, { ...action.payload, amount: 1 }] };
         
        }
    }

    if(action.type === 'removeItems'){
        const nv = allData.data.filter(itm => itm.id !== action.payload);
        return {...allData,data:nv};
    }

    if(action.type === 'incress'){
        let nv = allData.data.map(itm => {
            if(itm.id === action.payload){
                return {...itm,amount:itm.amount+1};
            }else{
                return itm;
            }
        })
        return {...allData,data:nv};
    }

    if(action.type === 'dicress'){
        let nv = allData.data.map(itm => {
            if(itm.id === action.payload){
                return {...itm,amount:itm.amount-1};
            }else{
                return itm;
            }
        }).filter(itm => itm.amount > 0);
        return {...allData,data:nv};
    }

    if(action.type === 'update'){
        let amnt = 0;
        let totl= 0;
        allData.data.map(itm => {
            amnt += itm.amount;
            totl += itm.amount*itm.price;  
        })
        return {...allData,Amount:amnt,Total:totl};
    }

    if(action.type === 'removeAll'){
        return {...allData,data:[]};
    }

    return allData;
}