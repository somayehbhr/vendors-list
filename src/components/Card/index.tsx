import { TRestaurant } from "@/types/vendors";
import styles from "./styles.module.scss";
import Image from "next/image";
export const Card = ({ data }: { data: TRestaurant }) => {
  return (
    <div className={styles["card"]} dir="rtl">
      <div className={styles["card__background"]}>
        <Image
          className={styles["card__background__image"]}
          objectFit="cover"
          src={data?.backgroundImage}
          alt={data?.title}
          fill
        />
        <Image
          className={styles["card__background__logo"]}
          src={data?.logo}
          alt={data?.title}
          width={50}
          height={50}
        />
      </div>
      <div className={styles["card__details"]}>
        <div className={styles["card__details__top"]}>
          <div className={styles["card__details__top__title"]}>
            {data?.title}
          </div>
          <div className={styles["card__details__top__ratings"]}>
            <div className={styles["card__details__top__ratings__number"]}>
              {data?.rate}
            </div>
            <div className={styles["card__details__top__ratings__voteCount"]}>
              ({data?.voteCount?.toLocaleString()})
            </div>
          </div>
        </div>
        <div>{data?.description}</div>
        <div>
          {data?.isZFExpress ? (
            <span className={styles["card__details__deliveryType"]}>
              ارسال اکسپرس
            </span>
          ) : (
            <span className={styles["card__details__deliveryType"]}>
              پیک رستوران
            </span>
          )}
          <span>{data?.deliveryFee} </span>
          <span>تومان</span>
        </div>
      </div>
    </div>
  );
};
