import React, { useState } from 'react';
import DataCategorie from './DataCategorie';

const AddNewOperation = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const handleAddTransaction = (isPositive) => {
    if (amount.trim() === '' || selectedCategory.trim() === '') {
      // Gérer le cas où le montant ou la catégorie est vide
      alert('Veuillez remplir le montant et sélectionner une catégorie.');
      return;
    }

    // Déterminer si la transaction est positive ou négative
    const transactionAmount = isPositive ? parseFloat(amount) : -parseFloat(amount);

    // Votre logique pour ajouter la transaction avec amount, selectedCategory et selectedSubCategory
    // ...

    // Réinitialiser les états locaux
    setAmount('');
    setSelectedCategory('');
    setSelectedSubCategory('');
  };

  return (
    <div>
      <h2>Ajouter une Nouvelle Opération</h2>
      <label>Montant:</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
      />

      {/* Intégrer le composant DataCategorie pour gérer les catégories et sous-catégories */}
      <DataCategorie
        onSelectCategorie={(category) => setSelectedCategory(category)}
        onSelectSubCategorie={(subCategory) => setSelectedSubCategory(subCategory)}
      />

      {/* Ajouter la transaction (positive) */}
      <button onClick={() => handleAddTransaction(true)}>Ajouter Transaction Positive</button>

      {/* Ajouter la transaction (négative) */}
      <button onClick={() => handleAddTransaction(false)}>Ajouter Transaction Négative</button>
    </div>
  );
};

export default AddNewOperation;
