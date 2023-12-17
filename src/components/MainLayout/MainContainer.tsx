import styled from "styled-components";

/**
 * Styled component for the main container.
 * This component is designed as a flexible container.
 * It centers its content and applies spacing based on the theme's gap size.
 */
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.gap};
  gap: ${({ theme }) => theme.sizes.gap};
`;

export default MainContainer;
