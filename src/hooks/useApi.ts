import { useCallback } from "react";
import useSWR, { useSWRConfig } from "swr";

/**
 * Asynchronous function to fetch data from a given URL.
 * @template T - The expected type of the fetched data.
 * @param url - The URL from which to fetch data.
 * @returns A promise that resolves to the fetched data of type T.
 */
const fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};

/**
 * Custom React hook for fetching API data using SWR.
 * @template T - The expected type of the API response.
 * @param endpoint - The endpoint to fetch data from, appended to the base API URL.
 * @returns An object containing the API data, loading state, any error, and a function to refresh the data.
 */
export const useApi = <T>(
  endpoint: string,
): {
  data?: T;
  isLoading: boolean;
  error?: Error;
  refresh: () => void;
} => {
  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`;
  const { data, error } = useSWR<T, Error>(url, fetcher);
  const { mutate } = useSWRConfig();

  /**
   * Function to refresh the fetched data.
   */
  const refresh = useCallback(() => {
    mutate(url);
  }, [mutate, url]);

  return {
    data,
    isLoading: !error && !data,
    error,
    refresh,
  };
};

export default useApi;
