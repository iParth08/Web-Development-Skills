import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const totalSum = amounts.reduce((acc, item)=> (acc+= item), 0).toFixed(2);
  return (
    <div>
        <h4>Your Balance</h4>
        <h1>{totalSum}</h1>
    </div>
  )
}

export default Balance