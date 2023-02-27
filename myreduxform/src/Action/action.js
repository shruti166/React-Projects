import {Store} from '../ReduxStore/Store.js';

export const Action = (data) => {

    Store.dispatch({
        type: 'INC_COUNT',
        info: data,
    })
}

export const decCountAction = (data) => {
    Store.dispatch({
        type: 'DEC_COUNT',
        info: data,
    })
}