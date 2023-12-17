import styled from "styled-components";
import { motion } from "framer-motion";

/**
 * `BottomSheetContainer` is a styled motion.div component used as a container
 * for bottom sheet UI elements. It is designed to appear fixed at the bottom
 * of the viewport.
 */
export const BottomSheetContainer = styled(motion.div)`
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.backgroundBottom};
  z-index: 100;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  box-shadow: 0 0 20px 0px rgba(125, 125, 125, 0.15);
`;
