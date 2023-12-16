# Spectrum Launch Vehicle Data Visualization

## Overview

This project is a Next.js application developed as part of a technical assessment for a position at Isar Aerospace. It is designed to visualize various parameters of the "Spectrum" launch vehicle, providing real-time insights into the vehicle's velocity, altitude, temperature, and other critical metrics through an intuitive and interactive UI.

## Features

- **Real-Time Data Visualization:** View the current state of the Spectrum vehicle, including velocity, altitude, and temperature.
- **Dynamic Theming:** Utilizes `styled-components` for consistent and customizable theming across the application.
- **Responsive Design:** Ensures usability across different devices and screen sizes.
- **Customizable Vehicle Configuration:** Easily modify the vehicle's expected and projected parameter ranges.

## Project Structure

- `components/`: Contains reusable UI components like `WidgetCard`, `VelocityScale`, etc., for visualizing vehicle data.
- `config/`: Includes configuration files such as `vehicleConfig` for setting up vehicle parameters.
- `hooks/`: Custom React hooks like `useVehicleValue` and `useVehicleValueColor` for fetching and interpreting vehicle data.
- `types/`: Type definitions used across the application.
- `pages/`: Next.js pages that compose the application's layout and entry points.

## Vehicle Configuration

The vehicle's parameters can be configured in `vehicleConfig` located in the `config/` directory. This file allows setting expected and projected ranges for various metrics like velocity, altitude, and temperature. It enables easy adjustments to thresholds for warnings and danger alerts.

### Note on Altitude Configuration

As a developer, I encountered some uncertainties regarding the exact behavior of the 'altitude' parameter. Consequently, I'm not entirely sure if the current setup in `vehicleConfig` is perfectly accurate. However, the altitude configuration can be easily adjusted using the `altitude` properties in `vehicleConfig` to better match the expected behavior of the Spectrum vehicle.

## Using SWR for Data Fetching

SWR (stale-while-revalidate) is used for data fetching due to its several benefits:

- **Real-Time Updates:** SWR provides automatic revalidation of data, ensuring the vehicle's data is always up-to-date.
- **Caching and Performance:** Efficient caching strategy to reduce unnecessary network requests, improving performance.
- **Error Handling and Retry:** Built-in error handling and retry logic for a more resilient data fetching process.
- **Suspense and Loading States:** Supports React Suspense and handles loading states gracefully.

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
