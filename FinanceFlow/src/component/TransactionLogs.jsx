import React, { useRef, useEffect, useState } from 'react';
import TransactionData from './TransactionData';

const TransactionLogs = ({ transactions, clearHistory, updateTransaction, categories }) => {
  const transactionListRef = useRef(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  useEffect(() => {
    // Faire défiler automatiquement vers le bas lorsque de nouvelles transactions sont ajoutées
    if (transactionListRef.current) {
      transactionListRef.current.scrollTop = 1;
    }
  }, [transactions]);

  const handleClearHistory = () => {
    const isConfirmed = window.confirm(
      'Confirmez-vous la suppression de l\'historique ? Veuillez à sauvegarder votre historique avant où il sera perdu.'
    );

    if (isConfirmed) {
      clearHistory();
    }
  };

  const handleEditTransaction = (transaction) => {
    // Mettre à jour la transaction sélectionnée
    setSelectedTransaction(transaction);
  };

  const handleUpdateTransaction = (updatedTransaction) => {
    // Mettre à jour la transaction dans la liste des transactions
    const updatedTransactions = transactions.map((t) =>
      t === selectedTransaction ? updatedTransaction : t
    );
    // Mettre à jour la liste des transactions dans le composant parent
    updateTransaction(updatedTransactions);
    // Réinitialiser la transaction sélectionnée
    setSelectedTransaction(null);
  };

  const handleDownloadTransactions = () => {
    const data = JSON.stringify(transactions, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'transactions.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="Transactionlogs-container">
      <div className="title-logs">
        <p id='deux'></p>
        <h2 id='logs'>Historique des Transactions</h2>
        <p id='trois'></p>
      </div>  
      <div className="transaction-list" ref={transactionListRef}>
        {transactions.slice(0, 9).reverse().map((transaction, index) => (
          <div key={index} className="transaction-item">
            <p className='list-p' id='montant'>Montant: {transaction.amount} $</p>
            <p className='list-p' id='categorie'>Catégorie: {transaction.category}</p>
            <p className='list-p' id='date'>Date: {transaction.date}</p>
            <p className='list-p' id='description'>Description: {transaction.description || '-'}</p>
            <p className='list-p' id='lieu'>Lieu: {transaction.place || '-'}</p>
            <button id='edit' onClick={() => handleEditTransaction(transaction)}>
              <img src='/img/editer.png' alt='Editer'/>
            </button>
            <hr />
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleClearHistory} id='clear'>Effacer historique</button>
        <button onClick={handleDownloadTransactions} id='download'>Télécharger l'historique</button>
      </div>

      {selectedTransaction && (
        <TransactionData
          selectedTransaction={selectedTransaction}
          onUpdate={handleUpdateTransaction}
          onCancel={() => setSelectedTransaction(null)}
          categories={categories}
        />
      )}
    </div>
  );
};

export default TransactionLogs;
