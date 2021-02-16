import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import { ContactDataContainer, Input } from "./ContactData.module.scss";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    }
  }
  render() {
    return (
      <div className={ContactDataContainer}>
        <h4>Enter your contact data</h4>
        <form>
          <input className={Input} type="text" name="name" placeholder="Your name" />
          <input className={Input} type="text" name="email" placeholder="Your email" />
          <input className={Input} type="text" name="street" placeholder="Your street" />
          <input className={Input} type="text" name="postal" placeholder="Your postal code" />
          <Button>ORDER NOW</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
