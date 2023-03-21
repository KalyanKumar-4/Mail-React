import React, { useState } from "react";

const MailSearch = ({ searchMails }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    searchMails(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search mails..."
      />
    </div>
  );
};

export default MailSearch;
