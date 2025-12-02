import { createRef, useEffect, useRef, useState } from "react";
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

let SUCCESS_CODE = "You123";

const CodeInput = () => {
  // const [eleRefs, setEleRefs] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [code, setCode] = useState("");
  const refs = useRef([]);
  // ? refs  = {current: []}

  // ? refs.current[0] = input1
  // ? refs.current[1] = input2
  // ? refs.current[2] = input3
  // ? refs.current[3] = input4

  useEffect(() => {
    SUCCESS_CODE = "Yousef";
  }, []);

  useEffect(() => {
    // ! createRef() It using in Class Component
    // setEleRefs(INPUT_DATA.map((_) => createRef(null)));
    setInputs(
      INPUT_DATA.map((item) => ({
        id: item.id,
        value: "",
      }))
    );
  }, []);

  // console.log(refs);

  useEffect(() => {
    // eleRefs[0]?.current.focus();
    refs?.current[0].focus();
  }, []);

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
      // eleRefs[Number(+id - 2)]?.current.focus();
      // * name = 4, before id - 2 = 2 (ele 3) ~~ name = 3, before id - 2 = 1 (ele2)
      refs?.current[Number(+id - 2)]?.focus();
    } else {
      // eleRefs[Number(+id)]?.current.focus();
      // * name = 2, after id = 2 (ele3) ~~ name = 3, after id = 3 (ele4)
      refs?.current[Number(+id)]?.focus();
    }
  };

  return (
    <div className="code__input">
      <div className="input">
        {INPUT_DATA.map((input) => (
          <input
            style={{
              "--i": input.id - 1,
            }}
            key={input.id}
            // ref={eleRefs[input.id - 1]}
            ref={(ref) => (refs.current[input.id - 1] = ref)}
            value={inputs[input.id - 1]?.value || ""}
            type={input.type}
            onChange={handleOnChange}
            name={input.name}
            className={
              code.length === INPUT_DATA.length
                ? SUCCESS_CODE === code
                  ? "success__code"
                  : "fail__code"
                : ""
            }
          />
        ))}
      </div>
      <p>{code}</p>
    </div>
  );
};

export default CodeInput;
