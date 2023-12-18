//creation categorie et sous categorie
import React, { useState } from 'react';


const DataCategorie = ({ categories, addCategory }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      addCategory(newCategory);
      setNewCategory('');
    }
  };

  return (
    <div className='categorie-container'>
      <h2 id='categ'>Gestion des Catégories</h2>
      <div>
        <label>Nouvelle Catégorie:</label>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button className='button' id='AddCategorie' onClick={handleAddCategory}>Ajouter Catégorie</button>
      </div>
    </div>
  );
};

export default DataCategorie;

