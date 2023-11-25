import styles from "./styles.module.scss";

/**
 * `Spinner` is a React component that creates a styled spinner.
 *
 * @component
 * @example
 * return <Spinner fontSize="10px" />;
 *
 * @description
 * This component accepts a single prop: `fontSize`, which defaults to "5px" if not provided.
 *
 * The `Spinner` component returns a `div` HTML element with a child div that displays a spinner. The structure of the component is as follows:
 *
 * - `wrapper`: This is the outer div that contains the spinner.
 * - `spinner`: This is the inner div that displays the spinner. The `fontSize` prop is applied to this div.
 *
 * The component uses a CSS module for styling, which is imported from `styles.module.scss`. Each element in the component has a corresponding style in this CSS module.
 */

const Spinner = ({ fontSize = "5px" }) => {
  return (
    <div className={styles["wrapper"]}>
      <div style={{ fontSize }} className={styles["spinner"]} />
    </div>
  );
};

export default Spinner;
