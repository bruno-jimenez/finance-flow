import { useState } from 'react';

import AddNewOperation from './component/AddNewOperation';
import TransactionLogs from './component/TransactionLogs';
import HowMuch from './component/HowMuch';
import TransactionDataFilter from './component/TransactionDataFilter';
import DataCategorie from './component/DataCategorie';
import TransactionData from './component/TransactionData';
import "./CSS/index.css"; /* CSS global */
import "./CSS/Grid.css"; /*CSS sur l'organisation des grid*/
<css></css>

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false); // Nouvel état pour le mode édition

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
    setIsEditMode(false); // Désactiver le mode édition après la mise à jour
  };

  const handleEditTransaction = (transaction) => {
    setSelectedTransaction(transaction);
    setIsEditMode(true); // Activer le mode édition lorsqu'on clique sur "Éditer"
  };

  return (
    <div>
      <div className='Section-header'>
        <img src="/img/logo.png" id='logo' alt="logo" />
        <h1>Gestionnaire de Budget</h1>
        <p id='un'></p>
      </div>
    
      <div className='Section-principale'>
        {/* Composant pour ajouter une nouvelle opération */}
        <AddNewOperation addTransaction={addTransaction} categories={categories} />

        {/* Composant pour filtrer les transactions */}
        <TransactionDataFilter
          transactions={transactions}
          categories={categories}
          onEditTransaction={handleEditTransaction} // Passer la fonction pour gérer l'édition
        />

        {/* Utiliser le composant TransactionLogs pour afficher la liste des transactions et le solde restant */}
        <TransactionLogs
          transactions={transactions}
          clearHistory={clearHistory}
          updateTransaction={updateTransaction}
          categories={categories}
          onEditTransaction={handleEditTransaction} // Passer la fonction pour gérer l'édition
        />

        {/* Utiliser le composant HowMuch pour afficher le solde restant */}
        <HowMuch transactions={transactions} />
      </div>
    
      <div className='Section-secondaire'>
        {/* Composant DataCategorie pour gérer les catégories */}
        <DataCategorie categories={categories} addCategory={addCategory} />
        
        {/* Composant TransactionData */}
        {selectedTransaction && (
          <TransactionData
            selectedTransaction={selectedTransaction}
            onUpdate={(updatedTransaction) => {
              updateTransaction(transactions.map(t => (t === selectedTransaction ? updatedTransaction : t)));
            }}
            onCancel={() => {
              setSelectedTransaction(null);
              setIsEditMode(false);
            }}
            categories={categories}
            isEditMode={isEditMode}
          />
        )}
      </div>
      
      <div className='Section-footer'>
        {/* Votre contenu de pied de page */}
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
      </div>
    </div>
  );
}

export default App;
