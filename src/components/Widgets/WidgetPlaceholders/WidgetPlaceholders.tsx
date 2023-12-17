import styled from "styled-components";
import { WidgetCard, WidgetVisualizationArea } from "../WidgetCard";

const WidgetValuePlaceholder = styled.div`
  height: 32px;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.baseSecondary};
  opacity: 0.3;
  margin-top: 8px;
  border-radius: 8px;
`;

const WidgetVisualizationPlaceholder = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.baseSecondary};
  border-top-right-radius: 36px;
  border-top-left-radius: 36px;
  opacity: 0.1;
`;

export const WidgetVisualizationPlaceholderCard = ({
  title,
  inErrorState,
}: {
  title: string;
  inErrorState?: boolean;
}) => {
  return (
    <WidgetCard title={title} inErrorState={inErrorState}>
      <WidgetVisualizationArea>
        <WidgetValuePlaceholder />
        <WidgetVisualizationPlaceholder />
      </WidgetVisualizationArea>
    </WidgetCard>
  );
};
