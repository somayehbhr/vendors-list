import request from "../axios";
import { TApiResponse } from "@/types/restaurants";

export const getRestaurants = async () => {
  const { data }: { data: TApiResponse } = await request.get(
    "/mobile/v3/restaurant/vendors-list",
    {
      params: { page: 0, page_size: 10, lat: 35.724, long: 51.328 },
    },
  );
  return data;
};
