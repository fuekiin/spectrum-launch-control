import { VehicleState } from "@/types/vehicleState";
import useWebsocketApi from "./useWebsocketApi";

/**
 * Custom React hook to fetch the vehicle state.
 * This hook is a specialized wrapper around the `useApi` hook,
 * specifically configured to fetch the vehicle state from the "SpectrumStatus" endpoint.
 *
 * @returns An object containing the vehicle state data, loading state, any error, and a function to refresh the data.
 *          The shape of the returned object is defined by the `useApi` hook, parameterized with the `VehicleState` type.
 */
export const useVehicleState = () =>
  useWebsocketApi<VehicleState>("SpectrumWS");
