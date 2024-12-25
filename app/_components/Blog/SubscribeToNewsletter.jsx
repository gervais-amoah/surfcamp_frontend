'use client';

import { useState } from 'react';

export default function SubscribeToNewsletter() {
  const [email, setEmail] = useState('');
  const [hasSignedUp, setHasSignedUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (email) {
      //  Send email to Strapi
      setHasSignedUp(true);

      setTimeout(() => {
        setEmail('');
        setHasSignedUp(false);
      }, 4000);
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
          </div>

          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter__input input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="newsletter__subscribe btn btn--medium btn--turquoise"
            >
              Subscribe
            </button>
          </form>
        </>
      )}
    </section>
  );
}
