import React from "react";
import styled from "styled-components";
import { ArticleData } from "../../models/newsData";
import { designVariables } from "../../styles/globalVariables";

export const Article = (props: ArticleData) => {
  return (
    <StyledBlock>
      <div className="title-container">
        <a href={props.url} className="title">
          {props.title}
        </a>
        <p className="author">{props.author}</p>
      </div>
      <div className="content">{props.description}</div>
    </StyledBlock>
  );
};

const StyledBlock = styled.article`
  width: 80%;
  margin: 2rem auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${designVariables.palette.dark700};
  overflow: hidden;
  .title-container {
    width: 100%;
    background: ${designVariables.palette.dark400};
    color: ${designVariables.palette.light300};
    display: flex;
    flex-direction: column;
    padding: 1rem;
    .title {
      text-align: left;
      text-decoration: underline;
      font-size: 2rem;
      color: ${designVariables.colorBodyText};
      @media (max-width: 767px) {
        font-size: 1.5rem;
      }
    }
    .author {
      font-size: 1.5rem;
      text-align: right;
      @media (max-width: 767px) {
        font-size: 1.15rem;
      }
    }
  }
  .content {
    padding: 1rem;
    /* text-overflow: clip; */
  }
`;
