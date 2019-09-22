import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses' 

test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})
test('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add expense', ()=>{
    const action = {
        type: 'ADD_EXPENSE',
        expense:{
            id: '4',
            description: 'another expense',
            createdAt: undefined,
            amount: 3333,
            note: ''        
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state.length).toBe(4)
})


test('should edit expense', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates:{
            amount: 9          
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].amount).toBe(9)
})

test('should not edit expense if not found', ()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '5',
        updates:{
            amount: 9          
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})