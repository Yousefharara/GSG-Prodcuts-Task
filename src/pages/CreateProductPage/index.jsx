import ProductForm from "../../components/ProductForm";
import { API_URL } from "../../config/api";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import UseApi from "../../hooks/UseApi";

const CreateProductPage = () => {
  const { post, isLoading, error } = UseApi(`${API_URL}`);

  const handleCreateProduct = async (data) => {
    post(data, PATHS.PRODUCT.ROOT);
  };

  if (error) {
    return <Navigate to={PATHS.PRODUCT.ROOT} replace={true} />;
  }

  return (
    <div>
      Create Product
      <ProductForm handleOnSubmit={handleCreateProduct} isLoading={isLoading} />
    </div>
  );
};

export default CreateProductPage;
