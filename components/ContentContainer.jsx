// components/ContentContainer.jsx

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex; // Enables flexbox
  flex-direction: column; // Stack children vertically
  align-items: center; // Center children horizontally within the container
  justify-content: flex-start; // Align content to the top
  width: 65%; // Take up 65% of the parent container's width
  min-height: 100vh; // Minimum height to fill the viewport vertically
  min-width: 65%; // Minimum width to fill the viewport horizontally
  margin: 0 auto; // Center the container itself within its parent
  padding: 175px; // Maintain some padding around the content
`;

const ContentContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContentContainer;
