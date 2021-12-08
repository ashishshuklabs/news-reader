import React, { ChangeEvent, useEffect, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { useDebounce } from "../../hooks/useDebounce";
import { designVariables } from "../../styles/globalVariables";

export const InputText = (props: {
  onChange: (filterText: string) => void;
  placeHolder: string;
  style?: CSSProperties;
}) => {
  const [value, setValue] = useState("");
  //debounce input before passing to callback. Let the user jam as much needed and let 200ms pass before we do anything with the input.
  const { debouncedValue } = useDebounce(value);
  //return the debounced value to parent for processing
  useEffect(() => {
    if (props.onChange) {
      props.onChange(debouncedValue);
    }
  }, [debouncedValue]);
  return (
    <StyledFilterSection style={props.style}>
      {/* <div className="input-container"> */}
      <input
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        type="text"
        className="input-text"
        placeholder={props.placeHolder}
      />
      {/* </div> */}
    </StyledFilterSection>
  );
};

const StyledFilterSection = styled.article<{ style?: CSSProperties }>`
  /* width: 100%;
  height: 1rem;
  margin: 2rem 0; */
  /* .input-container { */
  /* width: 20%;
    margin: 0 10%; */
  .input-text {
    width: 100%;
    height: 1rem;
    margin: 2rem 0;
    background: transparent;
    border: 0;
    outline: 0;
    font-size: 1rem;
    line-height: 1.5;
    border-bottom: 1px solid black;
    transition: ${designVariables.transition};
    &:focus,
    &:hover {
      background: ${designVariables.palette.light300};
      border-bottom: 1px solid ${designVariables.palette.blue800};
      &::placeholder {
        opacity: 0.3;
      }
    }
    &::placeholder {
      font-size: 0.95rem;
      color: ${designVariables.palette.dark300};
      font-style: italic;
      text-transform: capitalize;
      transition: ${designVariables.transition};
    }
  }
  ${(props) => props.style && { ...props.style }};
  /* } */
`;
