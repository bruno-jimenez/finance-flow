import { useState } from 'react';

const TransactionData = ({ selectedTransaction, onUpdate, onCancel, categories }) => {
  // Vérifie si selectedTransaction est null, auquel cas initialise les états avec des valeurs par défaut
  const [amount, setAmount] = useState(selectedTransaction?.amount.toString() || '');
  const [description, setDescription] = useState(selectedTransaction?.description || '');
  const [place, setPlace] = useState(selectedTransaction?.place || '');
  const [selectedCategory, setSelectedCategory] = useState(selectedTransaction?.category || '');

  // Vérifie si selectedTransaction est null, auquel cas rend un message indiquant qu'aucune transaction n'est sélectionnée
  if (!selectedTransaction) {
    return (
      <div className="modify">
        <p>Aucune transaction sélectionnée.</p>
      </div>
    );
  }

  const handleUpdateTransaction = () => {
    // Mettre à jour la transaction avec les nouvelles informations
    onUpdate({
      ...selectedTransaction,
      amount: parseFloat(amount),
      description,
      place,
      category: selectedCategory,
    });
  };

  return (
    <div className="modify">
      <h2>Modifier la Transaction</h2>
      <label>Montant:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
      />

      <label>Description:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={15}
        placeholder="Description"
      />

      <label>Lieu:</label>
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Lieu"
      />

      <label>Catégorie:</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">-- Sélectionner --</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Bouton pour appliquer les mises à jour */}
      <button onClick={handleUpdateTransaction}>Valider</button>
      {/* Bouton pour annuler l'édition */}
      <button onClick={onCancel}>Annuler</button>
    </div>
  );
};

export default TransactionData;
