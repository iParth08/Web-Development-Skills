import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddNewTransaction = () => {

    const {addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) =>{
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random()*1000000),
            text,
            amount : +amount //string--> integer
        }

        addTransaction(newTransaction);
    }

  return (
    <>
         <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input 
                    type="text" 
                    name='text'
                    placeholder="Enter text..."
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    (negative - expense, positive - income)
                </label>
                
                <input 
                    type="number" 
                    name='amount'
                    placeholder="Enter amount..."
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)} 
                />
            </div>
            <button 
            className="btn">Add transaction</button>
        </form>
    </>
  )
}

export default AddNewTransaction