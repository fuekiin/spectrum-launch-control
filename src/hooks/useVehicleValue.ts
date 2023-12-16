import { VehicleValueConfig } from "@/types/vehicleConfig";
import { useState, useEffect } from "react";

/**
 * Normalizes a given value from its original range to a new range, as defined in the configuration.
 *
 * @param value - The original value to be normalized.
 * @param config - The configuration object containing the original and target ranges.
 * @returns The normalized value, mapped to the new range and clamped within this range.
 */
const getNormalizedValue = (
  value: number,
  config: VehicleValueConfig,
): number => {
  const { expectedMin, expectedMax, projectedMin, projectedMax } = config;

  // Calculate the ratio of the value in the expected range
  const ratio = (value - expectedMin) / (expectedMax - expectedMin);

  // Map this ratio to the projected range
  let normalizedValue = projectedMin + ratio * (projectedMax - projectedMin);

  // Clamp the value to ensure it's within the projected range
  normalizedValue = Math.max(
    projectedMin,
    Math.min(normalizedValue, projectedMax),
  );

  return normalizedValue;
};

/**
 * Custom React hook to manage vehicle value states like normalized value, warning, and danger indicators.
 *
 * @param config - Configuration for the vehicle value normalization and threshold settings.
 * @param value - The current raw value of the vehicle parameter to be normalized.
 * @returns An object containing the normalized value, and boolean flags indicating if the value is in warning or danger zones.
 */
export const useVehicleValue = ({
  config,
  value: passedValue,
}: {
  config: VehicleValueConfig;
  value?: number;
}) => {
  const [normalizedValue, setNormalizedValue] = useState<number>(0);
  const [isInWarning, setIsInWarning] = useState<boolean>(false);
  const [isInDanger, setIsInDanger] = useState<boolean>(false);

  useEffect(() => {
    const value = passedValue ?? config.expectedMin;
    const normalized = getNormalizedValue(value, config);
    setNormalizedValue(normalized);

    // Check for warning and danger thresholds
    setIsInWarning(
      (config.warningMinThreshold !== undefined &&
        value <= config.warningMinThreshold) ||
        (config.warningMaxThreshold !== undefined &&
          value >= config.warningMaxThreshold),
    );

    setIsInDanger(
      (config.dangerMinThreshold !== undefined &&
        value <= config.dangerMinThreshold) ||
        (config.dangerMaxThreshold !== undefined &&
          value >= config.dangerMaxThreshold),
    );
  }, [config, passedValue]);

  return { normalizedValue, isInWarning, isInDanger };
};
