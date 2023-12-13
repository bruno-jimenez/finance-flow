import React, { useState } from 'react';
import AddNewOperation from './component/AddNewOperation';
import TransactionLogs from './component/TransactionLogs';
import HowMuch from './component/HowMuch';
import ResponsiveComponent from './component/responsive';
import TransactionDataFilter from './component/TransactionDataFilter';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);  // Assurez-vous de mettre à jour cette liste en fonction de vos besoins

  // Fonction pour ajouter une nouvelle transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const clearHistory = () => {
    setTransactions([]);
  };

  return (
    <ResponsiveComponent>
      <div className='box'>
          <img className='logotitleun' src="../logo.png" alt="Photo de plage vue du dessus" />
          <h1 className='logotitleun'>Gestionnaire de Budget</h1>
      <p className='bouchetrou logotitleun' id='un'></p>

        {/* Composant pour ajouter une nouvelle opération */}
        <AddNewOperation addTransaction={addTransaction} />

        {/* Composant pour filtrer les transactions */}
        <TransactionDataFilter transactions={transactions} categories={categories} />

        {/* Utiliser le composant TransactionLogs pour afficher la liste des transactions et le solde restant */}
        <TransactionLogs transactions={transactions} clearHistory={clearHistory}/>

        {/* Utiliser le composant TransactionLogs pour afficher la liste des transactions et le solde restant */}
        <HowMuch transactions={transactions}/>
      </div>
    </ResponsiveComponent>
  );
}

export default App;
