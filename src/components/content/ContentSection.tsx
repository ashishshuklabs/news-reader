import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import {
  ArticleData,
  getFilteredArticles,
  NewsData,
} from "../../models/newsData";
import { fetchNews } from "../../services/fetchService";
import { designVariables } from "../../styles/globalVariables";
import { Article } from "../article/Article";
import { OutlinedButton } from "../form/button/OutlinedButton";
import { InputText } from "../inputText/InputText";

export const ContentSection = () => {
  const [input, setInput] = React.useState("bitcoin");
  const { loading, data, error, setError, setData, setLoading } =
    useFetch(input);
  const [disabled, setDisabled] = useState(true);
  const [filteredArticles, setFilteredArticles] = useState<ArticleData[]>([]);
  //initialize/default filteredArticles with data, whenever its fetched.
  React.useEffect(() => {
    if (data) {
      setFilteredArticles(data.articles);
    }
  }, [data]);
  //return all articles when filterText is empty. Filtering by partial source match(may be exact match could be better?).
  const handleFilter = (filterText: string) => {
    if (!data) {
      setFilteredArticles([]);
      return;
    }
    setFilteredArticles(
      filterText ? getFilteredArticles(data, filterText) : data.articles
    );
  };
  const handleSearch = async () => {
    const data = await fetchNews<NewsData>(input);
    if (typeof data === "string") {
      setError(data);
    } else {
      setData(data);
    }
    // setLoading(false);
  };
  const handleInput = (text: string) => {
    setInput(text);
    text.trim().length === 0 ? setDisabled(true) : setDisabled(false);
    // text.trim().length > 0 ? setLoading(true) : setLoading(false);
  };
  //building key out of title and description. Apparantly, just the title is not unique.
  return (
    <Container>
      <div className="search-news">
        <div className="search-button">
          <OutlinedButton
            color={designVariables.palette.dark400}
            disabled={disabled}
            disabledColor={designVariables.palette.light300}
            hoverColor={designVariables.palette.dark300}
            title="search"
            onClick={handleSearch}
          />
        </div>
        <div className="text-field">
          <InputText onChange={handleInput} placeHolder="enter search phrase" />
        </div>
      </div>
      <div className="text-field">
        <InputText onChange={handleFilter} placeHolder="filter by source..." />
      </div>
      <div className="returned-results">
        <span className="text">articles found:</span>
        <span className="count">{filteredArticles.length}</span>
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        data &&
        filteredArticles.map((article) => (
          <Article
            key={`${article.title}${article.description}`}
            {...article}
          />
        ))
      )}
    </Container>
  );
};

const Container = styled.section`
  min-height: calc(100vh - 5rem);
  width: 100%;
  margin-top: 5rem;
  background-color: ${designVariables.colorBodyBg};
  display: flex;
  flex-direction: column;
  .text-field {
    width: 10rem;
    margin-right: 4rem;
    margin-left: 10%;
  }
  .search-news {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    .text-field {
      width: 10rem;
      margin-right: 4rem;
    }
    .search-button {
      order: 2;
      width: 10rem;
    }
  }
  .returned-results {
    width: 80%;
    margin: 0.25rem 10%;
    text-align: start;
    font-size: 0.8rem;
    color: ${designVariables.palette.green700};
    text-transform: capitalize;
    .text {
      margin-right: 0.5rem;
    }
  }
  .loading {
    color: ${designVariables.palette.dark700};
    font-size: 2rem;
    margin: 0 auto;
  }
  .error {
    color: ${designVariables.palette.red200};
    font-size: 1rem;
    margin: 0 auto;
  }
`;
