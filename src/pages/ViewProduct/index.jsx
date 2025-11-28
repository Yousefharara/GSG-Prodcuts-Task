import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { API_URL } from "../../config/api";
import { PATHS } from "../../router/paths";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${API_URL}/products/${id}`);
        setProduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
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

export default ViewProduct;
