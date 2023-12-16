import { ReactNode } from "react";
import styled from "styled-components";

/**
 * Styled container for individual widgets.
 */
const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.backgroundCard};
  border: 2px solid ${({ theme }) => theme.colors.backgroundLine};
  border-radius: 8px;
  width: 320px;
  height: 100%;
  justify-self: center;

  /* Gradient glow shadow effect */
  box-shadow:
    0 0 10px 5px rgba(125, 125, 125, 0.15),
    0 0 18px 12px rgba(0, 0, 125, 0.1),
    0 0 15px 9px rgba(90, 0, 0, 0.05);
`;

/**
 * Styled area for the widget title.
 */
const WidgetTitleArea = styled.div`
  border-bottom: 2px dotted ${({ theme }) => theme.colors.backgroundLine};
  padding-left: ${({ theme }) => theme.sizes.cardPadding};
  padding-right: ${({ theme }) => theme.sizes.cardPadding};
`;

/**
 * Styled component for the widget title text.
 */
const WidgetCardTitle = styled.h2`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.baseSecondary};
`;

/**
 * Styled area for the widget value.
 */
const WidgetValueArea = styled.div`
  padding-left: ${({ theme }) => theme.sizes.cardPadding};
  padding-right: ${({ theme }) => theme.sizes.cardPadding};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

/**
 * Styled component for displaying the widget value.
 */
const WidgetValue = styled.p`
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.baseSecondary};
  margin-top: ${({ theme }) => theme.sizes.cardPadding};
`;

/**
 * Component representing a widget card displaying a title, value, unit, and a custom visualization component.
 *
 * @param title - The title of the widget.
 * @param value - The numerical value to display in the widget.
 * @param unit - The unit of the value.
 * @param visualization - A ReactNode for rendering custom visualization (e.g., graphs, scales).
 * @returns A styled widget card component.
 */
export const WidgetCard = ({
  title,
  value,
  unit,
  visualization,
}: {
  title: string;
  value: number;
  unit: string;
  visualization: ReactNode;
}) => {
  return (
    <WidgetContainer>
      <WidgetTitleArea>
        <WidgetCardTitle>{title}</WidgetCardTitle>
      </WidgetTitleArea>
      <WidgetValueArea>
        <WidgetValue>
          {value.toFixed(2)} {unit}
        </WidgetValue>
        {visualization}
      </WidgetValueArea>
    </WidgetContainer>
  );
};
