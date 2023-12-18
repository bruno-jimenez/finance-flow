import React, { useState, useEffect } from 'react';

const TransactionData = ({ selectedTransaction, onUpdate, onCancel }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (selectedTransaction) {
      setAmount(String(selectedTransaction.amount));
      setCategory(selectedTransaction.category);
    }
  }, [selectedTransaction]);

  const handleUpdate = () => {
    const updatedTransaction = {
      ...selectedTransaction,
      amount: parseFloat(amount),
      category: category,
      // Ajoutez d'autres informations supplémentaires si nécessaire
    };

    onUpdate(updatedTransaction);
  };

  return (
    <div className="TransactionData-container">
      <h2>Modifier la Transaction</h2>
      <label>Montant:</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
      />

      <label>Catégorie:</label>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Catégorie"
      />

      <button onClick={handleUpdate}>Valider</button>
      <button onClick={onCancel}>Annuler</button>
    </div>
  );
};

export default TransactionData;
