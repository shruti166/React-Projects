var initialData = {
    users : [],

}

export const Reducer = (storeData = initialData, action) => {
    switch(action.type) {
        case "USERS": {
         }
        // eslint-disable-next-line no-fallthrough
        default: {
            return storeData;
        }
    }
}