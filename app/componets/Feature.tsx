import { CaixaBranca, Text, TitleContainer } from "~/routes/_index";
type Props = { title: string; text: string };

export const Feature = ({ title, text }: Props) => {
  return (
    <CaixaBranca>
      <TitleContainer>{title}</TitleContainer>
      <Text>{text}</Text>
    </CaixaBranca>
  );
};
