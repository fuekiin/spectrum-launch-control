import { WidgetVisualizationCard } from "../WidgetCard";
import TemperatureScale from "./TemperatureScale";

/**
 * Component representing a widget to display the temperature of the Spectrum launch vehicle.
 * It shows the current temperature value and provides a visual representation using the TemperatureScale component.
 *
 * @param {Object} props - The props for the component.
 * @param {number} [props.temperature] - The current temperature of the Spectrum vehicle.
 * @returns A widget displaying the current temperature of the Spectrum vehicle both numerically and visually.
 */
interface Props {
  temperature?: number;
}

const TemperatureWidget = ({ temperature }: Props) => {
  return (
    <WidgetVisualizationCard
      title="Temperature"
      value={temperature}
      unit="°C"
      visualization={<TemperatureScale value={temperature} />}
    />
  );
};

export default TemperatureWidget;
