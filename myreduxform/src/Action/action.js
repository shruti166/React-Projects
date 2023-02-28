import {store} from '../ReduxStore/Store.js';

export const Action = (data, dispatch) => {

    store.dispatch({
        type: 'USERS',
        payload: data,
    })
}
export const deleteUser = (data, dispatch) => {
    dispatch({
        type: 'DELETE'
    })
}

