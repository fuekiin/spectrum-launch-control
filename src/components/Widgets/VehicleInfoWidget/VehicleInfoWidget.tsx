import { styled } from "styled-components";
import { WidgetCard, WidgetValue } from "../WidgetCard";
import Text from "@/components/Text";
import Image from "next/image";
import { vehicleConfig } from "@/config/vehicle";

interface Props {
  isActionRequired?: boolean;
}

const Container = styled.div`
  padding: ${({ theme }) => theme.sizes.cardPadding};
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.sizes.gap};
  height: 100%;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.gap};
`;

const InfoRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const VehicleImage = styled(Image)`
  align-self: flex-end;
  justify-self: end;
  margin: 8px;
`;

const VehicleDetailText = styled(Text)`
  color: ${({ theme }) => theme.colors.brandPrimary};
`;

const InfoRow = ({ title, value }: { title: string; value: string }) => {
  return (
    <InfoRowContainer>
      <Text priority="tertiary">{title}:</Text>
      <VehicleDetailText priority="secondary">{value}</VehicleDetailText>
    </InfoRowContainer>
  );
};

const VehicleInfoWidget = ({ isActionRequired }: Props) => {
  return (
    <WidgetCard title="Vehicle" inErrorState={isActionRequired}>
      <Container>
        <InfoContainer>
          <WidgetValue>{vehicleConfig.vehicle.name}</WidgetValue>
          <DetailContainer>
            <InfoRow title="Payload" value={vehicleConfig.vehicle.payload} />
            <InfoRow title="Version" value={vehicleConfig.vehicle.version} />
            <InfoRow title="Engine" value={vehicleConfig.vehicle.engine} />
          </DetailContainer>
        </InfoContainer>
        <VehicleImage
          src="/img/spectrum_001.png"
          alt="launch vehicle"
          width="66"
          height="166"
        />
      </Container>
    </WidgetCard>
  );
};

export default VehicleInfoWidget;
