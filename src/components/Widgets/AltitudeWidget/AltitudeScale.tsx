import { vehicleConfig } from "@/config/vehicle";
import { useVehicleValue } from "@/hooks/useVehicleValue";
import { useVehicleValueColor } from "@/hooks/useVehicleValueColor";
import { AnimationProps, motion } from "framer-motion";
import { useCallback, useMemo } from "react";
import { useTheme } from "styled-components";

/**
 * Component representing an altitude scale visualization for a vehicle.
 *
 * @param value - The current altitude value of the vehicle.
 * @returns A SVG representation of the altitude scale with dynamic animations.
 */
const AltitudeScale = ({ value }: { value?: number }) => {
  // Define opacity thresholds for different altitude levels
  const FLOOR_HEIGHT_OPACITY_THRESHOLD = 0.2;
  const FIRST_HEIGHT_OPACITY_THRESHOLD = 0.5;
  const SECOND_HEIGHT_OPACITY_THRESHOLD = 0.8;
  const THIRD_HEIGHT_OPACITY_THRESHOLD = 0.9;

  const HEIGTH_MAX_OPACITY = 0.9;

  const theme = useTheme();

  // Fetch normalized value, danger and warning states based on vehicle altitude
  const { normalizedValue, isInDanger, isInWarning } = useVehicleValue({
    config: vehicleConfig.altitude,
    value,
  });

  // Determine the color of the vehicle based on its danger or warning state
  const color = useVehicleValueColor({ isInDanger, isInWarning });

  // Function to calculate opacity based on altitude value and thresholds
  const calculateOpacity = useCallback(
    ({
      value,
      lowerThreshold,
      upperThreshold,
    }: {
      value: number;
      lowerThreshold: number;
      upperThreshold: number;
    }): number => {
      // Check if the normalized value is below the lower threshold
      if (value < lowerThreshold) {
        return 0;
      }

      // Check if the normalized value is above the upper threshold
      if (value > upperThreshold) {
        return HEIGTH_MAX_OPACITY;
      }

      // Calculate the relative position between the two thresholds
      const betweenValue =
        (value - lowerThreshold) / (upperThreshold - lowerThreshold);

      return betweenValue * HEIGTH_MAX_OPACITY;
    },
    [],
  );

  const vehicleAnimation: AnimationProps["animate"] = useMemo(
    () => ({
      y: normalizedValue * -300,
      fill: color,
    }),
    [normalizedValue, color],
  );

  const groupAnimation: AnimationProps["animate"] = useMemo(
    () => ({
      scale: 2 + normalizedValue * -1,
    }),
    [normalizedValue],
  );

  const firstHeightAnimation: AnimationProps["animate"] = useMemo(
    () => ({
      opacity: calculateOpacity({
        value: normalizedValue,
        lowerThreshold: FLOOR_HEIGHT_OPACITY_THRESHOLD,
        upperThreshold: FIRST_HEIGHT_OPACITY_THRESHOLD,
      }),
    }),
    [normalizedValue, calculateOpacity],
  );

  const secondHeightAnimation: AnimationProps["animate"] = useMemo(
    () => ({
      opacity: calculateOpacity({
        value: normalizedValue,
        lowerThreshold: FIRST_HEIGHT_OPACITY_THRESHOLD,
        upperThreshold: SECOND_HEIGHT_OPACITY_THRESHOLD,
      }),
    }),
    [normalizedValue, calculateOpacity],
  );

  const thirdHeightAnimation: AnimationProps["animate"] = useMemo(
    () => ({
      opacity: calculateOpacity({
        value: normalizedValue,
        lowerThreshold: SECOND_HEIGHT_OPACITY_THRESHOLD,
        upperThreshold: THIRD_HEIGHT_OPACITY_THRESHOLD,
      }),
    }),
    [normalizedValue, calculateOpacity],
  );

  return (
    <svg viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
      <motion.g animate={groupAnimation} id="group">
        <path
          id="earth"
          fill={theme.colors.backgroundVisualizationHighlight}
          fill-opacity="0.4"
          fill-rule="evenodd"
          stroke="none"
          d="M 599.5 465 C 599.5 409.771545 554.728455 365 499.5 365 C 444.271515 365 399.5 409.771545 399.5 465 C 399.5 520.228455 444.271515 565 499.5 565 C 554.728455 565 599.5 520.228455 599.5 465 Z"
        />
        <motion.path
          id="firstheight"
          fill="none"
          stroke={theme.colors.backgroundVisualizationHighlight}
          stroke-width="5"
          d="M 699.5 465 C 699.5 354.54306 609.956909 265 499.5 265 C 389.04306 265 299.5 354.54306 299.5 465 C 299.5 575.45697 389.04306 665 499.5 665 C 609.956909 665 699.5 575.45697 699.5 465 Z"
          animate={firstHeightAnimation}
        />
        <motion.path
          id="secondheight"
          fill="none"
          stroke={theme.colors.backgroundVisualizationHighlight}
          stroke-width="5"
          d="M 799.5 465 C 799.5 299.314575 665.185425 165 499.5 165 C 333.814575 165 199.5 299.314575 199.5 465 C 199.5 630.685425 333.814575 765 499.5 765 C 665.185425 765 799.5 630.685425 799.5 465 Z"
          animate={secondHeightAnimation}
        />
        <motion.path
          id="thirdheight"
          fill="none"
          stroke={theme.colors.backgroundVisualizationHighlight}
          stroke-width="5"
          d="M 899.5 465 C 899.5 244.086121 720.413879 65 499.5 65 C 278.586121 65 99.5 244.086121 99.5 465 C 99.5 685.913879 278.586121 865 499.5 865 C 720.413879 865 899.5 685.913879 899.5 465 Z"
          animate={thirdHeightAnimation}
        />
        <motion.path
          id="Vehicle"
          fill-rule="evenodd"
          stroke="none"
          d="M 496 363 L 497 363 L 496 365 L 498 365 L 500 365 L 499 363 L 500 363 L 501 363 L 500 365 L 502 365 L 504 365 L 503 363 L 504 363 L 504 321 L 500 315 L 496 321 Z"
          animate={vehicleAnimation}
        />
      </motion.g>
    </svg>
  );
};

export default AltitudeScale;
