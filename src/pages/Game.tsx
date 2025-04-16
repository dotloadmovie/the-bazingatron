import { useAtom } from "jotai";
import { username as usernameAtom } from "../atoms/user";

const Game = () => {
  const [username, setUsername] = useAtom(usernameAtom);

  return (
    <>
      {username === "" ? (
        <div
          onClick={() => {
            setUsername("Dave");
          }}
        >
          Set username to Dave
        </div>
      ) : (
        <div>Hi {username}, welcome to the Game</div>
      )}
    </>
  );
};

export default Game;
