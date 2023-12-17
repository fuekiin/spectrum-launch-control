import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled, { useTheme } from "styled-components";

/**
 * Styled container for individual widgets. It provides a consistent layout and design for various types of widget cards.
 */
const WidgetContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 2px solid ${({ theme }) => theme.colors.backgroundLine};
  border-radius: 8px;
  width: 280px;
  height: 100%;
  justify-self: center;
  box-shadow: 0 0 10px 5px rgba(93, 93, 105, 0.15);
`;

/**
 * Styled area for the widget title. It separates the title from the rest of the widget content.
 */
const WidgetTitleArea = styled.div`
  border-bottom: 2px dotted ${({ theme }) => theme.colors.backgroundLine};
  padding-left: ${({ theme }) => theme.sizes.cardPadding};
  padding-right: ${({ theme }) => theme.sizes.cardPadding};
`;

/**
 * Styled component for the widget title text. Defines the visual appearance of the widget's title.
 */
const WidgetCardTitle = styled.h2`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.baseSecondary};
`;

/**
 * Styled area for the widget visualization. It is designed to contain custom visualization components like graphs or scales.
 */
export const WidgetVisualizationArea = styled.div`
  padding-left: ${({ theme }) => theme.sizes.cardPadding};
  padding-right: ${({ theme }) => theme.sizes.cardPadding};
  padding-top: ${({ theme }) => theme.sizes.cardPadding};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

/**
 * Styled area for the widget input. It is intended for widgets that require user interaction, such as buttons or forms.
 */
const WidgetInputArea = styled.div`
  padding: ${({ theme }) => theme.sizes.cardPadding};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

/**
 * Styled component for displaying the widget value. It presents the main numerical value of the widget.
 */
export const WidgetValue = styled.p`
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.baseSecondary};
  margin: 0;
`;

/**
 * Component representing a generic widget card. It can be used to display various types of content, including visualizations and inputs.
 *
 * @param title - The title of the widget.
 * @param children - The content of the widget, which can be a visualization or input elements.
 * @param inErrorState - Flag indicating if the widget is in an error state, which can change its visual appearance.
 * @returns A styled widget card component.
 */
export const WidgetCard = ({
  title,
  children,
  inErrorState = false,
}: {
  title: string;
  children: ReactNode;
  inErrorState?: boolean;
}) => {
  const theme = useTheme();
  const animationProps = inErrorState
    ? {
        animate: {
          borderColor: [
            theme.colors.backgroundLine,
            theme.colors.dangerSecondary,
            theme.colors.backgroundLine,
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
          borderColor: theme.colors.backgroundLine,
        },
      };

  return (
    <WidgetContainer {...animationProps}>
      <WidgetTitleArea>
        <WidgetCardTitle>{title}</WidgetCardTitle>
      </WidgetTitleArea>
      {children}
    </WidgetContainer>
  );
};

/**
 * Component representing a visualization widget card. It displays a title, a value with a unit, and a custom visualization.
 *
 * @param title - The title of the widget.
 * @param value - The numerical value to display in the widget.
 * @param unit - The unit of the value (e.g., "m/s", "°C").
 * @param visualization - A ReactNode for rendering custom visualization (e.g., graphs, scales).
 * @param inErrorState - Flag indicating if the widget is in an error state.
 * @returns A widget card specifically designed for visualizations.
 */
export const WidgetVisualizationCard = ({
  title,
  value,
  unit,
  visualization,
  inErrorState,
}: {
  title: string;
  value?: number;
  unit: string;
  visualization: ReactNode;
  inErrorState?: boolean;
}) => {
  return (
    <WidgetCard title={title} inErrorState={inErrorState}>
      <WidgetVisualizationArea>
        <WidgetValue>
          {value ? value.toFixed(2) : "-"} {unit}
        </WidgetValue>
        {visualization}
      </WidgetVisualizationArea>
    </WidgetCard>
  );
};

/**
 * Component representing an input widget card. It displays a title and input elements for user interaction.
 *
 * @param title - The title of the widget.
 * @param children - Input elements such as buttons or form fields.
 * @param inErrorState - Flag indicating if the widget is in an error state.
 * @returns A widget card specifically designed for user inputs.
 */
export const WidgetInputCard = ({
  title,
  children,
  inErrorState,
}: {
  title: string;
  children: ReactNode;
  inErrorState?: boolean;
}) => {
  return (
    <WidgetCard title={title} inErrorState={inErrorState}>
      <WidgetInputArea>{children}</WidgetInputArea>
    </WidgetCard>
  );
};
