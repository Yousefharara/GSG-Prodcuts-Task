import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { API_URL } from "../../config/api";
import { PATHS } from "../../router/paths";
import UseApi from "../../hooks/UseApi";

const ViewProductPage = () => {
  const { id } = useParams();
  const { getById, product, isLoading, error } = UseApi(`${API_URL}/products`);

  useEffect(() => {
    getById(id);
  }, [id]);

  if (error) {
    return <Navigate to={PATHS.ERROR.PAGE_NOT_FOUND} replace={true} />;
  }

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {!isLoading && (
        <div>
          View Prodcut :<p>ID: {product.id}</p>
          <p>Title: {product.title}</p>
          <p>Price: {product.price}</p>
        </div>
      )}
    </>
  );
};

export default ViewProductPage;
