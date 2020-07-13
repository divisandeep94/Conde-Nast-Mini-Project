import React, { useState, useEffect } from "react";
import News from "./News";
import "./App.css";

export default () => {
  const [articlesList, setList] = useState([]);

  useEffect(() => {
    fetch(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-11&sortBy=publishedAt&apiKey=dac999da7f3847cfbd2fdcbf08ae0782"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.articles.length !== 0) {
            setList(result.articles);
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  }, []);
  return (
    <div>
      <News articlesList={articlesList} />
    </div>
  );
};
