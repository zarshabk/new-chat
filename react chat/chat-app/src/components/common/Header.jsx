import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_USER } from "../../redux/authSlice";
const Header = ({ setOpenModal }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth);
  const logout = () => {
    dispatch(LOGOUT_USER());
  };
  return (
    <div className="h-[50px] px-2 flex justify-between items-center bg-gray-200">
      <div>
        <h2 className="font-bold text-lg text-red-400">Chatify</h2>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="bg-blue-500 text-white p-1 px-4 rounded-md"
          onClick={() => setOpenModal(true)}
        >
          Find User
        </button>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.username}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
