import { useTheme } from "styled-components";

/**
 * Custom React hook for determining the color of a vehicle value based on its status.
 *
 * @param isInDanger - Optional boolean flag indicating if the vehicle value is in a danger state.
 * @param isInWarning - Optional boolean flag indicating if the vehicle value is in a warning state.
 * @returns A string representing the color code from the theme, corresponding to the vehicle value's state.
 *          It returns 'dangerPrimary' color if the value is in danger, 'warningPrimary' if it's in warning,
 *          or 'brandPrimary' for normal state.
 */
export const useVehicleValueColor = ({
  isInDanger,
  isInWarning,
}: {
  isInDanger?: boolean;
  isInWarning?: boolean;
}) => {
  const theme = useTheme();
  if (isInDanger) {
    return theme.colors.dangerPrimary;
  }
  if (isInWarning) {
    return theme.colors.warningPrimary;
  }
  return theme.colors.brandPrimary;
};
