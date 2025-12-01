import axios from "axios";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_VALUE = {
  data: [],
  product: {},
  error: null,
  isLoading: false,
};

const API_ACTION = {
  DATA: "DATA",
  PRODUCT: "PRODUCT",
  ERROR: "ERROR",
  IS_LOADING: "IS_LOADING",
};

const reducer = (state, action) => {
  switch (action.type) {
    case API_ACTION.DATA: {
      return {
        ...state,
        data: [...action.payload],
      };
    }
    case API_ACTION.PRODUCT: {
      return {
        ...state,
        product: {
          ...action.payload,
        },
      };
    }
    case API_ACTION.ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case API_ACTION.IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

const UseApi = (url, config) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const getAll = async () => {
    try {
      dispatch({ type: API_ACTION.IS_LOADING, payload: true });
      const res = await axios.get(url, config);
      dispatch({
        type: API_ACTION.DATA,
        payload: res?.data?.data || res?.data,
      });
    } catch (err) {
      dispatch({ type: API_ACTION.ERROR, payload: err });
    } finally {
      dispatch({ type: API_ACTION.IS_LOADING, payload: false });
    }
  };

  const getById = async (id) => {
    try {
      dispatch({ type: API_ACTION.IS_LOADING, payload: true });
      const res = await axios.get(`${url}/${id}`, config);
      dispatch({
        type: API_ACTION.PRODUCT,
        payload: res?.data?.data || res?.data,
      });
    } catch (err) {
      dispatch({ type: API_ACTION.ERROR, payload: err });
    } finally {
      dispatch({ type: API_ACTION.IS_LOADING, payload: false });
    }
  };

  const post = async (body, path, postConfig) => {
    try {
      dispatch({ type: API_ACTION.IS_LOADING, payload: true });
      const res = await axios.post(url, body, { ...config, ...postConfig });
      dispatch({
        type: API_ACTION.PRODUCT,
        payload: [...state.product, { ...res.data }],
      });
      if (path) {
        navigate(path);
      }
    } catch (err) {
      dispatch({ type: API_ACTION.ERROR, payload: err });
    } finally {
      dispatch({ type: API_ACTION.IS_LOADING, payload: false });
    }
  };

  const patch = async (id, body, path, patchConfig) => {
    try {
      dispatch({ type: API_ACTION.IS_LOADING, payload: true });
      const res = await axios.patch(`${url}/${id}`, body, {
        ...config,
        ...patchConfig,
      });
      dispatch({
        type: API_ACTION.DATA,
        payload: state.data.map((item) =>
          item.id === res.data.id ? res.data : item
        ),
      });
      if (path) {
        navigate(path);
      }
    } catch (err) {
      dispatch({ type: API_ACTION.ERROR, payload: err });
      console.log("Error: ", state.error);
    } finally {
      dispatch({ type: API_ACTION.IS_LOADING, payload: false });
    }
  };

  const del = async (id, delConfig) => {
    try {
      dispatch({ type: API_ACTION.IS_LOADING, payload: true });
      await axios.delete(`${url}/${id}`, { ...config, ...delConfig });
      dispatch({
        type: API_ACTION.DATA,
        payload: state.data.filter((item) => item.id !== id),
      });
    } catch (err) {
      dispatch({ type: API_ACTION.ERROR, payload: err });
    } finally {
      dispatch({ type: API_ACTION.IS_LOADING, payload: false });
    }
  };

  return { ...state, getAll, getById, patch, del, post };
};

export default UseApi;
