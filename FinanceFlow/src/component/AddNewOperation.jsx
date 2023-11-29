//Ajout de nouvelle transaction

import React, { useState } from 'react';

const AddNewOperation = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [aate, setdate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      amount,
      category,
      // Ajoutez d'autres informations supplémentaires ici
    };

    // Afficher les données de la nouvelle transaction dans la console
    console.log('Nouvelle transaction:', newTransaction);

    // Appeler la fonction du composant parent pour ajouter la nouvelle transaction
    addTransaction(newTransaction);

    // Réinitialiser les états locaux
    setAmount('');
    setCategory('');
    // Réinitialisez d'autres états locaux pour les informations supplémentaires si nécessaire
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Ajoutez des champs de saisie pour les informations supplémentaires si nécessaire */}
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Catégorie"
      />
      {/* Ajoutez d'autres champs de saisie pour les informations supplémentaires si nécessaire */}
      <button type="submit">Ajouter Transaction</button>
    </form>
  );
};

export default AddNewOperation;