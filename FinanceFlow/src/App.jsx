import { useState } from 'react';
import AddNewOperation from './component/AddNewOperation';
import TransactionLogs from './component/TransactionLogs';
import HowMuch from './component/HowMuch';
import ResponsiveComponent from './component/responsive';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Fonction pour ajouter une nouvelle transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const clearHistory = () => {
    setTransactions([]);
  };

  return (
    <ResponsiveComponent>
      <div>
        <h1>Gestionnaire de Budget</h1>

        {/* Composant pour ajouter une nouvelle opération */}
        <AddNewOperation addTransaction={addTransaction} />

        {/* Utiliser le composant TransactionLogs pour afficher la liste des transactions et le solde restant */}
        <TransactionLogs transactions={transactions} clearHistory={clearHistory}/>

        {/* Utiliser le composant TransactionLogs pour afficher la liste des transactions et le solde restant */}
        <HowMuch transactions={transactions}/>
      </div>
    </ResponsiveComponent>
  );
}

export default App