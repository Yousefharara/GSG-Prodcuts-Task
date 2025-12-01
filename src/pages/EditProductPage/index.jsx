import { useEffect } from "react";
import ProductForm from "../../components/ProductForm";
import { Navigate, useParams } from "react-router-dom";
import { API_URL } from "../../config/api";
import { PATHS } from "../../router/paths";
import UseApi from "../../hooks/UseApi";

const EditProductPage = () => {
  const { patch, getById, product, isLoading, error } = UseApi(
    `${API_URL}/products`
  );
  const { id } = useParams();

  useEffect(() => {
    getById(id);
  }, [id]);

  const handleEdit = async (data) => {
    patch(id, data, PATHS.PRODUCT.ROOT);
  };

  if (error) {
    return <Navigate to={PATHS.ERROR.PAGE_NOT_FOUND} replace={true} />;
  }

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {!isLoading && (
        <div>
          <p>Edit Product : </p>
          <ProductForm
            data={product}
            isLoading={isLoading}
            handleOnSubmit={handleEdit}
          />
        </div>
      )}
    </>
  );
};

export default EditProductPage;
