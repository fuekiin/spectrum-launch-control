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
        <ActOnSpectrumWidget isActionRequired={data?.IsActionRequired} />
        <VelocityWidget velocity={data?.Velocity} />
        <TemperatureWidget temperature={data?.Temperature} />
        <AltitudeWidget altitude={data?.Altitude} />
      </MainGrid>
    </MainContainer>
    // </>
  );
};

export default Home;
