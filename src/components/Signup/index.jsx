import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { ROLES } from "../../constant/Role";

const INPUT_FORM_SIGN_UP = [
  {
    id: "username",
    name: "username",
    lable: "Username",
    type: "text",
  },
  {
    id: "password",
    name: "password",
    lable: "Password",
    type: "password",
  },
];

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { setRole, setUser } = useAuth();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "yousefharara" && formData.password === "123") {
      setUser(formData.username);
      setRole(ROLES.USER);
    } else if (formData.username === "admin" && formData.password === "admin") {
      setUser("ADMIN_YOUSEF");
      setRole(ROLES.ADMIN);
    } else console.log("Incorrect Sign up !!");
  };

  const handleOnChangeInput = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
  };

  return (
    <div>
      <p>Sign Up Page ~ </p>
      <form onSubmit={handleOnSubmit}>
        {INPUT_FORM_SIGN_UP.map((input) => (
          <div key={input.id}>
            <label htmlFor={input.id}>{input.lable}</label>
            <input
              onChange={handleOnChangeInput}
              type={input.type}
              id={input.id}
              name={input.name}
              value={formData[input.name]}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
