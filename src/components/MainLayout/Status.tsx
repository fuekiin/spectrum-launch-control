import styled from "styled-components";

/**
 * Styled component for the vehicle status message.
 */
const Status = styled.div`
  width: "100%";
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.brandPrimary};
  font-size: 16px;
  font-weight: 800;
`;

export default Status;
