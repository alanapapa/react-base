import React from "react";
import styles from "./styles.module.css";

const ChatItem = ({ message }) => {
  return (
    <div className={`${styles.chatItem} ${message.fromMe ? styles.right : ""}`}>
      {message.message}
    </div>
  );
};

export default ChatItem;
