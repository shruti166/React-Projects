import React from "react";

var initialData = {
    users: []
}
const userReducer = (storeData = initialData, action) => {

    switch(action.type)  {
        case "USERS" : {

        }
        default: {
            return storeData;
        }
         
    }
    
};