import styled from "styled-components";

export const Header = styled.header`
  position: sticky;
  top: 0;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  background-color: grey;
`;

export const Wrapper = styled.div`
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
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;
