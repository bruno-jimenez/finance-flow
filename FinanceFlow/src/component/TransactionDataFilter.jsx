import React, { useState } from 'react';

const TransactionDataFilter = ({ transactions, categories, filterTransactions }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');

  return (
    <div className="TransactionDataFilter-container">
      <h2>Filtrer les Transactions</h2>
      {/* Ajouter des champs d'entrée et des sélecteurs pour les différents critères de filtrage */}
      <label>Catégorie:</label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">-- Sélectionner --</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <label>Date de début:</label>
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

      <label>Date de fin:</label>
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />

      <label>Montant minimum:</label>
      <input type="number" value={minAmount} onChange={(e) => setMinAmount(e.target.value)} />

      <label>Montant maximum:</label>
      <input type="number" value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)} />

      {/* Bouton pour appliquer les filtres */}
      <button onClick={() => filterTransactions({
        selectedCategory,
        startDate,
        endDate,
        minAmount,
        maxAmount,
      })}>Appliquer les filtres</button>
    </div>
  );
};

export default TransactionDataFilter;
