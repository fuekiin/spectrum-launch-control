import { WidgetVisualizationCard } from "../WidgetCard";
import AltitudeScale from "./AltitudeScale";

/**
 * Component representing a widget to display the altitude of the Spectrum launch vehicle.
 * It shows the current altitude value and provides a visual representation using the AltitudeScale component.
 *
 * @param {Object} props - The props for the component.
 * @param {number} [props.altitude] - The current altitude of the Spectrum vehicle.
 * @returns A widget displaying the current altitude of the Spectrum vehicle both numerically and visually.
 */
interface Props {
  altitude?: number;
}

const AltitudeWidget = ({ altitude }: Props) => {
  return (
    <WidgetVisualizationCard
      title="Altitude"
      value={altitude}
      unit="m"
      visualization={<AltitudeScale value={altitude} />}
    />
  );
};

export default AltitudeWidget;
