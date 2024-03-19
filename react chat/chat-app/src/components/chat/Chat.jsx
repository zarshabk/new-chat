import React from "react";
import Screen from "./Screen";
import Send from "./Send";

const Chat = ({
  convId,
  handleSubmit,
  loading,
  setText,
  text,
  messageLoading,
  messages,
  msg,
}) => {
  return (
    <div className="w-full h-[85vh] p-5 flex flex-col ">
      <Screen
        convId={convId}
        messageLoading={messageLoading}
        messages={messages}
        msg={msg}
      />
      <Send
        convId={convId}
        text={text}
        handleSubmit={handleSubmit}
        loading={loading}
        setText={setText}
      />
    </div>
  );
};

export default Chat;
