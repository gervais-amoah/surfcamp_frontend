'use client';

export default function error() {
  return (
    <div className="errorPage">
      <h1>Some error occured</h1>
      <p>
        Please try again later, or contact us if the problem persists at{' '}
        <a href="mailto:gev.digitaleurs.com">support@waveriders.com</a>
      </p>
    </div>
  );
}
