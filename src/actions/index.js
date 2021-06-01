export const addItems = item =>({
    type:'ADD_ITEMS',
    id: +Date.now(),
    text: item.text
})

export const deleteItem = id =>({
    type: 'DELETE_ITEM',
    id
})