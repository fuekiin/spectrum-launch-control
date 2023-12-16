/**
 * Type definition for configuring vehicle value normalization and thresholds.
 *
 * @property expectedMin - The minimum value expected for the vehicle parameter.
 * @property expectedMax - The maximum value expected for the vehicle parameter.
 * @property warningMinThreshold - Optional minimum threshold for warning state.
 * @property dangerMinThreshold - Optional minimum threshold for danger state.
 * @property warningMaxThreshold - Optional maximum threshold for warning state.
 * @property dangerMaxThreshold - Optional maximum threshold for danger state.
 * @property projectedMin - The minimum value of the projected range for normalization.
 * @property projectedMax - The maximum value of the projected range for normalization.
 */
export type VehicleValueConfig = {
  expectedMin: number;
  expectedMax: number;
  warningMinThreshold?: number;
  dangerMinThreshold?: number;
  warningMaxThreshold?: number;
  dangerMaxThreshold?: number;

  projectedMin: number;
  projectedMax: number;
};

/**
 * Type definition for the configuration of various vehicle parameters.
 *
 * @property velocity - Configuration for the vehicle's velocity.
 * @property altitude - Configuration for the vehicle's altitude.
 * @property temperature - Configuration for the vehicle's temperature.
 */
export type VehicleConfig = {
  velocity: VehicleValueConfig;
  altitude: VehicleValueConfig;
  temperature: VehicleValueConfig;
};
