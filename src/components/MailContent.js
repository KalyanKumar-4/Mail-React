import React from "react";

const MailContent = ({ mail }) => {
  return (
    <div>
      <h2>{mail.subject}</h2>
      <p>{mail.content}</p>
    </div>
  );
};

export default MailContent;
