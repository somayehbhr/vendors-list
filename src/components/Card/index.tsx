import { TRestaurant } from "@/types/vendors";
import styles from "./styles.module.scss";
import Image from "next/image";

/**
 * `Card` is a React component that creates a styled card for a restaurant.
 *
 * @component
 * @example
 * return <Card data={restaurantData} />;
 *
 * @description
 * This component accepts a single prop: `data`, which is an object of type `TRestaurant`.
 *
 * The `Card` component returns a `div` HTML element with various child elements that display the details of the restaurant. The structure of the component is as follows:
 *
 * - `card__background`: This div contains two images, the background image and the logo of the restaurant.
 * - `card__details`: This div displays the details of the restaurant. It is further divided into two sections: `card__details__top` and `card__details__description`.
 *   - `card__details__top`: This section displays the title of the restaurant and its ratings.
 *   - `card__details__description`: This section displays the description of the restaurant and its delivery details.
 *
 * The component uses a CSS module for styling, which is imported from `styles.module.scss`. Each element in the component has a corresponding style in this CSS module.
 *
 * The component is designed for right-to-left (RTL) languages, as indicated by the `dir="rtl"` attribute in the outermost div.
 */

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
