import styled, { keyframes } from "styled-components";

const loading = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

export const PreLoading = styled.div`
  padding: 200px 0 100px 0;
  display: flex;
  justify-content: center;
  color: #29487d;
  .icon {
    font-size: 60px;
    animation: ${loading} 1.5s infinite ease-in-out;
  }
`;

export const Logo = styled.div`
  text-align: center;
  color: rgba(128, 128, 128, 0.829);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  padding-bottom: 50px;
`;
