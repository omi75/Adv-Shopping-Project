export const initial={
    priceRange:[10,2000], 
    searchKey:'',
}

export function Reducer(state,action)
{
    switch(action.type)
    {
        case "Search-Filter":
            return{
                ...state,
                searchKey:action.payload,
            } 
            break;
        case "Range-Filter":
            return{
                ...state,
                priceRange:action.payload,
            } 
            break;
        default:
                return state;
                break;
    }
}