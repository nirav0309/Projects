import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosExample = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // GET request
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });

    // POST request
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      })
      .then((response) => {
        console.log("post request",response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // PUT request
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        id: 1,
        title: "updated title",
        body: "updated body",
        userId: 1,
      })
      .then((response) => {
        console.log("put request",response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // DELETE request
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log("Post deleted", response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // HEAD request
    axios
      .head("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log(response.headers);
      })
      .catch((error) => {
        console.error(error);
      });

    // PATCH request
    axios
      .patch("https://jsonplaceholder.typicode.com/posts/1", {
        title: "patched title",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Interceptors
    axios.interceptors.request.use(
      (config) => {
        console.log("Request intercepted:", config);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axios.interceptors.response.use(
      (response) => {
        console.log("Response intercepted:", response);
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <div>
      {data && (
        <div>
          <h2>GET Request Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h2>Error</h2>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AxiosExample;
