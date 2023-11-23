import { useDispatch, useSelector } from "react-redux";
import { TApiResponse } from "@/types/restaurants";
import { getRestaurants } from "@/services/restaurants";
import { setRestaurants } from "@/redux/store/restaurants";
import { useEffect } from "react";

export const useGetVendors = () => {
  const dispatch = useDispatch();

  const data = useSelector(
    (state: { items: TApiResponse }) => state?.items?.data,
  );

  const getData = async () => {
    try {
      const data = await getRestaurants();
      dispatch(setRestaurants(data));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    void getData();
  }, []);

  return { vendors: data };
};
