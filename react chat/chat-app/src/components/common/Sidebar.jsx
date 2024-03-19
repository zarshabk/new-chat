import React, { useEffect, useState } from "react";
import Conversations from "../chat/Conversations";
import axios from "axios";
import useFetch from "../../customHooks/useFetch";
import Loader from "../Loader";
const Sidebar = ({ convId }) => {
  const { error, data, loading } = useFetch("/conversation/");

  return (
    <div className="w-[470px] p-2 flex flex-col gap-2 relative">
      <div className="h-[40px]  my-2 flex items-center fixed top-20">
        <input
          type="text"
          placeholder="Search conversation"
          className="w-[300px] rounded-3xl bg-transparent text-gray-500"
        />
      </div>
      <div className="mt-16 overflow-y-scroll scrollbar h-[450px]">
        {data &&
          data.map((d, i) => {
            return <Conversations item={d} key={i} convId={convId} />;
          })}

        {data?.length < 1 && (
          <>
            <p className="text-center my-10 text-gray-500">
              No Conversation Found
            </p>
          </>
        )}

        {loading && !data && (
          <div className="flex justify-center items-center h-[200px]">
            <Loader />
          </div>
        )}
        {error && (
          <div className="text-center flex items-center justify-center h-[200px]">
            <p className="text-red-500">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
