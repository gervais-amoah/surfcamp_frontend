'use client';

import { API_URL } from '@/utils/constants';
import { useState } from 'react';
import TextInput from '../TextInput';
import Image from 'next/image';
import { generateEventSignupPayload } from '@/utils/strapi.utils';

export default function SignupForm({
  eventID,
  headline,
  infoText,
  btnLabel,
  date,
  pricing,
  featuredImage,
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setShowConfirmation(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    });

    setTimeout(() => {
      setShowConfirmation(false);
    }, 4000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = generateEventSignupPayload(formData, eventID);

    try {
      const participant = await fetch(`${API_URL}/participants`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (participant.ok) clearForm();
      else alert('Something went wrong. Please try again later.');
    } catch (err) {
      console.error(err);
      const errorMessage = err.response?.data?.error?.message;
      alert(errorMessage || 'Something went wrong. Please try again later.');
    }
  };

  return (
    <section>
      <div className="signup-form">
        <div className="signup-form__info">
          <h3 className="signup-form__headline">{headline}</h3>
          {infoText}
        </div>

        <div className="signup-form__form">
          {featuredImage && (
            <div className="signup-form__image">
              <Image src={featuredImage} alt={headline} fill />
            </div>
          )}

          {showConfirmation ? (
            <div className="">
              <h4>Thank you for signing up!</h4>
              <p className="copy">
                You will receive an email from us shortly with more information
                about our upcoming events.
              </p>
            </div>
          ) : (
            <form action="#" className="" onSubmit={onSubmit}>
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
                <button
                  type="submit"
                  className="btn btn--medium btn--turquoise signup-form__submit-btn"
                >
                  {btnLabel || 'Stay in touch!'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="signup-form__footer">
        {pricing && (
          <div className="signup-form__pricing">
            <h3>Pricing</h3>
            <p className="copy">
              Single Room:{' '}
              <span className="bold">{pricing.singlePrice}€ per person</span>
            </p>
            <p className="copy">
              Shared Room:{' '}
              <span className="bold">{pricing.sharedPrice}€ per person</span>
            </p>
          </div>
        )}
        {date && (
          <div className="signup-form__date">
            <h3>Date</h3>
            <p className="copy">
              Startind date: <span className="bold">{date.start}</span>
            </p>
            <p className="copy">
              End date: <span className="bold">{date.end}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
