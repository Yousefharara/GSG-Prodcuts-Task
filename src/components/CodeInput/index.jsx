import { createRef, useEffect, useState } from "react";
import "./style.css";

const INPUT_DATA = [
  {
    id: 1,
    name: 1,
    type: "text",
  },
  {
    id: 2,
    name: 2,
    type: "text",
  },
  {
    id: 3,
    name: 3,
    type: "text",
  },
  {
    id: 4,
    name: 4,
    type: "text",
  },
  {
    id: 5,
    name: 5,
    type: "text",
  },
  {
    id: 6,
    name: 6,
    type: "text",
  },
];

const CodeInput = () => {
  const [eleRefs, setEleRefs] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [code, setCode] = useState("");

  const [modify, setModify] = useState('MODIFY_GITHUB')

  useEffect(() => {
    setEleRefs(INPUT_DATA.map((_) => createRef(null)));
    setInputs(
      INPUT_DATA.map((item) => ({
        id: item.id,
        value: "",
      }))
    );
  }, []);

  useEffect(() => {
    eleRefs[0]?.current.focus();
  }, [eleRefs]);

  useEffect(() => {
    let messageCode = "";
    inputs.map((input) => {
      messageCode += input.value;
      return null;
    });
    setCode(messageCode);
  }, [inputs]);

  const handleOnChange = (e) => {
    let value = e.target.value.toString().slice(-1);
    let id = e.target.name; // name = 1
    setInputs((prev) =>
      prev.map((item) => (item.id === +id ? { ...item, value: value } : item))
    );

    if (!value) {
      eleRefs[Number(+id - 2)]?.current.focus();
    } else {
      eleRefs[Number(+id)]?.current.focus();
    }
  };

  return (
    <div className="code__input">
      <div className="input">
        {INPUT_DATA.map((input) => (
          <input

            key={input.id}
            ref={eleRefs[input.id - 1]}
            value={inputs[input.id - 1]?.value || ""}
            type={input.type}
            onChange={handleOnChange}
            name={input.name}
          />
        ))}
      </div>
      <p>{code}</p>
    </div>
  );
};

export default CodeInput;
