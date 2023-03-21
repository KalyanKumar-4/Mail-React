import React from "react";

const MailPreview = ({ mail }) => {
  return (
    <div>
      <h3>{mail.subject}</h3>
      <p>{mail.content.substring(0, 50)}...</p>
    </div>
  );
};

export default MailPreview;
