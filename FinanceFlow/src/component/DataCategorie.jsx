//creation categorie et sous categorie
import React, { useState } from 'react';

const DataCategorie = ({ onSelectCategorie, updateCategories }) => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [newSubCategory, setNewSubCategory] = useState('');

  const addCategory = () => {
    if (newCategory.trim() !== '' && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
      // Mettre à jour les catégories dans le composant parent
      updateCategories([...categories, newCategory]);
    }
  };

  const addSubCategory = () => {
    if (newSubCategory.trim() !== '' && !subCategories.includes(newSubCategory)) {
      setSubCategories([...subCategories, newSubCategory]);
      setNewSubCategory('');
    }
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onSelectCategorie(e.target.value);
  };

  return (
    <div className='categorie-container'>
      <h2>Gestion des Catégories</h2>

      {/* Ajouter une nouvelle catégorie */}
      <div>
        <label>Nouvelle Catégorie:</label>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button className='button' id='AddCategorie' onClick={addCategory}>Ajouter Catégorie</button>
      </div>

      {/* Ajouter une nouvelle sous-catégorie */}
      <div>
        <label>Nouvelle Sous-Catégorie:</label>
        <input
          type="text"
          value={newSubCategory}
          onChange={(e) => setNewSubCategory(e.target.value)}
        />
        <button className='button' id='AddSubCategorie' onClick={addSubCategory}>Ajouter Sous-Catégorie</button>
      </div>

      {/* Sélectionner une catégorie */}
      <div>
        <label>Sélectionner une Catégorie:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">-- Sélectionner --</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DataCategorie;
