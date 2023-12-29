import './App.css';
import AddNewTransaction from './components/AddNewTransaction';
import Balance from './components/Balance';
import { Header } from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    //Global Provider gives context to all, acts as a GrandParent
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
