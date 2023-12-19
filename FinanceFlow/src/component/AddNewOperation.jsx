import React, { useState } from 'react';

const AddNewOperation = ({ addTransaction, categories }) => {
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddTransaction = (isPositive) => {
    // Votre logique pour ajouter la transaction avec amount, selectedCategory et selectedSubCategory
    addTransaction({
      amount: isPositive ? parseFloat(amount) : -parseFloat(amount),
      category: selectedCategory,
      description: '', // Ajoutez votre logique pour la description
      place: '', // Ajoutez votre logique pour le lieu
      date: new Date().toISOString(), // Date actuelle
    });

    // Réinitialiser les états locaux
    setAmount('');
    setSelectedCategory('');
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

      {/* Utiliser directement la liste de catégories */}
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

      {/* Ajouter la transaction (positive) */}
      <button className='button' id='Add' onClick={() => handleAddTransaction(true)}>Ajouter</button>

      {/* Ajouter la transaction (négative) */}
      <button className='button' id='Del' onClick={() => handleAddTransaction(false)}>Retirer</button>
    </div>
  );
};

export default AddNewOperation;
