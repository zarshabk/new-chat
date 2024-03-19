import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader";
import useFetch from "../../customHooks/useFetch";
const Send = ({ convId, handleSubmit, setText, text, loading }) => {
  const { data } = useFetch(`/conversation/${convId}`);

  useEffect(() => {});
  return (
    <>
      {convId && (
        <>
          <form action="" onSubmit={handleSubmit}>
            <div className="flex gap-2 w-full my-2">
              <input
                type="text"
                placeholder="Type Message"
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="py-2 px-3 w-4/5 border-[1px] border-gray-400 rounded-3xl focus:bg-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-20 rounded-3xl bg-gray-100 text-green-500 hover:bg-green-500 hover:text-white"
              >
                {loading ? <Loader /> : <AiOutlineSend size={25} />}
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default Send;
