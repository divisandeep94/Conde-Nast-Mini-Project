import React, { useState, useEffect } from "react";
import News from "./News";
import "./App.css";

const FOR_INITIAL_LOADING = "Please wait content is loading"
const NO_RESULTS_TEXT = "No Results Found"

export default () => {
  const [articlesList, setList] = useState([]);
  const [isDataFetching, setUpdate] = useState(FOR_INITIAL_LOADING);

  // On-Mounting
  useEffect(() => {
    fetch(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-11&sortBy=publishedAt&apiKey=dac999da7f3847cfbd2fdcbf08ae0782"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result.articles && result.articles.length !== 0) {
            setList(result.articles);
            setUpdate("")
          } else {
            setUpdate(NO_RESULTS_TEXT)
          }
        }
      )
  }, []);
  return (
    <div>
      <News articlesList={articlesList} isDataFetching={isDataFetching} />
    </div>
  );
};
