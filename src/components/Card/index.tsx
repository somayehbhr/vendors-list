import { TRestaurant } from "@/types/restaurants";
import styles from "./styles.module.scss";
import Image from "next/image";
export const Card = ({ data }: { data: TRestaurant }) => {
  return (
    <div className={styles["card"]}>
      <Image
        src={data.backgroundImage}
        alt={data.title}
        height={100}
        width={300}
        // loader={(src) => `${src}`}
      />
    </div>
  );
};
