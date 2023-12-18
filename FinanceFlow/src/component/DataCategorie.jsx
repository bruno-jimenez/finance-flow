import React, { useState } from 'react';

const DataCategorie = ({ categories, addCategory }) => {
  const [newCategory, setNewCategory] = useState('');

  const addNewCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      addCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <div className='categorie-container'>
      <h2>Gestion des Catégories</h2>

      <div>
        <label>Nouvelle Catégorie:</label>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button className='button' id='AddCategorie' onClick={addNewCategory}>Ajouter Catégorie</button>
      </div>

      {/* ... d'autres éléments du composant */}
    </div>
  );
};

export default DataCategorie;