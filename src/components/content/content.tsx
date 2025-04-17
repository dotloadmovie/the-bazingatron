import { ContentStyled } from "./content.styled";

type ContentProps = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return <ContentStyled>{children}</ContentStyled>;
};

export default Content;
