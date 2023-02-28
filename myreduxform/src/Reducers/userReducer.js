

var initialData = {
    users: []
}
export  const userReducer = (storeData = initialData, action) => {

    switch(action.type)  {
        case "USERS" : {
            return {
                ...storeData,
                users: [...storeData.users, action.payload]
            }
        }
        case "DELETE" : {
            return {
                ...storeData,
                users: [action.payload]
            }
        }
        default: {
            return storeData;
        }
         
    }
    
};