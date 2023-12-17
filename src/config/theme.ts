import { DefaultTheme } from "styled-components";

/**
 * Defines the default theme for styled-components used throughout the application.
 * The theme includes a color palette for branding, alert statuses, and base colors,
 * as well as standardized sizes for various spacing and padding.
 *
 * @property colors - Defines the color palette.
 * @property sizes - Standard sizes.
 */
export const theme: DefaultTheme = {
  colors: {
    brandPrimary: "#095EDD",
    brandSecondary: "#3C78D1",
    brandTertiary: "#3A5680",

    dangerPrimary: "#DD2209",
    dangerSecondary: "#D1453C",
    dangerTertiary: "#80423A",

    warningPrimary: "#DD8809",
    warningSecondary: "#D18C3C",
    warningTertiary: "#80533A",

    basePrimary: "#FFFFFF",
    baseSecondary: "#AFAFAF",
    baseTertiary: "#626262",

    backgroundCard: "#020202",
    backgroundMain: "#060606",
    backgroundBottom: "#090909",
    backgroundLine: "#1C1C1C",
    backgroundVisualization: "#1C1C1C",
    backgroundVisualizationHighlight: "#2b2b2b",
  },
  sizes: {
    gap: "24px",
    cardPadding: "16px",
    buttonPadding: "8px",
  },
};
