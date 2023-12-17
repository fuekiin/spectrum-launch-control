import { useState, useCallback } from "react";

/**
 * Custom hook for fetching data from a specified API endpoint.
 * This hook provides a structured response including the data, loading state, and any error message.
 * It is generic and can be used to fetch any type of data.
 *
 * @template T The type of data expected from the API response.
 * @param endpoint The API endpoint to fetch data from.
 * @returns An object containing:
 *          - `data`: The fetched data or null if not yet fetched or in case of error.
 *          - `loading`: Boolean indicating whether the data is being fetched.
 *          - `error`: String describing the error, if any occurred during the fetch.
 *          - `fetchData`: A function to trigger the data fetching process.
 */

interface FetchDataHook<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

const useFetchData = <T>(endpoint: string): FetchDataHook<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    const url: string = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${endpoint}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  return { data, loading, error, fetchData };
};

export default useFetchData;
