import Expenses from './Components/Expenses/Expenses';
import React,{ useState, useEffect } from 'react';
import NewExpense from './Components/NewExpense/NewExpense';


let dummy_Expense = [
  {
    id: 'em1',
    title: "School Fees",
    amount: 200,
    date : new Date(2022,3,11)

  },
  {
    id: 'em2',
    title: "Shopping",
    amount: 900,
    date : new Date(2022,4,3)

  },
  {
    id: 'em3',
    title: "Food",
    amount: 700,
    date : new Date(2022,5,23)

  },
  {
    id: 'em4',
    title: "Suppliment",
    amount: 1200,
    date : new Date(2022,6,29)

  }
]

const  App = () => {

const [expenses,setExpense] = useState(dummy_Expense);

useEffect(() => {

},[])

  const addExpenseHandler = (expense) =>{
    const updatedExpense = [expense,...expenses]  
    setExpense(updatedExpense);
  }

  return (

    <div>
      <NewExpense onAddExpense= {addExpenseHandler}/>
      <Expenses item={expenses}/>
      </div>
  );
}

export default App;
