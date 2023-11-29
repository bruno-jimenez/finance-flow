// AddNewOperation.js

import React, { useState } from 'react';

const AddNewOperation = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e, transactionType) => {
    e.preventDefault();

    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`

    const newTransaction = {
      amount: transactionType === 'Ajout' ? Math.abs(Number(amount)) : -Math.abs(Number(amount)),
      category,
      date: formattedDate,
    };

    // Afficher les données de la nouvelle transaction dans la console
    console.log('Nouvelle transaction:', newTransaction);

    // Appeler la fonction du composant parent pour ajouter la nouvelle transaction
    addTransaction(newTransaction);

    // Réinitialisez les états locaux pour les informations supplémentaires si nécessaire
    setAmount('');
    setCategory('');
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e, 'Ajout')}>
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
        <button type="submit">Ajout</button>
      </form>

      <form onSubmit={(e) => handleSubmit(e, 'Perte')}>
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
        <button type="submit">Perte</button>
      </form>
    </div>
  );
};

export default AddNewOperation;
