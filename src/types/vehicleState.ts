/**
 * Type definition for representing the state of a vehicle.
 *
 * @property velocity - The current velocity of the vehicle, expressed as a number.
 * @property altitude - The current altitude of the vehicle, expressed as a number.
 * @property temperature - The current vehicle temperature, expressed as a number.
 * @property statusMessage - A string containing a status message about the vehicle's condition or operation.
 * @property isAscending - A boolean indicating whether the vehicle is ascending.
 * @property isActionRequired - A boolean indicating whether some action is required for the vehicle.
 */
export type VehicleState = {
  velocity: number;
  altitude: number;
  temperature: number;
  statusMessage: string;
  isAscending: boolean;
  isActionRequired: boolean;
};
