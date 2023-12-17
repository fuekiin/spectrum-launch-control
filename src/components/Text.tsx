import styled, { css } from "styled-components";

// Define the interface for Text component properties
interface TextProps {
  priority?: "primary" | "secondary" | "tertiary";
}

// Function to determine the text color based on the priority
const getPriorityStyles = (priority: TextProps["priority"] = "primary") => css`
  color: ${({ theme }) =>
    theme.colors[
      `base${priority.charAt(0).toUpperCase() + priority.slice(1)}`
    ]};
`;

// Styled Text component
const Text = styled.p<TextProps>`
  font-size: 16px;
  margin: 0;
  ${(props) => getPriorityStyles(props.priority)}
`;

/**
 * `Text` is a styled paragraph component that adjusts its color based on the given priority.
 * Accepts 'primary', 'secondary', or 'tertiary' as priority values, each corresponding to a color theme.
 * If no priority is provided, it defaults to 'primary'.
 *
 * @param priority The priority level of the text, affecting its color.
 */
export default Text;
