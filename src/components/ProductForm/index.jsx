import React, { useEffect, useState } from "react";
import "./style.css";

const INPUTS_DATA = [
  {
    id: "title",
    name: "title",
    label: "Title",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Title",
    type: "number",
  },
];

const ProductForm = ({ handleOnSubmit, data, isLoading }) => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value
    }));
    console.log(product);
  };

  const onSumbitForm = (e) => {
    e.preventDefault();
    handleOnSubmit(product);
  };

  return (
    <>
      {isLoading && <p>is Loading ...</p>}
      {!isLoading && (
        <form onSubmit={onSumbitForm}>
          {INPUTS_DATA.map((input) => (
            <div key={input.id}>
              <label htmlFor={input.id}></label>
              <input
                onChange={handleOnChange}
                id={input.id}
                name={input.name}
                type={input.type}
                value={product[input.id] || ""}
              />
            </div>
          ))}
          <button type="submit">{isLoading ? "Loading ..." : "Submit"}</button>
        </form>
      )}
    </>
  );
};

export default ProductForm;
