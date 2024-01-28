// components/ContentContainer.jsx

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: flex-start; 
  width: 65%; 
  min-height: 100vh; 
  min-width: 65%;
  margin: 0 auto; 
  padding: 145px; 
`;

const ContentContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContentContainer;
