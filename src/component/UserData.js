import React, { useReducer, useEffect } from "react";
import axios from "axios";
import "./displaydata.styles.css";
import Displaydata from "./Displaydata";

//Declaring initial state
const initialState = {
  loading: true,
  error: "",
  post: {},
};

//Creating our reducer which takes state and action as arguments

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        post: {},
        error: "Something Went Wrong!",
      };
    default:
      return state;
  }
};

function UserData(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      <button onClick={() => props.history.push("/shop")}>Go to shop</button>
      <button onClick={() => props.history.push("/signin")}>
        Go to setting
      </button>
      <button onClick={() => props.history.push("/home")}>
        Go to homepage
      </button>
      <h2>
        User Posts from an API( "https://jsonplaceholder.typicode.com/posts" )
      </h2>
      {state.loading
        ? "loading"
        : state.post.map((post) => {
            return <Displaydata key={post.id} title={post.title} />;
          })}
      {state.error ? state.error : null}
    </div>
  );
}

export default UserData;
