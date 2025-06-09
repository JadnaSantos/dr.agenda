import { useStatsCardModel } from "./stats-card.model";
import type { StatsCardsProps } from "./stats-cards.types";
import StatsCardsView from "./stats-cards.view";
const StatsCardsComponent = (props: StatsCardsProps) => {
  const methods = useStatsCardModel(props);

  return <StatsCardsView {...methods} />;
};

export default StatsCardsComponent;
