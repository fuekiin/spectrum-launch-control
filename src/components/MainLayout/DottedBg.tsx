import { motion } from "framer-motion";
import styled, { useTheme } from "styled-components";

/**
 * Styled component for creating a dotted background effect.
 * This component covers the entire viewport with a radial gradient pattern
 * that creates a dotted effect. The gradient is designed to fade towards the edges,
 * providing an aesthetic background style for the application.
 */
const BaseDottedBg = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

/**
 * Component that renders a `DottedBg` with animation.
 * The animation activates when the component is in an error state,
 * changing the background pattern to indicate the error visually.
 *
 * @param {Object} props - Component props.
 * @param {boolean} props.inErrorState - A boolean to control the animation based on the error state.
 *                                       Defaults to false if not provided.
 * @returns A `DottedBg` component with conditional animation based on the error state.
 *          The animation changes the background pattern and includes a repeating transition effect.
 */
const DottedBg = ({ inErrorState = false }: { inErrorState?: boolean }) => {
  const theme = useTheme();
  const animationProps = inErrorState
    ? {
        animate: {
          backgroundImage: [
            `radial-gradient(${theme.colors.backgroundVisualizationHighlight} 1px, transparent 0)`,
            `radial-gradient(${theme.colors.dangerPrimary} 2.5px, transparent 0)`,
            `radial-gradient(${theme.colors.backgroundVisualizationHighlight} 1px, transparent 0)`,
          ],
        },
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          times: [0, 0.4, 0.8],
          repeat: Infinity,
          repeatDelay: 0,
        },
      }
    : {
        animate: {
          backgroundImage: `radial-gradient(${theme.colors.backgroundVisualizationHighlight} 1px, transparent 0)`,
        },
      };

  return <BaseDottedBg {...animationProps} />;
};

export default DottedBg;
