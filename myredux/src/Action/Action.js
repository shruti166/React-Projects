export const Action = (data, dispatch) => {
    dispatch({
        type: "Users",
        payload: data,
    })
}