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
import { RefreshButton } from "@/components/RefreshButton";
import { ErrorMessage } from "@/components/ErrorMessage";

const Home = () => {
  const { data, isLoading, error, refresh } = useVehicleState();

  /**
   * Renders loading state.
   */
  if (isLoading) {
    return (
      <MainContainer>
        <DottedBg />
        <ErrorMessage>Loading...</ErrorMessage>
      </MainContainer>
    );
  }

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
      <Status>{data?.statusMessage ?? "-"}</Status>
      <MainGrid>
        <WidgetCard
          title="Velocity"
          value={data?.velocity ?? 0}
          unit="m/s"
          visualization={<VelocityScale value={data?.velocity} />}
        />
        <WidgetCard
          title="Temperature"
          value={data?.temperature ?? 0}
          unit="°C"
          visualization={<TemperatureScale value={data?.temperature} />}
        />
        <WidgetCard
          title="Altitude"
          value={data?.altitude ?? 0}
          unit="m"
          visualization={<AltitudeScale value={data?.altitude} />}
        />
      </MainGrid>

      <RefreshButton onClick={refresh}>Refresh</RefreshButton>
    </MainContainer>
  );
};

export default Home;
