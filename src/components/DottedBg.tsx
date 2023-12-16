import styled from "styled-components";

/**
 * Styled component for a background with a dotted pattern.
 * This component creates an absolutely positioned div that covers the entire viewport with a radial gradient pattern.
 * The gradient creates a dotted effect and is masked to fade towards the edges.
 */
export const DottedBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: radial-gradient(#23252d 1px, transparent 0);
  background-size: 12px 12px;
  background-position: -8.5px -8.5px;
  mask-image: radial-gradient(
    ellipse at center,
    rgba(0, 0, 0, 1),
    transparent 75%
  );
  z-index: -1;
`;
