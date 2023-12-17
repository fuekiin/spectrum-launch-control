import styled from "styled-components";

/**
 * Styled component for the main grid layout.
 * This component creates a responsive grid layout that automatically adjusts the number of columns
 * based on the available width while maintaining a consistent row height.
 */
const MainGrid = styled.div`
  flex: 1;
  display: grid;
  grid-auto-rows: 280px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: ${({ theme }) => theme.sizes.gap};
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export default MainGrid;
