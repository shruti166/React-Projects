var initialData = {
    users : [],

}

export const Reducer = (storeData = initialData, action) => {
    switch(action.type) {
        case "Users": return {
            ...storeData,
            users: [...storeData.users, action.payload],
          };
        // eslint-disable-next-line no-fallthrough
        default: {
            return storeData;
        }
    }
}