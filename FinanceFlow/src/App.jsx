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
      <div>
          <div className='Section-header'>
            <img src="../logo.png" alt="Photo de plage vue du dessus" />
            <h1 >Gestionnaire de Budget</h1>
            <p id='un'></p>
          </div>
        <div className='Section-principale'>
          {/* Composant pour ajouter une nouvelle opération */}
          <AddNewOperation addTransaction={addTransaction} />

          {/* Composant pour filtrer les transactions */}
          <TransactionDataFilter transactions={transactions} categories={categories} />

          {/* Utiliser le composant TransactionLogs pour afficher la liste des transactions et le solde restant */}
          <TransactionLogs transactions={transactions} clearHistory={clearHistory}/>

          {/* Utiliser le composant TransactionLogs pour afficher la liste des transactions et le solde restant */}
          <HowMuch transactions={transactions}/>
        </div>
        
        <div className='Section-secondaire'>
        
        
        
        </div>
          
        <div className='Section-footer'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus nihil quam debitis dolorum, 
          ratione dolore distinctio dolor, nostrum impedit quaerat explicabo sint! Nemo tempore qui ducimus autem dolorem molestias perspiciatis?</p>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dicta minima? 
          Id iste soluta dignissimos! Molestiae sunt laborum maxime est neque magni in corrupti, eaque ipsam doloribus placeat! Maxime, in.</p>
          
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, alias. Repellendus, 
          quia quasi amet blanditiis mollitia sed provident architecto deleniti esse officiis,
          cupiditate obcaecati dicta culpa laudantium ipsam aperiam fuga.</p>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, quos incidunt ad saepe,
          eum deserunt officia commodi, itaque velit reprehenderit inventore error placeat atque necessitatibus.
          Esse, harum. Dicta, eaque itaque.</p> 
        </div>  
          
      </div>
    </ResponsiveComponent>
  );
}

export default App;
