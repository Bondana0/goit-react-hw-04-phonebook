import { ContactItem } from 'components/ContactList/ContactItem';
import React from 'react';

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => {
        const { id } = item;
        return (
          <ContactItem
            key={id}
            id={item.id}
            name={item.name}
            number={item.number}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};
