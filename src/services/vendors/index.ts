import request from "../axios";
import { TApiResponse } from "@/types/vendors";

/**
 * `getVendors` is an asynchronous function that fetches a list of vendors from the server.
 *
 * @param {number} page - The page number to fetch.
 * @returns {Promise<TApiResponse>} - A promise that resolves to the response data.
 *
 * @example
 * const vendors = await getVendors(1);
 *
 * @description
 * This function sends a GET request to the "/mobile/v3/restaurant/vendors-list" endpoint with the `page`, `page_size`, `lat`, and `long` parameters.
 * The `page_size` is set to 10, and the `lat` and `long` parameters are set to 35.724 and 51.328, respectively.
 *
 * The function uses the `request` instance of Axios that has been configured with default settings.
 * The response from the server is expected to be in the `TApiResponse` format.
 * The function returns the `data` field from the response.
 */
export const getVendors = async (page: number) => {
  const { data }: { data: TApiResponse } = await request.get(
    "/mobile/v3/restaurant/vendors-list",
    {
      params: { page, page_size: 10, lat: 35.724, long: 51.328 },
    },
  );
  return data;
};
