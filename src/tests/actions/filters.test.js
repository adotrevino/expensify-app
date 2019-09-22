import moment from 'moment' 
import {setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters' 

test('should generate set start date action object', ()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})
test('should generate set end date action object', ()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should sort by date', ()=>{
    const action = sortByDate()
    expect(action).toEqual({type:'SORT_BY_DATE'})
})
test('should sort by amount', ()=>{
    const action = sortByAmount()
    expect(action).toEqual({type:'SORT_BY_AMOUNT'})
})

test('test text filter', ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: ''
    })
})
test('test text filter filled', ()=>{
    const action = setTextFilter('lorem')
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text: 'lorem'
    })
})