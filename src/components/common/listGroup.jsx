import React, { Component } from "react";

const listGroup = (props) => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem
  } = props;

  return (
    <ul class="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
        
          key={item[valueProperty]}
          className={item === selectedItem ?"list-group-item active" : 'list-group-item'}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

listGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default listGroup;
