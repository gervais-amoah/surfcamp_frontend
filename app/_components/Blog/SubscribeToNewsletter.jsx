'use client';

export default function SubscribeToNewsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__info">
        <h4>Subscribe to our newsletter</h4>
        <p className="copy">
          Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
          Newsletter Today to always stay in touch
        </p>
      </div>

      <form action="" className="newsletter__form">
        <input
          type="email"
          placeholder="Enter your email address"
          className="newsletter__input input"
        />
        <button className="newsletter__subscribe btn btn--medium btn--turquoise">
          Subscribe
        </button>
      </form>
    </section>
  );
}
