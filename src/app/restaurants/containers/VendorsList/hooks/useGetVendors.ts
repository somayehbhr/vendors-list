import { useDispatch, useSelector } from "react-redux";
import { TFinalResult } from "@/types/vendors";
import { useEffect } from "react";
import { setVendors, updateVendors } from "@/redux/store/vendors";
import { getVendors } from "@/services/vendors";
import { incrementPage } from "@/redux/store/counter";

/**
 * `useGetVendors` is a custom React hook that fetches vendor data from a service and stores it in the Redux store.
 *
 * @returns {Object} An object containing the following:
 * - `vendors`: An array of vendor objects. Each vendor object is filtered to exclude those with a type of "TEXT".
 * - `fetchMore`: A function that can be called to fetch more vendor data.
 *
 * @example
 * const { vendors, fetchMore } = useGetVendors();
 *
 * @hook
 * @function useGetVendors
 * @description This hook is responsible for fetching vendor data from a service and storing it in the Redux store. It also provides a function to fetch more data.
 *
 * @property {Function} fetchMore - This function is used to fetch more vendor data. It dispatches the `updateVendors` action to update the vendors in the Redux store with the new data, and the `incrementPage` action to increment the page number in the Redux store.
 *
 * @property {Array} vendors - This is an array of vendor objects. Each vendor object is filtered to exclude those with a type of "TEXT".
 */

export const useGetVendors = () => {
  const dispatch = useDispatch();

  const vendors = useSelector(
    (state: { vendors: TFinalResult }) =>
      state?.vendors?.filter((item) => item.type !== "TEXT"),
  );

  const currentPage = useSelector((state: { pageNumber: number }) => {
    return state?.pageNumber;
  });

  const fetchMore = async () => {
    try {
      const data = await getVendors(currentPage);
      dispatch(updateVendors(data.data.finalResult));
      dispatch(incrementPage(currentPage + 1));
    } catch (e) {
      console.error();
    }
  };

  const getData = async () => {
    try {
      const data = await getVendors(0);
      dispatch(setVendors(data.data.finalResult));
    } catch (e) {
      console.error();
    }
  };

  useEffect(() => {
    void getData();
  }, []);

  return {
    vendors,
    fetchMore,
  };
};
