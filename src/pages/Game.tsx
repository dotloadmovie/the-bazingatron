import { useAtom } from "jotai";
import { username as usernameAtom } from "../atoms/user";

const Game = () => {
  const [username, setUsername] = useAtom(usernameAtom);

  return (
    <div
      onClick={() => {
        setUsername("Dave");
      }}
    >
      Game, {username}
    </div>
  );
};

export default Game;
