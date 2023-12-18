import { useState } from 'react';

import AddNewOperation from './component/AddNewOperation';
import TransactionLogs from './component/TransactionLogs';
import HowMuch from './component/HowMuch';
import ResponsiveComponent from './component/responsive';
import TransactionDataFilter from './component/TransactionDataFilter';
import DataCategorie from './component/DataCategorie';
import TransactionData from './component/TransactionData';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null); // Ajout de la définition

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const clearHistory = () => {
    setTransactions([]);
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const updateTransaction = (updatedTransactions) => {
    setTransactions(updatedTransactions);
    setSelectedTransaction(null);
  };

  return (
    <ResponsiveComponent>
      <div>
        <div className='Section-header'>
          <img src="../logo.png" alt="Photo de plage vue du dessus" />
          <h1>Gestionnaire de Budget</h1>
          <p id='un'></p>
        </div>
      
        <div className='Section-principale'>
          {/* Composant pour ajouter une nouvelle opération */}
          <AddNewOperation addTransaction={addTransaction} categories={categories} />

          {/* Composant pour filtrer les transactions */}
          <TransactionDataFilter transactions={transactions} categories={categories} />

          {/* Utiliser le composant TransactionLogs pour afficher la liste des transactions et le solde restant */}
          <TransactionLogs transactions={transactions} clearHistory={clearHistory} updateTransaction={updateTransaction} />

          {/* Utiliser le composant TransactionLogs pour afficher la liste des transactions et le solde restant */}
          <HowMuch transactions={transactions} />
        </div>
      
        <div className='Section-secondaire'>
        
          {/* Composant DataCategorie pour gérer les catégories */}
          <DataCategorie categories={categories} addCategory={addCategory} />
          
          {/* Composant TransactionData*/}
          <TransactionData selectedTransaction={selectedTransaction} onUpdate={(updatedTransaction) => 
          {updateTransaction(transactions.map(t => (t === selectedTransaction ? updatedTransaction : t)));}}
          onCancel={() => setSelectedTransaction(null)}/>
          
        </div>
        
        <div className='Section-footer'>
          {/* Votre contenu de pied de page */}
        
        </div>
      
      </div>
    </ResponsiveComponent>
  );
}

export default App;
