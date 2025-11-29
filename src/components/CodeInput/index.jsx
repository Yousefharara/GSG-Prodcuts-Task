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
];

const CodeInput = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");

  const [eleRefs, setEleRefs] = useState([]);
  const [inputs, setInputs] = useState([]);

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

  const handleOnChange1 = (e) => {
    let value = e.target.value.toString().slice(-1);
    setInput1(value);
    if (value === "") {
      inputRef1.current.focus();
    } else inputRef2.current.focus();
  };

  const handleOnChange2 = (e) => {
    let value = e.target.value.toString().slice(-1);
    setInput2(value);
    if (value === "") {
      inputRef1.current.focus();
    } else inputRef3.current.focus();
  };

  const handleOnChange3 = (e) => {
    let value = e.target.value.toString().slice(-1);
    setInput3(value);
    if (value === "") {
      inputRef2.current.focus();
    } else inputRef4.current.focus();
  };

  const handleOnChange4 = (e) => {
    let value = e.target.value.toString().slice(-1);
    console.log(value);
    setInput4(value);
    if (value === "") {
      inputRef3.current.focus();
    } else inputRef4.current.focus();
  };

  const handleOnChange = (e) => {
    // console.log(eleRefs[Number(e.target.name - 1)].current.name);
    let value = e.target.value.toString().slice(-1);
    let id = e.target.name; // name = 1
    setInputs((prev) =>
      prev.map((item) => (item.id === +id ? { ...item, value: value } : item))
    );
    console.log("Value is : ", value);
    console.log("Ref Value : ", eleRefs[Number(id - 1)].current);
    console.log(inputs);

    console.log("!value ? : ", !value);

    if (!value) {
      console.log("if is true : ", eleRefs[Number(id - 1)]?.current);
      eleRefs[Number(+id - 2)]?.current.focus();
    } else {
      console.log("if is false : ", eleRefs[Number(+id)]?.current);
      eleRefs[Number(+id)]?.current.focus();
    }

    // console.log(inputRef.current);
    // let value = e.target.value.toString().slice(-1);
    // console.log(value);
    // const obj = {
    //   1: inputRef1,
    //   2: inputRef2,
    //   3: inputRef3,
    //   4: inputRef4,
    // };
    // if (value === "") {
    // } else {
    //   obj[Number(e.target.name) + 1].current.focus();
    // }
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

        {/* <input
          //   ref={inputRef1}
          //   ref={inputRef}
          ref={eleRefs[0]}
          //   value={input1}
          value={inputs[0]?.value || ""}
          type="text"
          //   onChange={handleOnChange1}
          onChange={handleOnChange}
          //   maxLength={1}
          name={1}
        />
        <input
          //   ref={inputRef2}
          //   ref={inputRef}
          ref={eleRefs[1]}
          //   value={input2}
          value={inputs[1]?.value || ""}
          type="text"
          //   onChange={handleOnChange2}
          onChange={handleOnChange}
          //   maxLength={1}
          name={2}
        />
        <input
          //   ref={inputRef3}
          //   ref={inputRef}
          ref={eleRefs[2]}
          //   value={input3}
          value={inputs[2]?.value || ""}
          type="text"
          //   onChange={handleOnChange3}
          onChange={handleOnChange}
          //   maxLength={1}
          name={3}
        />
        <input
          //   ref={inputRef4}
          //   ref={inputRef}
          ref={eleRefs[3]}
          //   value={input4}
          value={inputs[3]?.value || ""}
          type="text"
          //   onChange={handleOnChange4}
          onChange={handleOnChange}
          name={4}
          //   maxLength={1}
        /> */}
      </div>
    </div>
  );
};

export default CodeInput;
