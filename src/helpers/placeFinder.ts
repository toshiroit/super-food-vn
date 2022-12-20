import { RequestServices } from "@/services/request-services";

export const PlaceFinder = async (
  query: string,
  api_key: string,
  limit: number = 5,
  radius: number = 10000,
  long: any,
  lat: any
) => {
  let baseUrl = "https://api.tomtom.com/search/2/poiSearch";
  let queryString = `limit=${limit}&lat=${lat}&lon=${long}&radius=${radius}&key=${api_key}`;
  let response = await RequestServices.get({
    method: "GET",
    authorization: "",
    contentType: "application/json",
    isAuthRequired: true,
    url: `${baseUrl}/${query}.json?${queryString}`,
  });
  return response.data.results;
};
