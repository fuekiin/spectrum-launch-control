import styled from "styled-components";

/**
 * Styled component for showing an error message.
 */
const ErrorMessage = styled.p`
  width: "100%";
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.brandPrimary};
  background-color: ${({ theme }) => theme.colors.baseSecondary};
  font-size: 16px;
  font-weight: 800;
  border-radius: 16px;
`;

export default ErrorMessage;
