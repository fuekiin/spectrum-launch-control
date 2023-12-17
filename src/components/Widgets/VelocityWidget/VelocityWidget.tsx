import { WidgetVisualizationCard } from "../WidgetCard";
import VelocityScale from "./VelocityScale";

/**
 * Component representing a widget to display the velocity of the Spectrum launch vehicle.
 * It shows the current velocity value and provides a visual representation using the VelocityScale component.
 *
 * @param {Object} props - The props for the component.
 * @param {number} [props.velocity] - The current velocity of the Spectrum vehicle.
 * @returns A widget displaying the current velocity of the Spectrum vehicle both numerically and visually.
 *         The widget uses the VelocityScale component to provide a dynamic graphical representation of the vehicle's velocity.
 */
interface Props {
  velocity?: number;
}

const VelocityWidget = ({ velocity }: Props) => {
  return (
    <WidgetVisualizationCard
      title="Velocity"
      value={velocity}
      unit="m/s"
      visualization={<VelocityScale value={velocity} />}
    />
  );
};

export default VelocityWidget;
