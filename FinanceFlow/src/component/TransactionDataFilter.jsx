import React, { useState, useRef, useEffect } from 'react';

const TransactionDataFilter = ({ transactions, categories, filterTransactions }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const transactionListRef = useRef(null);

  useEffect(() => {
    // Faire défiler automatiquement vers le bas lorsque de nouvelles transactions sont filtrées
    if (transactionListRef.current) {
      transactionListRef.current.scrollTop = 1;
    }
  }, [filteredTransactions]);

  const applyFilters = () => {
    const filtered = transactions.filter((transaction) => {
      // Appliquer les filtres
      const categoryFilter = selectedCategory === '' || transaction.category === selectedCategory;
      const startDateFilter = startDate === '' || new Date(transaction.date) >= new Date(startDate);
      const endDateFilter = endDate === '' || new Date(transaction.date) <= new Date(endDate);
      const minAmountFilter = minAmount === '' || transaction.amount >= parseFloat(minAmount);
      const maxAmountFilter = maxAmount === '' || transaction.amount <= parseFloat(maxAmount);

      return categoryFilter && startDateFilter && endDateFilter && minAmountFilter && maxAmountFilter;
    });

    // Mettre à jour l'état des transactions filtrées
    setFilteredTransactions(filtered);
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
      <button onClick={applyFilters}>Appliquer les filtres</button>

      {/* Liste des transactions filtrées */}
      <div className="transaction-filter-list" ref={transactionListRef}>
        {filteredTransactions.map((transaction, index) => (
          <div key={index} className="filtered-transaction-item">
            <p>Montant: {transaction.amount} $</p>
            <p>Catégorie: {transaction.category}</p>
            <p>Date: {transaction.date}</p>
            {/* Ajouter d'autres informations si nécessaire */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionDataFilter;
