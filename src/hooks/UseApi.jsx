import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseApi = (url, config) => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getAll = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(url, config);
      setData(res?.data?.data || res?.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const getById = async (id) => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${url}/${id}`, config);
      setProduct(res?.data?.data || res?.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const post = async (body, path, postConfig) => {
    try {
      setIsLoading(true);
      const res = await axios.post(url, body, {...config, postConfig});
      setProduct((prev) => [...prev, { ...res.data }]);
      if (path) {
        navigate(path);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const patch = async (body, path, patchConfig) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(url, body, {...config, ...patchConfig});
      setData((prev) =>
        prev.map((item) => (item.id === res.data.id ? res.data : item))
      );
      if (path) {
        navigate(path);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const del = async (id, delConfig) => {
    try {
      setIsLoading(true);
      await axios.delete(`${url}/${id}`, {...config, ...delConfig});
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, product, getAll, getById, patch, del, post };
};

export default UseApi;
