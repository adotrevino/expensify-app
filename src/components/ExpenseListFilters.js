import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters' 
import {DateRangePicker} from 'react-dates' 


export class ExpenseListFilters extends React.Component{
    state ={
        focused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
      }
    onFocusChange = (focused) => {
        this.setState(()=>({focused}))
    }
    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e)=>{
                        
        const val = e.target.value
        if(val === 'date'){
            this.props.sortByDate()
        }else if(val === 'amount'){
            this.props.sortByAmount()
        }
        
        
    }
    render(){
        return(
            <div>
                <input  
                    type="text" 
                    value={this.props.filters.text} 
                    onChange={this.onTextChange}
                    />
                    <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                    <DateRangePicker
                    id="datePicker"
                        startDate={this.props.filters.startDate}
                        startDateId="lbsfblsdkfn"
                        endDate={this.props.filters.endDate}
                        endDateId="fsdnlnfd"
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        showClearDates
                        isOutsideRange={()=>false}
                    />
            </div>
        )
    }
  
}

const mapStateToProps = (state) => {
    return{
        filters: state.filters
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate)),
        setTextFilter: (text) => dispatch(setTextFilter(text)),
        sortByDate: () => dispatch(sortByDate),
        sortByAmount: () => dispatch(sortByAmount)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)