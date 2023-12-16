import { vehicleConfig } from "@/config/vehicle";
import { useVehicleValue } from "@/hooks/useVehicleValue";
import { useVehicleValueColor } from "@/hooks/useVehicleValueColor";
import { AnimationProps, motion } from "framer-motion";
import { useMemo } from "react";
import { useTheme } from "styled-components";

/**
 * Component representing a temperature scale visualization for a vehicle.
 * Utilizes hooks for fetching and visualizing vehicle temperature data and animates the scale according to the temperature.
 *
 * @param value - The current temperature value of the vehicle.
 * @returns A SVG representation of the temperature scale with dynamic animations.
 */
const TemperatureScale = ({ value }: { value: number }) => {
  const theme = useTheme();

  // Fetch normalized value, danger, and warning states based on vehicle temperature
  const { normalizedValue, isInDanger, isInWarning } = useVehicleValue({
    config: vehicleConfig.temperature,
    value,
  });

  // Determine the color of the scale based on the danger or warning state
  const color = useVehicleValueColor({ isInDanger, isInWarning });

  // Animation for the moving scale based on normalized temperature value
  const scaleAnimation: AnimationProps["animate"] = useMemo(
    () => ({
      x: normalizedValue * 500, // Adjust this calculation as needed
    }),
    [normalizedValue, color],
  );

  // Animation for the background elements based on the color state
  const bgAnimation: AnimationProps["animate"] = useMemo(
    () => ({
      stroke: color,
    }),
    [normalizedValue, color],
  );

  return (
    <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
      <path
        id="helper"
        fill="none"
        stroke={theme.colors.backgroundVisualization}
        stroke-width="5"
        d="M 0 180 L 1000 180"
      />
      <path
        id="path1"
        fill="none"
        stroke={theme.colors.backgroundVisualization}
        stroke-width="5"
        d="M 0 320 L 1000 320"
      />
      <motion.path
        id="bgright"
        fill="none"
        stroke={theme.colors.backgroundVisualization}
        stroke-width="70"
        d="M 510 250 L 1000 250"
        animate={bgAnimation}
      />
      <motion.path
        id="bgleft"
        fill="none"
        stroke={theme.colors.backgroundVisualization}
        stroke-width="70"
        d="M 0 250 L 490 250"
        animate={bgAnimation}
      />
      <motion.path
        id="scale"
        fill="none"
        stroke="#ffffff"
        stroke-width="10"
        d="M 500 175 L 500 325"
        animate={scaleAnimation}
      />
    </svg>
  );
};

export default TemperatureScale;
