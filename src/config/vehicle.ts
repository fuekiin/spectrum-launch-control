import { VehicleConfig } from "@/types/vehicleConfig";

/**
 * Configuration object defining the expected and projected ranges for various vehicle parameters.
 * This configuration is used to normalize and evaluate the vehicle's velocity, altitude, and temperature.
 *
 * @property velocity - Configuration for the vehicle's velocity.
 *   @property expectedMin - The minimum expected velocity value.
 *   @property expectedMax - The maximum expected velocity value.
 *   @property warningMinThreshold - The minimum threshold for a warning state in velocity.
 *   @property warningMaxThreshold - The maximum threshold for a warning state in velocity.
 *   @property dangerMinThreshold - The minimum threshold for a danger state in velocity.
 *   @property dangerMaxThreshold - The maximum threshold for a danger state in velocity.
 *   @property projectedMin - The minimum value in the projected normalization range for velocity.
 *   @property projectedMax - The maximum value in the projected normalization range for velocity.
 *
 * @property altitude - Configuration for the vehicle's altitude.
 *   Similar properties as velocity, but specific to altitude measurements.
 *
 * @property temperature - Configuration for the vehicle's temperature.
 *   Similar properties as velocity, but specific to temperature measurements.
 */
export const vehicleConfig: VehicleConfig = {
  velocity: {
    expectedMin: -100,
    expectedMax: 100,
    warningMinThreshold: -80,
    warningMaxThreshold: 75,
    dangerMinThreshold: -95,
    dangerMaxThreshold: 85,

    projectedMin: -1,
    projectedMax: 1,
  },
  altitude: {
    expectedMin: 0,
    expectedMax: -80000,

    projectedMin: 0,
    projectedMax: 1,
  },
  temperature: {
    expectedMin: -30,
    expectedMax: 30,

    projectedMin: -1,
    projectedMax: 1,
  },
};
