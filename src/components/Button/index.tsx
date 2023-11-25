import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles.module.scss";

/**
 * `Button` is a React component that creates a styled button.
 *
 * @component
 * @example
 * return <Button onClick={handleClick}>Click me</Button>;
 *
 * @description
 * This component accepts all the props of a standard HTML button element as its own props, thanks to the use of `DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>`.
 *
 * The `Button` component returns a `button` HTML element with a class of "button" (defined in "styles.module.scss") and any classes passed in through the `props.className`. All other props are spread onto the `button` element.
 *
 * This structure allows for a high degree of customization, as any prop that can be used on a standard HTML button can also be used on this `Button` component.
 */
export const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
) => {
  return (
    <button
      className={`${props.className} ${styles["button"]}`}
      {...props}
    ></button>
  );
};
