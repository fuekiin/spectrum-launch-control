import styled, { css } from "styled-components";

/**
 * Interface for Button component properties.
 */
interface Props {
  /**
   * Optional variant prop to define button styling.
   * Can be 'brand', 'warning', or 'danger'. Defaults to 'brand'.
   */
  variant?: "brand" | "warning" | "danger";
}

/**
 * Function to determine the button color based on the variant.
 * Defaults to 'brand' variant if none is specified.
 *
 * @param variant The variant of the button.
 * @returns The styled-component CSS for the specified variant.
 */
const getVariantStyles = (variant: Props["variant"] = "brand") => css`
  background-color: ${({ theme }) => theme.colors[`${variant}Primary`]};
  &:hover {
    background-color: ${({ theme }) => theme.colors[`${variant}Secondary`]};
  }
`;

/**
 * Styled Button component.
 * This component allows for optional theming based on the 'variant' prop.
 * The default styling is based on the 'brand' variant.
 * Includes styles for button padding, font size, font weight, border radius,
 * and dynamic background colors for different button states.
 */
const Button = styled.button<Props>`
  padding: ${({ theme }) => theme.sizes.buttonPadding};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.basePrimary};
  border-radius: ${({ theme }) => theme.sizes.buttonPadding};
  ${(props) => getVariantStyles(props.variant)}
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export default Button;
