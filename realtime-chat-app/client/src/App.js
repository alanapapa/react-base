import React from "react";
import { ChatProvider } from "./context/ChatContext";
import Container from "./components/Container";

const App = () => {
  return (
    <ChatProvider>
      <Container />
    </ChatProvider>
  );
};

export default App;
