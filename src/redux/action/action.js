// action for watchlater
export const addVideo = (data) => {
    console.log("watchlater action",data);  
    return (dispatch) => {
        if(data){

            dispatch({
                type : "ADD_VIDEO",
                payload : data
            })
        }
        }
}


//action for history

export const addHistory = (data) => {
    console.log("history action", data);
    return ( dispatch ) => {
        if(data){

            dispatch({
                type : "ADD_HISTORY",
                payload : data
            })
        }
    }
}

