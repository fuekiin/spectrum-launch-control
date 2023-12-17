# Spectrum Launch Vehicle Data Visualization

## Overview

This project is a Next.js application developed as part of a technical assessment for a position at Isar Aerospace. It is designed to visualize various parameters of the "Spectrum" launch vehicle, providing real-time insights into the vehicle's velocity, altitude, temperature, and other critical metrics through an intuitive and interactive UI.

## Live Preview

The latest version of this application can be previewed [here](https://spectrum-launch-control.vercel.app).

## Features

- **Real-Time Data Visualization:** View the current state of the Spectrum vehicle, including velocity, altitude, and temperature.
- **Dynamic Theming:** Utilizes `styled-components` for consistent and customizable theming across the application.
- **Responsive Design:** Ensures usability across different devices and screen sizes.
- **Customizable Vehicle Configuration:** Easily modify the vehicle's expected and projected parameter ranges.

## Project Structure

- `components/`: Contains reusable UI components like the `Widgets`, `Button`, etc., for visualizing vehicle data.
- `config/`: Includes configuration files such as `vehicleConfig` for setting up vehicle parameters.
- `hooks/`: Custom React hooks like `useVehicleValue` and `useVehicleValueColor` for fetching and interpreting vehicle data.
- `types/`: Type definitions used across the application.
- `pages/`: Next.js pages that compose the application's layout and entry points.

## Vehicle Configuration

The vehicle's parameters can be configured in `vehicleConfig` located in the `config/` directory. This file allows setting expected and projected ranges for various metrics like velocity, altitude, and temperature. It enables easy adjustments to thresholds for warnings and danger alerts.

### Note on Altitude Configuration

As a developer, I encountered some uncertainties regarding the exact behavior of the 'altitude' parameter. Consequently, I'm not entirely sure if the current setup in `vehicleConfig` is perfectly accurate. However, the altitude configuration can be easily adjusted using the `altitude` properties in `vehicleConfig` to better match the expected behavior of the Spectrum vehicle.

## Using SWR for Data Fetching with WebSocket

In the latest iteration, we've upgraded our data fetching strategy by integrating `useSWRSubscription` from SWR, shifting our focus to real-time data through WebSocket connections. This approach ensures that we receive instant updates about the Spectrum vehicle's status, directly streamed from the server.

### Key Advantages of `useSWRSubscription` with WebSocket:

- **Real-Time Data Updates:** The WebSocket connection provides immediate data updates, allowing us to visualize the vehicle's status as it happens.
- **Efficient Data Management:** `useSWRSubscription` manages the incoming data stream and errors, ensuring the data displayed is always current and reliable.
- **Deduplication of Subscriptions:** The hook deduplicates subscriptions using the same key, reducing network traffic and server load. It maintains a single subscription per key, shared across multiple components.
- **Seamless Error Handling:** The hook handles any errors during the subscription, resetting the error status upon the receipt of new data.

## Visualizations Using SVGs and Framer Motion

The visualizations in this application are primarily built using SVGs (Scalable Vector Graphics) and animated with Framer Motion.

### SVGs for Visualization

SVGs offer the advantage of creating intricate and aesthetically pleasing visualizations. They can be easily crafted by designers using tools like Adobe Illustrator or other graphic design software. This approach allows for rapid iteration and collaboration between developers and designers. The use of SVGs ensures that the visualizations are scalable and retain high quality at any resolution.

### Framer Motion

Framer Motion is a powerful library for React that simplifies complex animations and transitions. It provides an intuitive API for creating realistic and performant animations, enhancing the interactivity and visual appeal of SVG elements in the application.

### Considerations

While SVGs and Framer Motion provide a strong foundation for building beautiful and interactive visualizations, it's important to note that this approach might have limitations as the frontend scales. Particularly for applications requiring a vast number of dynamic elements or complex interactivity, alternative methods or additional optimizations may be necessary to maintain performance and scalability.

## Running the Project

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the development server: `npm run dev`.
4. Open `http://localhost:3000` to view the application.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
