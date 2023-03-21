import React, { useState, useEffect } from "react";
import MailPreview from "./MailPreview";

const MailList = ({ mails }) => {
  const [selectedMail, setSelectedMail] = useState(null);

  useEffect(() => {
    setSelectedMail(null);
  }, [mails]);

  const handleSelectMail = (mail) => {
    setSelectedMail(mail);
  };

  return (
    <div>
      {mails.map((mail) => (
        <div key={mail.mId}>
          <MailPreview mail={mail} onClick={() => handleSelectMail(mail)} />
        </div>
      ))}
    </div>
  );
};

export default MailList;
