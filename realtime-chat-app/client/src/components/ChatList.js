import React from "react";
import styles from "./styles.module.css";
import ScrollableFeed from "react-scrollable-feed";
import { useChat } from "../context/ChatContext";
import ChatItem from "./ChatItem";

const ChatList = () => {
  const { messages } = useChat();
  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((message, i) => (
          <ChatItem key={i} message={message} />
        ))}
      </ScrollableFeed>
    </div>
  );
};

export default ChatList;
