import React from "react";
import { useSelector } from "react-redux";

const Message = ({ d, msg }) => {
  const { user } = useSelector((state) => state?.auth);

  return (
    <div
      className={`flex ${
        d.sender === user?._id ? "justify-start" : "justify-end"
      } gap-2 w-[]`}
    >
      <div>
        <img
          src="https://img.freepik.com/free-photo/artist-white_1368-3546.jpg"
          className="h-[50px] w-[50px] rounded-full shadow border-[1px] object-cover p-[2px]"
          alt=""
        />
      </div>
      <div
        className={`p-2 ${
          d.sender === user?._id ? "bg-blue-500 text-white" : "bg-gray-200"
        } rounded-md flex flex-col w-[250px]`}
      >
        <p
          className={`${
            d.sender === user?._id ? "text-white" : "text-gray-500"
          } text-sm`}
        >
          {d?.text}
        </p>
        <span
          className={`text-right ${
            d.sender === user?._id ? "text-white" : "text-gray-400"
          } text-sm `}
        >
          {d?.createdAt ? d.createdAt : null}
        </span>
      </div>
    </div>
  );
};

export default Message;
