import React from 'react';
import './ConfirmationPage.css';

export default function Confirmation() {
  return (
    <div className="confirmation-container">
      <h1>Thank You!</h1>
      <p>Your order has been successfully placed.</p>
      <p>We will send you an email confirmation shortly.</p>
    </div>
  );
}
