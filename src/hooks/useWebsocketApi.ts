import useSWRSubscription, { SWRSubscriptionOptions } from "swr/subscription";

/**
 * Function to subscribe to a real-time data source.
 * @template T - The expected type of the received data.
 * @param key - The key that identifies the data source.
 * @param options - Options including the 'next' function for handling data updates.
 * @returns A cleanup function to terminate the subscription.
 */
const subscribe = <T>(
  key: string,
  options: SWRSubscriptionOptions<T, Error>, // Explicitly typed options
) => {
  const socket = new WebSocket(key);

  socket.addEventListener("message", (event) => {
    try {
      const data = JSON.parse(event.data) as T;
      options.next(null, data); // Using options.next
    } catch (parseError) {
      options.next(parseError as Error); // Using options.next
    }
  });

  socket.addEventListener("error", () => {
    options.next(new Error("WebSocket error occurred")); // Using options.next
  });

  return () => socket.close();
};

/**
 * Custom React hook for subscribing to API data using SWR Subscription.
 * @template T - The expected type of the API response.
 * @param endpoint - The endpoint to subscribe to, appended to the base WS API URL.
 * @returns An object containing the API data and any error.
 */
export const useWebsocketApi = <T>(
  endpoint: string,
): {
  data?: T;
  error?: Error;
} => {
  const url: string = `${process.env.NEXT_PUBLIC_API_BASE_WS_URL}/${endpoint}`;
  const { data, error } = useSWRSubscription<T, Error>(
    url,
    (key: string, options: SWRSubscriptionOptions<T, Error>) =>
      subscribe<T>(key, options),
  );

  return {
    data,
    error,
  };
};

export default useWebsocketApi;
