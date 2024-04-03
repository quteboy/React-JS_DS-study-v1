import React, { useState, useEffect } from "react";
import axios from "axios";
const APIFetch1 = () => {
  const [postList, setPostList] = useState([]);
  const [productList, setProductList] = useState([]);
  const fetchPosts = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((er) => console.log("Error", er));
    setPostList(result.sort((a, b) => (a.title > b.title ? 1 : -1)));
    console.log(
      "result",
      result.sort((a, b) => (a.title > b.title ? 1 : -1))
    );
  };
  const fetchSomething = async () => {
    const resp = await fetch("url goes here")
      .then((resp) => resp.json)
      .then((data) => {
        // assign data to state hook
      })
      .catch((err) => console.log("Error ::", err));
  };
  const fetchUsingAxios = async () => {
    const result = await axios
      .get("url")
      .then((resp) => {
        // assign api response to state using resp.data
        // return resp.data to use result as data variable
        // directly right axois await
      })
      .catch((err) => console.log("err", err));
  };
  const usingFetch = async () => {
    const result = await fetch("")
      .then((resp) => resp.json)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
  const usingAxios = async () => {
    var result = await axios
      .get("url")
      .then((resp) => {
        /// return resp here to assign data result or use state callback to assign data to state
      })
      .catch((error) => {
        throw error;
      });
  };
  const fetchProducts = async () => {
    const results = await axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((resp) => {
        console.log("resp", resp);
        return resp.data;
      })
      .catch((er) => {
        console.log("er", er);
      });
    console.log(
      "respp",
      results.sort((a, b) => (a.title > b.title ? 1 : -1))
    );
    setProductList(results);
  };
  useEffect(() => {
    fetchPosts();
    fetchProducts();
  }, []);
  return (
    <div>
      {postList.slice(0, 15).map((item, index) => {
        const { title, body } = item;
        return (
          <>
            <h4>{title}</h4>
            <label>{body}</label>
          </>
        );
      })}
      {productList.slice(0, 15).map((curEl, index) => {
        const { title, price, images, description } = curEl;
        return (
          <>
            <h5>{title}</h5>
            <p>{price}</p>
            <span>{description}</span>
            <div>
              {images.map((url, index) => {
                return <img key={index} src={url} alt={title} />;
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default APIFetch1;
