import React, { useState } from 'react';

const DataCategorie = ({ categories, addCategory }) => {
  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newSubCategory, setNewSubCategory] = useState('');

  const addNewCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      addCategory(newCategory);
      setNewCategory('');
    }
  };

  const addSubCategory = () => {
    if (selectedCategory.trim() !== '' && newSubCategory.trim() !== '') {
      addCategory(`${selectedCategory} - ${newSubCategory}`);
      setNewSubCategory('');
    }
  };

  return (
    <div className='categorie-container'>
      <h2 id='h2-categorie'>Gestion des Catégories</h2>

      <div className='newsuborcate' id='cate'>
        <label>Nouvelle Catégorie:</label>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button className='button' id='AddCategorie' onClick={addNewCategory}>Ajouter Catégorie</button>
      </div>

      <div className='newsuborcate' id='sub'>
        <label>Ajouter une sous-catégorie à :</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">-- Sélectionner une catégorie --</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label>Nouvelle Sous-Catégorie:</label>
        <input
          type="text"
          value={newSubCategory}
          onChange={(e) => setNewSubCategory(e.target.value)}
        />
        <button className='button' id='AddSubCategorie' onClick={addSubCategory}>Ajouter Sous-Catégorie</button>
      </div>

      {/* ... d'autres éléments du composant */}
    </div>
  );
};

export default DataCategorie;
