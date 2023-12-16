import { vehicleConfig } from "@/config/vehicle";
import { useVehicleValue } from "@/hooks/useVehicleValue";
import { useVehicleValueColor } from "@/hooks/useVehicleValueColor";
import { AnimationProps, motion } from "framer-motion";
import { useMemo } from "react";
import { useTheme } from "styled-components";

/**
 * Component representing a velocity scale visualization for a vehicle.
 * It utilizes hooks for fetching and visualizing vehicle velocity data and animates the scale according to the velocity.
 *
 * @param value - The current velocity value of the vehicle.
 * @returns A SVG representation of the velocity scale with dynamic animations.
 */
const VelocityScale = ({ value }: { value?: number }) => {
  const theme = useTheme();

  // Fetch normalized value, danger, and warning states based on vehicle velocity
  const { normalizedValue, isInDanger, isInWarning } = useVehicleValue({
    config: vehicleConfig.velocity,
    value,
  });

  // Determine the color of the scale based on the danger or warning state
  const color = useVehicleValueColor({ isInDanger, isInWarning });

  // Animation for the velocity scale based on normalized velocity value and color
  const scaleAnimation: AnimationProps["animate"] = useMemo(
    () => ({
      stroke: color,
      pathLength: Math.abs(normalizedValue),
    }),
    [normalizedValue, color],
  );

  // Animation for the ascending or descending indicator based on the normalized value
  const ascendingAnimation: AnimationProps["animate"] = useMemo(
    () => ({
      fill: color,
      y: normalizedValue * -100,
    }),
    [normalizedValue, color],
  );

  return (
    <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
      <path
        id="darkbg"
        fill="none"
        stroke={theme.colors.backgroundVisualization}
        stroke-width="40"
        d="M 965 501.5 C 965 244.687561 756.812439 36.5 500 36.5 C 243.187592 36.5 35 244.687561 35 501.5 M 500 966.5"
      />
      <path
        id="helperbg"
        fill="none"
        stroke={theme.colors.backgroundVisualization}
        stroke-width="5"
        d="M 889.25 501.25 C 889.25 286.273132 714.976868 112 500 112 C 285.023163 112 110.75 286.273132 110.75 501.25 M 500 890.5"
      />
      <motion.path
        id="scale"
        fill="none"
        stroke-width="40"
        d="M 35 500.5 C 35 243.687561 243.187561 35.5 500 35.5 C 756.812378 35.5 965 243.687561 965 500.5 M 500 965.5"
        animate={scaleAnimation}
      />
      <path
        id="ascendingindicator"
        fill={theme.colors.backgroundVisualization}
        fill-rule="evenodd"
        stroke="none"
        d="M 501 159 L 560 216 L 536.400024 216 L 536.400024 314 L 465.600006 314 L 465.600006 216 L 442 216 Z"
      />
      <path
        id="descendingindicator"
        fill={theme.colors.backgroundVisualization}
        fill-rule="evenodd"
        stroke="none"
        d="M 501 489 L 560 432 L 536.400024 432 L 536.400024 334 L 465.600006 334 L 465.600006 432 L 442 432 Z"
      />
      <motion.path
        id="velocityscale"
        fill-rule="evenodd"
        stroke="none"
        d="M 526 324 C 526 310.192871 514.807129 299 501 299 C 487.192871 299 476 310.192871 476 324 C 476 337.807129 487.192871 349 501 349 C 514.807129 349 526 337.807129 526 324 Z"
        animate={ascendingAnimation}
      />
    </svg>
  );
};

export default VelocityScale;
