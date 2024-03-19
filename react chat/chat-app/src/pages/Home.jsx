import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_USER } from "../redux/authSlice";
import Header from "../components/common/Header";
import Conversations from "../components/chat/Conversations";
import Chat from "../components/chat/Chat";
import Sidebar from "../components/common/Sidebar";
import ModalBox from "../components/ModalBox";
import useFetch from "../customHooks/useFetch";
import { AiOutlineUserAdd } from "react-icons/ai";
import Users from "../components/chat/Users";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import axios from "axios";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const [openModal, setOpenModal] = useState(false);
  const [socket, setSocket] = useState(null);
  const msg = useRef(null);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [online, setOnline] = useState([]);
  const token = localStorage.getItem("token");
  const { convId } = useParams();
  // const [Users, setUsers] = useState([]);
  const { loadingUser, data } = useFetch("/user/");
  //messages
  const { loading: messageLoading, data: messages } = useFetch(
    `/message/${convId}`
  );

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(LOGOUT_USER());
  };
  //socket

  useEffect(() => {
    if (user) {
      const socket = io("http://localhost:8000", {
        query: {
          userId: user._id,
        },
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnline(users);
      });

      socket.on("newMessage", (msg) => {
        messages.push(msg);
        console.log("ne wmwaaGE", msg);
      });

      socket.on("connect", () => {
        console.log("server connected");
      });
      return () => socket.close();
    } else {
    }
  }, [user]);

  //send message

  console.log("online", online);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const resp = await axios.post(
        `/message/send/${convId}`,
        { text: text },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTimeout(() => {
        messages.push(resp?.data?.data);
        setLoading(false);
        toast.success(resp?.data?.message);
        setText("");
        // msg?.current?.scrollIntoView({ behavior: "smooth" });
        return resp?.data;
      }, 1000);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    msg?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full  ">
      <section className="w-[90%] h-[90vh] my-5 m-auto flex flex-col shadow relative">
        <Header setOpenModal={setOpenModal} />
        <main className="flex flex-row w-full relative">
          <Sidebar convId={convId} />
          <Chat
            convId={convId}
            handleSubmit={handleSubmit}
            loading={loading}
            setText={setText}
            text={text}
            messageLoading={messageLoading}
            messages={messages}
            msg={msg}
            online={online}
          />
        </main>
      </section>
      <ModalBox
        title="All users"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        {openModal && (
          <>
            {data &&
              data.map((d, i) => {
                return (
                  <Users
                    d={d}
                    key={i}
                    isOnline={online.includes(d._id) ? true : false}
                  />
                );
              })}
            {loadingUser && !data && (
              <div className="flex justify-center items-center h-[200px]">
                <Loader />
              </div>
            )}
          </>
        )}
      </ModalBox>
    </div>
  );
};

export default Home;
