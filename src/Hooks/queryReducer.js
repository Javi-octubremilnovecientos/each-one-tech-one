export const initialQuery = {
    title:"",
    query:""
}

export const queryReduct = (state, action)=>{
    switch (action.type) {
        case "App & Software":
            
        return {
            ...state,
            title:action.type,
            query:"app OR software OR microsoft OR Aple OR develop"
        };
        case "Smartphones":
            
        return {
            ...state,
            title:action.type,
            query:"iphone OR samsung OR xiaomi OR huawei OR cellphone"
        };
        case "Gadgets":
            
        return {
            ...state,
            title:action.type,
            query:"gadget OR gadgets"
        };
        case "A.I.":
            
        return {
            ...state,
            title:action.type,
            query:'ai OR "A.I." OR Artificial Intelligence' 
        };
    
        default:
            break;
    }
}
