import React from 'react';

function Language ({ name, image }) {
  return (
    <div className='language-item'>
      <div className='language-name'>{name}</div>
      <img 
        className='language-image' 
        src={image} 
        alt={`Logo for ${name}`}
      />
    </div>
  );
};

export default Language;
