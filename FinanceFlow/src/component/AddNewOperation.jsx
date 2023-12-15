import React, { useState } from 'react';

const AddNewOperation = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddTransaction = (isPositive) => {
    if (amount.trim() === '' || selectedCategory.trim() === '') {
      // Gérer le cas où le montant ou la catégorie est vide
      alert('Veuillez remplir le montant et sélectionner une catégorie.');
      return;
    }

    // Déterminer si la transaction est positive ou négative
    const transactionAmount = isPositive ? parseFloat(amount) : -parseFloat(amount);

    // Obtenir la date
    const currentDate = new Date();

    // Formatage de la date
    const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

    // Votre logique pour ajouter la transaction avec amount, selectedCategory et selectedSubCategory
    addTransaction({
      amount: transactionAmount,
      category: selectedCategory,
      date: formattedDate,
      // Ajoutez d'autres informations supplémentaires si nécessaire
    });

    // Réinitialiser les états locaux
    setAmount('');
    setSelectedCategory('');

    console.log('Transaction ajoutée:', transactionAmount, selectedCategory);
  };

  return (
    <div className="Operation-component">
      <h2>Ajouter une Nouvelle Opération</h2>
      <label>Montant:</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
      />

      {/* Sélectionner une catégorie */}
      <div>
        <label>Sélectionner une Catégorie:</label>
        <input
          type="text"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          placeholder="Catégorie"
        />
      </div>

      {/* Ajouter la transaction (positive) */}
      <button className='button' id='Add' onClick={() => handleAddTransaction(true)}>Ajouter</button>

      {/* Ajouter la transaction (négative) */}
      <button className='button' id='Del' onClick={() => handleAddTransaction(false)}>Retirer</button>
    </div>
  );
};

export default AddNewOperation;
