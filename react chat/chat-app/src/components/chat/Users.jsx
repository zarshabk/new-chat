import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import usePost from "../../customHooks/usePost";
import axios from "axios";
import Loader from "../Loader";
import toast from "react-hot-toast";
const Users = ({ d, isOnline }) => {
  // const [loading, addData] = usePost("/conversation/create");
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");
  // const isOnline = online.includes(d._id);
  const addToConversation = async (id) => {
    try {
      setLoading(true);
      const resp = await axios.post(
        "/conversation/create",
        { other: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      toast.success(resp?.data?.message);
      return resp?.data;
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex flex-row gap-2 items-center justify-between h-[65px] hover:bg-gray-100 p-2 rounded-md">
      <div className="flex gap-2 items-center">
        <div className="relative">
          <img
            src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
            className="h-[45px] w-[45px] relative rounded-full object-cover"
            alt=""
          />
          <span
            className={`absolute h-[20px] left-[-5px] top-0 w-[20px] rounded-full ${
              isOnline === true ? "bg-green-500" : "bg-yellow-200"
            }`}
          ></span>
        </div>
        <div className="flex flex-col ">
          <h2 className="text-lg font-semibold text-gray-800">{d?.username}</h2>
          <p className="text-sm text-gray-500">{d?.email}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => addToConversation(d._id)}
          className="bg-gray-300 p-2 rounded-full hover:bg-green-500 hover:text-white"
        >
          {loading ? <Loader /> : <AiOutlineUserAdd size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Users;
