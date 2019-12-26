import React from 'react';
import trash from './trash.svg';

const ListItem = ({ onChange, onDelete, value }) => {
  return (
    <div className="Item-container">
      <input
        className="Item-field"
        value={value}
        onChange={onChange}
        placeholder="New task"
      />
      <button className="Item-delete" onClick={onDelete}>
        <img src={trash} alt="logo"/>
      </button>
    </div>
  );
};

export default ListItem;