import React from 'react';

const Message = props => (
  <div className="transaction__message">
    <span id="error-message">
      <h2>{props.message.error}</h2>
    </span>

    <span id="success-message">
      <h2>{props.message.success}</h2>
    </span>
  </div>
);

export default Message;
