//Liste des transaction
const TransactionLogs = ({ transactions , clearHistory }) => {
 const handleClearHistory = () => {
    // Afficher la popup de confirmation
    const isConfirmed = window.confirm('Confirmez-vous la suppression de l\'historique ? Veuillez a sauvegarder votre historique avant où il sera perdu');

    // Si l'utilisateur confirme, effectuez la suppression de l'historique
    if (isConfirmed) {
      // Appeler la fonction du composant parent pour effacer l'historique
      clearHistory();
    }
    // Sinon, ne rien faire
  };
  return (
    <div className="Transactionlogs-container">
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
      <button onClick={handleClearHistory}>Clear History</button>
      
    </div>
  );
};

export default TransactionLogs