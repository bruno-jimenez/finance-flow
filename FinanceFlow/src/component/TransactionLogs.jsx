import React, { useRef, useEffect } from 'react';

const TransactionLogs = ({ transactions, clearHistory }) => {
  const transactionListRef = useRef(null);

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

  return (
    <div className="Transactionlogs-container">
    <div className="title-logs">
      <h2>Historique des Transactions</h2>
    </div>  
      <div className="transaction-list" ref={transactionListRef}>
        {transactions.slice(0, 9).reverse().map((transaction, index) => (
          <div key={index} className="transaction-item">
            <p>Montant: {transaction.amount} $</p>
            <p>Catégorie: {transaction.category}</p>
            <p>Date: {transaction.date}</p>
            {/* Ajoutez d'autres champs de saisie pour les informations supplémentaires si nécessaire */}
            <hr />
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleClearHistory} id='clear'>Clear History</button>

        <button id='edit'>Edit</button>
        {/* Ajoutez d'autres boutons ou éléments de menu déroulant ici pour l'édition */}
      </div>
    </div>
  );
};

export default TransactionLogs;
