import React, { useState } from 'react';

const TransactionDataFilter = ({ transactions, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');

  const filterTransactions = () => {
    // Appliquer les filtres sur la liste des transactions
    let filteredTransactions = [...transactions];

    if (selectedCategory !== '') {
      filteredTransactions = filteredTransactions.filter(transaction => transaction.category === selectedCategory);
    }

    if (startDate !== '') {
      const startDateFilter = new Date(startDate);
      filteredTransactions = filteredTransactions.filter(transaction => new Date(transaction.date) >= startDateFilter);
    }

    if (endDate !== '') {
      const endDateFilter = new Date(endDate);
      filteredTransactions = filteredTransactions.filter(transaction => new Date(transaction.date) <= endDateFilter);
    }

    if (minAmount !== '') {
      const minAmountFilter = parseFloat(minAmount);
      filteredTransactions = filteredTransactions.filter(transaction => transaction.amount >= minAmountFilter);
    }

    if (maxAmount !== '') {
      const maxAmountFilter = parseFloat(maxAmount);
      filteredTransactions = filteredTransactions.filter(transaction => transaction.amount <= maxAmountFilter);
    }

    // Vous pouvez maintenant utiliser filteredTransactions comme liste filtrée
    console.log('Transactions filtrées:', filteredTransactions);
  };

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
      <button onClick={filterTransactions}>Appliquer les filtres</button>
    </div>
  );
};

export default TransactionDataFilter;
