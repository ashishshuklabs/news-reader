import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import { ArticleData, getFilteredArticles } from "../../models/newsData";
import { designVariables } from "../../styles/globalVariables";
import { Article } from "../article/Article";
import { Filter } from "../filter/Filter";

export const ContentSection = () => {
  const { loading, data, error } = useFetch("bitcoin");
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
  //building key out of title and description. Apparantly, just the title is not unique.
  return (
    <Container>
      <Filter onChange={handleFilter} placeHolder="filter by source..." />
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
  }
`;
