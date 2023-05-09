import { CaixaBranca, Text, TitleContainer } from "~/routes/_index";

type Props = { title: string; text: string };

export const Feature = ({ title, text }: Props) => {
  return (
    <CaixaBranca className="h-64 w-72">
      <TitleContainer>{title}</TitleContainer>
      <Text>{text}</Text>
    </CaixaBranca>
  );
};
