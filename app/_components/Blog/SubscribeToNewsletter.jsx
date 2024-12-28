'use client';

import { useState } from 'react';
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export default function SubscribeToNewsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      //  Send email to Strapi
      try {
        const response = await fetch(`${API_URL}/newsletter-signups`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            data: {
              email,
            },
          }),
        });

        if (response.ok) {
          setHasSignedUp(true);
          setEmail('');
          setErrorMessage('');
        } else {
          setErrorMessage('Something went wrong. Please try again later.');
        }
      } catch (err) {
        console.error(err);
        setErrorMessage('Something went wrong. Please try again later.');
      } finally {
        setLoading(false);
        setTimeout(() => {
          setErrorMessage('');
          setHasSignedUp(false);
        }, 5000);
      }
    }
  };

  return (
    <section className="newsletter">
      {hasSignedUp ? (
        <div className="newsletter__thanks">
          <h4>Thanks for subscribing!</h4>
          <p className="copy">
            You will receive an email from us shortly with more information
            about our upcoming events.
          </p>
        </div>
      ) : (
        <>
          <div className="newsletter__info">
            <h4>Subscribe to our newsletter</h4>
            <p className="copy">
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
              Newsletter Today to always stay in touch
            </p>
            {errorMessage && (
              <p className="copy-small error-message">{errorMessage}</p>
            )}
          </div>

          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter__input input"
              required
              value={email}
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="newsletter__subscribe btn btn--medium btn--turquoise"
            >
              {loading ? 'Suscribing...' : 'Subscribe'}
            </button>
          </form>
        </>
      )}
    </section>
  );
}
