import { useState } from 'react';

import AddNewOperation from './component/AddNewOperation';
import TransactionLogs from './component/TransactionLogs';
import HowMuch from './component/HowMuch';
import TransactionData from './component/TransactionData'; // Importer TransactionData ici
import DataCategorie from './component/DataCategorie';
import TransactionDataFilter from './component/TransactionDataFilter';
import "./CSS/index.css"; /* CSS global */
import "./CSS/Grid.css"; /*CSS sur l'organisation des grid*/

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

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
          onEditTransaction={setSelectedTransaction} // Passer la fonction de gestion de l'édition
        />

        {/* Utiliser le composant TransactionLogs pour afficher la liste des transactions et le solde restant */}
        <TransactionLogs
          transactions={transactions}
          clearHistory={clearHistory}
          updateTransaction={updateTransaction}
          categories={categories}
          onEditTransaction={setSelectedTransaction} // Passer la fonction de gestion de l'édition
        />

        {/* Utiliser le composant HowMuch pour afficher le solde restant */}
        <HowMuch transactions={transactions} />
      </div>
    
      <div className='Section-secondaire'>
        {/* Composant DataCategorie pour gérer les catégories */}
        <DataCategorie categories={categories} addCategory={addCategory} />
        
        {/* Composant TransactionData */}
        {/* Toujours afficher le composant, mais avec la transaction sélectionnée comme prop */}
        <TransactionData
          selectedTransaction={selectedTransaction}
          onUpdate={(updatedTransaction) => {
            // Mettre à jour la transaction sélectionnée
            setSelectedTransaction(updatedTransaction);
            // Mettre à jour les transactions non filtrées si nécessaire
            const updatedTransactions = transactions.map(t => (t === selectedTransaction ? updatedTransaction : t));
            setTransactions(updatedTransactions);
          }}
          onCancel={() => setSelectedTransaction(null)}
          categories={categories}
          // Toujours éditable si une transaction est sélectionnée
          editable={!!selectedTransaction}
        />
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
