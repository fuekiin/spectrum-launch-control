// "use client";
import { WidgetCard } from "@/components/WidgetCard";
import { MainGrid } from "@/components/MainGrid";
import VelocityScale from "@/components/VelocityScale";
import { useVehicleState } from "@/hooks/useVehicleState";
import { MainContainer } from "@/components/MainContainer";
import { Status } from "@/components/Status";
import { useEffect, useState } from "react";
import { DottedBg } from "@/components/DottedBg";
import TemperatureScale from "@/components/TemperatureScale";
import AltitudeScale from "@/components/AltitudeScale";
import { RefreshButton } from "@/components/RefreshButton";

const Home = () => {
  const { data, isLoading, error, refresh } = useVehicleState();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred {JSON.stringify(data)}</div>;

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
