import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

  return (
    <div>
        <h3>History</h3>
        <ul className="list">
            {transactions.map((transac)=>(
                <Transaction transaction={transac}  />
            ))}
             
        </ul>
    </div>
  )
}

export default TransactionList;