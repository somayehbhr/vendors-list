import request from "../axios";
import { TApiResponse } from "@/types/vendors";

export const getVendors = async (page: number) => {
  const { data }: { data: TApiResponse } = await request.get(
    "/mobile/v3/restaurant/vendors-list",
    {
      params: { page, page_size: 10, lat: 35.724, long: 51.328 },
    },
  );
  return data;
};
