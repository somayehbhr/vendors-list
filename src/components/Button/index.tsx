import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./styles.module.scss";

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
