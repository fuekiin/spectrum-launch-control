/**
 * Home Component
 *
 * Displays the main dashboard for vehicle state monitoring.
 * It uses the `useVehicleState` hook to fetch and display data such as velocity, temperature, and altitude.
 * In case of loading or error states, appropriate messages are displayed.
 */

import { useVehicleState } from "@/hooks/useVehicleState";

import VelocityWidget from "@/components/Widgets/VelocityWidget/VelocityWidget";
import TemperatureWidget from "@/components/Widgets/TemperatureWidget/TemperatureWidget";
import AltitudeWidget from "@/components/Widgets/AltitudeWidget/AltitudeWidget";
import ActOnSpectrumWidget from "@/components/Widgets/ActOnSpectrumWidget/ActOnSpectrumWidget";
import MainContainer from "@/components/MainLayout/MainContainer";
import DottedBg from "@/components/MainLayout/DottedBg";
import ErrorMessage from "@/components/MainLayout/ErrorMessage";
import MainGrid from "@/components/MainLayout/MainGrid";
import Status from "@/components/MainLayout/Status";
import VehicleInfoWidget from "@/components/Widgets/VehicleInfoWidget/VehicleInfoWidget";
import { WidgetVisualizationPlaceholderCard } from "@/components/Widgets/WidgetPlaceholders/WidgetPlaceholders";

const Home = () => {
  const { data, error } = useVehicleState();

  /**
   * Renders error state with a message.
   */
  if (error) {
    return (
      <MainContainer>
        <DottedBg />
        <ErrorMessage>Error occurred {JSON.stringify(data)}</ErrorMessage>
      </MainContainer>
    );
  }

  /**
   * Renders the main content of the Home component including status, main grid, and refresh button.
   */
  return (
    <MainContainer>
      <DottedBg inErrorState={data?.IsActionRequired} />
      <Status>{data?.StatusMessage ?? "-"}</Status>
      <MainGrid>
        <VehicleInfoWidget />
        <TemperatureWidget temperature={data?.Temperature} />
        <ActOnSpectrumWidget isActionRequired={data?.IsActionRequired} />
        <VelocityWidget velocity={data?.Velocity} />
        <WidgetVisualizationPlaceholderCard title={"Lorem"} />
        <WidgetVisualizationPlaceholderCard title={"Ipsum"} />
        <AltitudeWidget altitude={data?.Altitude} />
        <WidgetVisualizationPlaceholderCard title={"Dolor"} />
        <WidgetVisualizationPlaceholderCard title={"Sit Amet"} />
        <WidgetVisualizationPlaceholderCard title={"Consectetur"} />
      </MainGrid>
    </MainContainer>
  );
};

export default Home;
