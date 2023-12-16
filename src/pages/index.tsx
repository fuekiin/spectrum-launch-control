/**
 * Home Component
 *
 * Displays the main dashboard for vehicle state monitoring.
 * It uses the `useVehicleState` hook to fetch and display data such as velocity, temperature, and altitude.
 * In case of loading or error states, appropriate messages are displayed.
 */
import { WidgetCard } from "@/components/WidgetCard";
import { MainGrid } from "@/components/MainGrid";
import VelocityScale from "@/components/VelocityScale";
import { useVehicleState } from "@/hooks/useVehicleState";
import { MainContainer } from "@/components/MainContainer";
import { Status } from "@/components/Status";
import { DottedBg } from "@/components/DottedBg";
import TemperatureScale from "@/components/TemperatureScale";
import AltitudeScale from "@/components/AltitudeScale";
import { ErrorMessage } from "@/components/ErrorMessage";

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
      <DottedBg />
      <Status>{data?.StatusMessage ?? "-"}</Status>
      <MainGrid>
        <WidgetCard
          title="Velocity"
          value={data?.Velocity}
          unit="m/s"
          visualization={<VelocityScale value={data?.Velocity} />}
        />
        <WidgetCard
          title="Temperature"
          value={data?.Temperature}
          unit="°C"
          visualization={<TemperatureScale value={data?.Temperature} />}
        />
        <WidgetCard
          title="Altitude"
          value={data?.Altitude}
          unit="m"
          visualization={<AltitudeScale value={data?.Altitude} />}
        />
      </MainGrid>
    </MainContainer>
  );
};

export default Home;
