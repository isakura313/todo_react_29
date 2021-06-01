const items = (state=[], action)=>{
    switch(action.type){
        case 'ADD_ITEMS':
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
            case 'DELETE_ITEM':
                return state.filter(item => {
                    return item.id !== action.id
                  })
            default:
                return state        
    }
}


export default items