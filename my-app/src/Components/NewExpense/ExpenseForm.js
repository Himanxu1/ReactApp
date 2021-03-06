import React, { useState } from 'react';
import './ExpenseForm.css';
 

const ExpenseForm = (props) =>{


   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');
   

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }

    const sumbitHandler = (event) =>{

        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date:  new Date(enteredDate)
        }
       console.log(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredTitle('');

        props.onSaveExpenseData(expenseData);

    

    }


    return(
        <form onSubmit= {sumbitHandler}>
            <div className='new-expense_controls'>
              <div className='new-expense_control'>
                  <label>Title</label>
                  <input type="text"  value={enteredTitle} onChange={titleChangeHandler}/>
                  <label>Amount</label>
                  <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                  <label>Date</label>
                  <input type="date" value={enteredDate} onChange={dateChangeHandler}/>

              </div>
            </div>
            <div className='new-expense_action'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;