import React, { useState } from 'react';
import { StyledForm } from './ContactForm.styled';

export const ContactForm = ({ btn, onAddPhoneBook }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else if (evt.target.name === 'number') {
      setNumber(evt.target.value);
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();
    console.log('Submit');
    onAddPhoneBook(evt);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    console.log('Clear');
  };

  return (
    <div>
      <StyledForm onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />

        <button type="submit">{btn}</button>
      </StyledForm>
    </div>
  );
};

// const INITIAL_STATE = {
//   name: '',
//   number: '',
// };

// export class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   inputChange = evt => {
//     this.setState({ [evt.target.name]: evt.target.value });
//   };

//   onSubmit = event => {
//     this.props.onAddPhoneBook(event);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { btn } = this.props;

//     return (
//       <div>
//         <StyledForm onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             name="name"
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//           <input
//             type="tel"
//             name="number"
//             // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//           />

//           <button type="submit">{btn}</button>
//         </StyledForm>
//       </div>
//     );
//   }
// }
