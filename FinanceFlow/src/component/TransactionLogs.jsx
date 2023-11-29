//Liste des transaction
const TransactionLogs = ({ transactions , clearHistory }) => {
  return (
    <div>
      <h2>Historique des Transactions</h2>
      {transactions.map((transaction, index) => (
        <div key={index}>
          <p>Montant: {transaction.amount} $</p>
          <p>Catégorie: {transaction.category}</p>
          <p>Date: {transaction.date}</p>
          {/* Ajoutez d'autres champs de saisie pour les informations supplémentaires si nécessaire */}
          <hr />
        </div>
      ))}
      
      {/* Bouton pour effacer l'historique */}
      <button onClick={clearHistory}>Clear History</button>
      
    </div>
  );
};

export default TransactionLogs