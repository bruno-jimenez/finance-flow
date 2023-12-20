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
    <div id='title-operation'>
    <h2>Ajouter une opération</h2>
    </div>
      <div id='amout-ope'>
        <label>Amount : </label>
        <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
        />
      </div>
      {/* Utiliser directement la liste de catégories */}
      <div id='cate-ope'>
      <label>  Categorie:</label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">--Select--</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      </div>
      <div id='adddel-ope'>
      {/* Ajouter la transaction (positive) */}
      <button className='button' id='Add' onClick={() => handleAddTransaction(true)}>Ajouter</button>

      {/* Ajouter la transaction (négative) */}
      <button className='button' id='Del' onClick={() => handleAddTransaction(false)}>Retirer</button>
      </div>
    </div>
  );
};

export default AddNewOperation;
