'use client';

import { useState } from 'react';
import TextInput from '../TextInput';

export default function SignupForm({ headline, infoText, btnLabel }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="signup-form">
      <div className="signup-form__info">
        <h3 className="signup-form__headline">{headline}</h3>
        {infoText}
      </div>

      <form action="#" className="signup-form__form">
        <div className="signup-form__name-container">
          <TextInput
            isRequired={true}
            inputName="firstName"
            inputType="text"
            label="First Name"
            value={formData.firstName}
            onChange={onChange}
          />
          <TextInput
            isRequired={true}
            inputName="lastName"
            inputType="text"
            label="Last Name"
            value={formData.lastName}
            onChange={onChange}
          />
        </div>
        <TextInput
          isRequired={true}
          inputName="email"
          inputType="email"
          label="Your e-mail address"
          value={formData.email}
          onChange={onChange}
        />
        <TextInput
          isRequired={true}
          inputName="phone"
          inputType="phone"
          label="Your telephone number"
          value={formData.tel}
          onChange={onChange}
        />
        <div className="signup-form__submit-container">
          <button className="btn btn--medium btn--turquoise signup-form__submit-btn">
            {btnLabel || 'Stay in touch!'}
          </button>
        </div>
      </form>
    </section>
  );
}
