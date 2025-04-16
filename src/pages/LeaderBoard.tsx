import { useAtom } from "jotai";
import { results as resultsAtom } from "../atoms/results";

const LeaderBoard = () => {
  const [results, setResults] = useAtom(resultsAtom);

  return (
    <div
      onClick={() => {
        const currentResults = JSON.parse(results);

        currentResults.player1 += 1;

        setResults(JSON.stringify(currentResults));
      }}
    >
      LeaderBoard {results}
    </div>
  );
};

export default LeaderBoard;
