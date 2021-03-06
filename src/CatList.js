import React from 'react';


const CatList = ({ catPics }) => {
  const renderCats = catPics.map(cat =>
    <img src={cat.url} alt="" className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}}/>
  );

  return (
    <div>
      {renderCats}
    </div>
  );
};

export default CatList
