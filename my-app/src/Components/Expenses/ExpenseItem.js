import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';
import { useState } from 'react';

const  ExpenseItem = (props) => {

  
  const [newTitle,setNewTitle] =  useState("hi");
     const [title,setTitle] =  useState(props.title);

   const clickHandler = () =>{
      setTitle(newTitle);
  }
  const changeHandler = (event) =>{
    setNewTitle(event.target.value)
  }

   return (
    <Card className="expense-item">
         <ExpenseDate 
           date={props.date}
         />
         <div  className="expense-item__description">
             <h2>{title}</h2>
             <button onClick={clickHandler}>Change title</button>
             <input type="text" value={newTitle}  onChange={changeHandler}/>
             <div className="expense-item__price">${props.amount}</div>
             
         </div>

    </Card>

   );

}

export default ExpenseItem;