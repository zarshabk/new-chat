import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useFetch from "../../customHooks/useFetch";
import Loader from "../Loader";

const Screen = ({ convId, messageLoading, messages, msg }) => {
  const my_ref = useRef(null);
  useEffect(() => {
    my_ref?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages?.length]);

  console.log("ref", msg);

  return (
    <>
      {convId !== undefined ? (
        <div className="w-full h-[90%] flex flex-col gap-2 scrollbar p-2 overflow-y-scroll">
          {messages &&
            messages.map((d, i) => {
              return <Message d={d} key={i} msg={msg} />;
            })}

          {messages?.length < 1 && (
            <>
              <div className="h-[250px] flex justify-center items-center">
                <p className="text-gray-500 text-sm">No Conversation</p>
              </div>
            </>
          )}

          {messageLoading && !messages && (
            <>
              <div className="flex items-center justify-center h-[100px]">
                <Loader />
              </div>
            </>
          )}
          <div ref={my_ref} className="mb-20"></div>
        </div>
      ) : (
        <div className="h-[400px] flex justify-center items-center">
          <h1 className="text-4xl font-bold text-gray-800">
            No Conversation Selected
          </h1>
        </div>
      )}
    </>
  );
};

export default Screen;
