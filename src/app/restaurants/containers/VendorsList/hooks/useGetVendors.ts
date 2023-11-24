import { useDispatch, useSelector } from "react-redux";
import { TFinalResult } from "@/types/vendors";
import { useEffect } from "react";
import { setVendors, updateVendors } from "@/redux/store/vendors";
import { getVendors } from "@/services/vendors";
import { incrementPage } from "@/redux/store/counter";

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
