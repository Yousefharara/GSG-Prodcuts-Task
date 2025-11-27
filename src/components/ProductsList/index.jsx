import React, { useEffect, useState } from "react";
import Table from "../Table";
import { PRODUCTS_COLUMNS } from "../../constant/productsTableData";
import axios from "axios";
import { API_URL } from "../../config/api";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import './style.css'

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`${API_URL}/products`);
        console.log(data);
        setProducts(data);
      } catch (err) {   
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleDelete = () => {

  }

  const handleEdit = () => {

  }

  if (error) {
    return <Navigate to={PATHS.ERROR.PAGE_NOT_FOUND} replace={true} />;
  }

  return (
    <div className="wrapper__table">
      <Table columns={PRODUCTS_COLUMNS(handleDelete, handleEdit)} data={products} isLoading={isLoading} />
    </div>
  );
};

export default ProductsList;
