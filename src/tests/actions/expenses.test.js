import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('should setup remove expense action object', () =>{
    const action = removeExpense({ id:'123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})
test('should edit object',()=>{
    const action = editExpense('s23239',{amount:555.55})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'s23239',
        updates:{
            amount:555.55
        }
        
    })
})

test('should add new expense with default values',()=>{
  
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           id: expect.any(String),
           description:'', note: '', amount: 0, createdAt: 0
        }
    })
})

test('should add new expense with provided values',()=>{
    const expenseData = {
     description: 'rent', 
     amount: 9293,
     createdAt: 1000,
     note: 'last month rent'   
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})