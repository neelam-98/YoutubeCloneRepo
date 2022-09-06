const initialData = {
    list : []
}

const watchlater_reducer = (state = initialData, action) => {
    console.log('VideoReducer', action.payload);
    switch (action.type) {
        case "ADD_VIDEO":
            return{
                    ...state,
                    list : [
                        ...state.list,{
                       list: action.payload
                    }
                    ]
                    
            }
            
            // break;
    
        default:
            return state;
    //         // break;
    }

};
export default watchlater_reducer;