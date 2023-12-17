import styled from "styled-components";

/**
 * Styled button component for aborting flight operations.
 */
export const AbortFlightButton = styled.button`
  padding: ${({ theme }) => theme.sizes.buttonPadding};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dangerPrimary};
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.basePrimary};
  border-radius: ${({ theme }) => theme.sizes.buttonPadding};
  &:hover {
    background-color: ${({ theme }) => theme.colors.dangerSecondary};
  }
  &:disabled {
    opacity: 0.3;
  }
`;
