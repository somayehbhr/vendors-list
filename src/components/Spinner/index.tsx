import styles from "./spinner.module.scss";

const Spinner = ({ fontSize = "5px" }) => {
  return (
    <div className={styles["wrapper"]}>
      <div style={{ fontSize }} className={styles["spinner"]} />
    </div>
  );
};

export default Spinner;
