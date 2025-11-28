import { useEffect, useState } from "react";
import Table from "../Table";
import { PRODUCTS_COLUMNS } from "../../constant/productsTableData";
import axios from "axios";
import { API_URL } from "../../config/api";
import { Navigate, useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import "./style.css";
import UseApi from "../../hooks/UseApi";

const ProductsList = () => {
  const navigate = useNavigate();
  const { getAll, del, data, error, isLoading } = UseApi(`${API_URL}`);

  useEffect(() => {
    getAll();
  }, []);

  // ? product - [row]
  const handleDelete = async (row) => {
    del(row.id);
  };

  // ? product - [row]
  const handleEdit = (row) => {
    navigate(PATHS.PRODUCT.EDIT.replace(":id", row.id));
  };

  if (error) {
    return <Navigate to={PATHS.ERROR.PAGE_NOT_FOUND} replace={true} />;
  }

  // ? product - [row]
  const onClick = (product) => {
    navigate(PATHS.PRODUCT.VIEW.replace(":id", product.id));
  };

  return (
    <div className="wrapper__table">
      <Table
        columns={PRODUCTS_COLUMNS(handleDelete, handleEdit)}
        data={data}
        isLoading={isLoading}
        onRowClick={onClick}
      />
    </div>
  );
};

export default ProductsList;
