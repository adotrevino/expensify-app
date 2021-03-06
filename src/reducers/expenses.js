const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
           return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return  state.filter((obj)=>(action.id !== obj.id))
        case 'EDIT_EXPENSE':
            return state.map((exp)=>{
                if(exp.id === action.id){
                    return{
                        ...exp,
                        ...action.updates
                    }
                }else{
                        return exp
                    }
            })
        default:
            return state
    }
}
export default expensesReducer