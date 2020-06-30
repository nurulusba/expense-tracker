import React, { useState, useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const AddTransaction = () => {
  const [ text, setText ] = useState("");
  const [ amount, setAmount ] = useState(0);
  
  const { addTransaction } = useContext(GlobalContext);

  const onTextChange = event => {
    setText(event.target.value);
    console.log(text);
  }

  const onAmountChange = event => {
     setAmount(parseInt(event.target.value));
  }

 
  const onSubmit = e => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100000000);
    addTransaction(text, amount, id);
    setText("");
    setAmount("");
  }

    return (
       <>
       
    <h3>Add new transaction</h3>

      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text}  onChange={onTextChange} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={onAmountChange} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>

       </>

    )
}

export default AddTransaction;