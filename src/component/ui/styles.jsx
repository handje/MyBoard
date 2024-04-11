import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  background-color: blue;
  cursor: pointer;
`;

export const Wrapper = styled.body`
  width: calc(100%-32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  border: 1px blue solid;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;
