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
      <h2 id='h2-categorie'>Categories Panel</h2>

      <div className='newsuborcate' id='cate'>
        <label>New Categorie : {' '} </label>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button className='button' id='AddCategorie' onClick={addNewCategory}>Add Categorie</button>
      </div>

      <div className='newsuborcate' id='sub'>
        <div className='nobr'>
          <label>Add Subcategorie to : </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">-- Select the categorie --</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <br />
        <label>New Subcategorie:</label>
        <input
          type="text"
          value={newSubCategory}
          onChange={(e) => setNewSubCategory(e.target.value)}
        />
        <br />
        <button className='button' id='AddSubCategorie' onClick={addSubCategory}>Add the Subcategorie</button>
      </div>

      {/* ... d'autres éléments du composant */}
    </div>
  );
};

export default DataCategorie;
