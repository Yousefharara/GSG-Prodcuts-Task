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
];

const CodeInput = () => {
  const [eleRefs, setEleRefs] = useState([]);
  const [inputs, setInputs] = useState([]);

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
  console.log(eleRefs);
  console.log(inputs);

  useEffect(() => {
    eleRefs[0]?.current.focus();
  }, [eleRefs]);

  const handleOnChange = (e) => {
    let value = e.target.value.toString().slice(-1);
    let id = e.target.name; // name = 1
    setInputs((prev) =>
      prev.map((item) => (item.id === +id ? { ...item, value: value } : item))
    );

    if (!value) {
      console.log("if is true : ", eleRefs[Number(id - 1)]?.current);
      eleRefs[Number(+id - 2)]?.current.focus();
    } else {
      console.log("if is false : ", eleRefs[Number(+id)]?.current);
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
    </div>
  );
};

export default CodeInput;
