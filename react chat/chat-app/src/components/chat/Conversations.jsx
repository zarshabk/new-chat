import React from "react";
import { Link } from "react-router-dom";

const Conversations = ({ item, convId }) => {
  return (
    <Link to={`/home/${item._id}`}>
      <div
        className={`w-full my-1 h-[50px] p-2  flex flex-row items-center rounded-md justify-between ${
          item._id !== convId && " hover:bg-gray-100"
        } cursor-pointer ${item._id === convId && "bg-blue-500 text-white"} `}
      >
        <div className="flex items-center gap-1">
          <div>
            <img
              src="https://img.freepik.com/free-photo/artist-white_1368-3546.jpg"
              className="h-[50px] w-[50px] rounded-full border-[1px] p-[6px] object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <h2
              className={`text-md ${
                item._id === convId ? "text-white" : "text-gray-800"
              } font-semibold`}
            >
              John Doe
            </h2>
            <p
              className={`text-sm   ${
                item._id === convId ? "text-white" : "text-gray-500"
              }`}
            >
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Conversations;
