export default (state, action) => {
    switch(action.type) {
        case 'ADD_TRANSACTION' :
          return [...state, { text, amount }]
    }
}  