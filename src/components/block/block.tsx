import { BlockStyled } from "./block.styled";

type BlockProps = {
  children: React.ReactNode;
};

const Block = ({ children }: BlockProps) => {
  return <BlockStyled>{children}</BlockStyled>;
};

export default Block;
