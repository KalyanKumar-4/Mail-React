import React, { useState, useEffect } from "react";
import folderData from "../data";

const FolderList = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    setFolders(folderData);
  }, []);

  return (
    <div>
      {folders.map((folder) => (
        <div key={folder.name}>
          <h2>{folder.name}</h2>
          <p>{folder.mails.filter((mail) => mail.unread).length} unread</p>
        </div>
      ))}
    </div>
  );
};

export default FolderList;
