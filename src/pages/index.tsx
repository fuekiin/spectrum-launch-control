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
import { AnimatedDottedBg, DottedBg } from "@/components/DottedBg";
import TemperatureScale from "@/components/TemperatureScale";
import AltitudeScale from "@/components/AltitudeScale";
import { ErrorMessage } from "@/components/ErrorMessage";
import { useEffect, useState } from "react";
import { BottomSheetContainer } from "@/components/BottomSheetContainer";
import { AbortFlightButton } from "@/components/AbortFlightButton";
import useFetchData from "@/hooks/useFetchData";

const Home = () => {
  const { data, error } = useVehicleState();
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

  // Perform ActOnSpectrum User interaction
  // Note: Currently the Backend only accepts GET, which should be fixed in the future
  const { loading: ActOnSpecLoading, fetchData: ActOnSpecFetch } =
    useFetchData<undefined>("ActOnSpectrum");

  // BottomSheet animation variants
  const bottomSheetVariants = {
    open: { y: 0 },
    closed: { y: "100%" },
  };

  // Conditionally show BottomSheet
  useEffect(() => {
    setBottomSheetVisible(!!data?.IsActionRequired);
  }, [data?.IsActionRequired, isBottomSheetVisible]);

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
    <>
      <BottomSheetContainer
        initial="closed"
        animate={isBottomSheetVisible ? "open" : "closed"}
        variants={bottomSheetVariants}
        transition={{ duration: 0.1 }}
      >
        <AbortFlightButton disabled={ActOnSpecLoading} onClick={ActOnSpecFetch}>
          ABORT FLIGHT
        </AbortFlightButton>
      </BottomSheetContainer>
      <MainContainer>
        <AnimatedDottedBg inErrorState={data?.IsActionRequired} />
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
    </>
  );
};

export default Home;
