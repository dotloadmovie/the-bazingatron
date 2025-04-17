import { BlockStyled } from "./block.styled";
import { Animate } from "react-simple-animate";

type BlockProps = {
  children: React.ReactNode;
};

const Block = ({ children }: BlockProps) => {
  return (
    <Animate
      play={true}
      start={{ transform: "translateY(1000px)" }}
      end={{ transform: "translateY(0px)" }}
      duration={0.8}
      easeType="linear(0, 0.453 23.2%, 1 44.7%, 0.863 52.2%, 0.831 55.6%, 0.821 58.9%, 0.828 61.8%, 0.852 64.9%, 0.999 77.4%, 0.976 81.1%, 0.969 84.7%, 0.996 95.3%, 1)"
    >
      <BlockStyled>{children}</BlockStyled>
    </Animate>
  );
};

export default Block;
