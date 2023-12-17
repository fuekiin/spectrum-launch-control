import Button from "@/components/Button";
import { WidgetInputCard } from "../WidgetCard";
import useFetchData from "@/hooks/useFetchData";
import Text from "@/components/Text";

/**
 * Component representing a widget to act on the Spectrum launch vehicle.
 * Provides a user interface for interacting in case of unexpected behavior.
 *
 * @param {Object} props - The props for the component.
 * @param {boolean} [props.isActionRequired] - A flag to indicate if an action is required, affecting the widget's state and behavior.
 * @returns A widget that displays a message and a button to perform an action on the Spectrum vehicle.
 *          The button is enabled only when an action is required and not currently loading.
 */
interface Props {
  isActionRequired?: boolean;
}

const ActOnSpectrumWidget = ({ isActionRequired }: Props) => {
  // Perform ActOnSpectrum User interaction
  // Note: Currently the Backend only accepts GET, which should be fixed in the future
  const { loading: ActOnSpecLoading, fetchData: ActOnSpecFetch } =
    useFetchData<undefined>("ActOnSpectrum");

  return (
    <WidgetInputCard title="Act on Spectrum" inErrorState={isActionRequired}>
      <Text priority="secondary">
        In the case of unexpected behaviour act immediately.
      </Text>
      <Button
        variant="danger"
        disabled={ActOnSpecLoading || !isActionRequired}
        onClick={ActOnSpecFetch}
      >
        ACT NOW
      </Button>
    </WidgetInputCard>
  );
};

export default ActOnSpectrumWidget;
