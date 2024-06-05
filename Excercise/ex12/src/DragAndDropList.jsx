import React, { useState } from 'react';
import './DragAndDropList.css'; // Make sure to create this CSS file

function DragAndDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  console.log("ha")
  const onDragStart = (e, index) => {
    setDraggedItemIndex(index);
    setTimeout(() => e.target.classList.add('dragging'), 0);
  };

  const onDragEnd = (e) => {
    e.target.classList.remove('dragging');
    setDraggedItemIndex(null);
  };

  const onDragOver = (index) => {
    if (draggedItemIndex === null || draggedItemIndex === index) {
      return;
    }

    let newList = [...items];
    const item = newList[draggedItemIndex];
    newList.splice(draggedItemIndex, 1); // Remove the item from its original position
    newList.splice(index, 0, item); // Insert the item at the new position
    setDraggedItemIndex(index); // Update the index of the dragged item
    setItems(newList); // Update the list
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={(e) => onDragStart(e, index)}
          onDragEnd={onDragEnd}
          onDragOver={() => onDragOver(index)}
          className={draggedItemIndex === index ? 'drag-over' : ''}
          style={{ cursor: 'move', width: '3rem' }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DragAndDropList;
