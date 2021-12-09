import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { useDebounce } from "../../hooks/useDebounce";
import { designVariables } from "../../styles/globalVariables";

export const InputText = (props: {
  onChange: (filterText: string) => void;
  placeHolder: string;
  style?: CSSProperties;
  inputValue?: string|null;
}) => {
  const [value, setValue] = useState("");
  //allow consumer to change value
  useEffect(() => {
    if (props.inputValue !== undefined) {
      if(props.inputValue === null)
      setValue("");
    }
  }, [props.inputValue]);
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
  .input-text {
    width: 100%;
    height: 1rem;
    background: transparent;
    border: 0;
    outline: 0;
    font-size: 1rem;
    line-height: 1.5;
    border-bottom: 1px solid black;
    transition: ${designVariables.transition};
    &:focus,
    &:hover {
      /* background: ${designVariables.palette.light300}; */
      border-bottom: 1px solid ${designVariables.palette.blue800};
      &::placeholder {
        opacity: 0.3;
      }
    }
    &::placeholder {
      font-size: 0.9rem;
      color: ${designVariables.palette.dark300};
      font-style: italic;
      text-transform: capitalize;
      transition: ${designVariables.transition};
    }
  }
  ${(props) => props.style && { ...props.style }};
`;
