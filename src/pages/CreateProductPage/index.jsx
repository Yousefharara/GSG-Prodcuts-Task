import React, { useState } from "react";
import ProductForm from "../../components/ProductForm";
import axios from "axios";
import { API_URL } from "../../config/api";
import { Navigate, useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";

const CreateProductPage = () => {
  // const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreateProduct = async (data) => {
    try {
      setIsLoading(true);
      await axios.post(`${API_URL}`, data);
      navigate(PATHS.PRODUCT.ROOT)
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return <Navigate to={PATHS.PRODUCT.ROOT} replace={true} />;
  }

  return (
    <div>
      Create Product
      <ProductForm  handleOnSubmit={handleCreateProduct} isLoading={isLoading} />
    </div>
  );
};

export default CreateProductPage;
