import styled from "styled-components";

/**
 * Styled component for a refresh button.
 * This button is designed to be fixed at the bottom-right of the viewport, usd to re-fetch Vehicle data.
 */
export const RefreshButton = styled.button`
  position: fixed;
  right: ${({ theme }) => theme.sizes.gap};
  bottom: ${({ theme }) => theme.sizes.gap};
  padding: ${({ theme }) => theme.sizes.buttonPadding};

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brandPrimary};
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.basePrimary};
  border-radius: ${({ theme }) => theme.sizes.buttonPadding};
  &:hover {
    background-color: ${({ theme }) => theme.colors.brandSecondary};
  }
`;
