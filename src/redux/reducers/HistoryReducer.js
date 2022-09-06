const initialData = {
    historyList : []
}

const HistoryReducer = (state = initialData, action) => {
    console.log('HistoryReducer', action.payload);
    switch (action.type) {
        case "ADD_HISTORY":
            return{
                    ...state,
                    historyList : [
                        ...state.historyList,{
                       historyList: action.payload
                    }
                    ]
                    
            }   
    default:
            return state;
    }

};
export default HistoryReducer;