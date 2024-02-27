import * as AbilityScore from "../api/ability-score-api";

const AbilityScoreInformationPage = () => {
  return <p>{AbilityScore.intelligence.desc}</p>;
};

export default AbilityScoreInformationPage;
