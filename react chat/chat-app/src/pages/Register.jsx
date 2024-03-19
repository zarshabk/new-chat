import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput, Toast } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import toast from "react-hot-toast";
const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { loading, postData } = useAuth("/auth/register");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      toast.error("both fileds are required");
    }

    const resp = await postData(data);
    toast.success(resp?.message);
    navigate("/");
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-blue-800">
      <form
        onSubmit={handleSubmit}
        className="flex w-[400px] bg-white py-10 px-5 flex-col flex-col gap-4"
      >
        <div>
          <h1 className="text-2xl text-center font-bold">Register</h1>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
            placeholder="username"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="name@domain.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            name="password"
            value={data.password}
            onChange={handleChange}
            type="password"
            required
          />
        </div>

        <Button type="submit" color={"blue"} isProcessing={loading}>
          Submit
        </Button>
        <div className="">
          <p className="text-gray-500 font-semibold text-center">
            already have an account?
            <Link className="text-blue-500" to={"/"}>
              login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
