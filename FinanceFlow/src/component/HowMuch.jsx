import React from 'react';

const HowMuch = ({ transactions }) => {
  // Calcul du solde restant
  const calculateBalance = () => {
    // Somme initiale à zéro
    let balance = 0;

    // Parcours de toutes les transactions
    transactions.forEach((transaction) => {
      balance += transaction.amount;
    });

    // Le solde final
    return balance;
  };

  const balance = calculateBalance();

  return (
    <div className='howmuch-container'>
      <h2>Solde Restant</h2>
      <p>Votre solde : {balance} $</p>
    </div>
  );
};

export default HowMuch;
