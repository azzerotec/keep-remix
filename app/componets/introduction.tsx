import {
  CaixaBranca,
  Coluna,
  Linha,
  Container,
  TitleContainer,
  Text,
} from "~/routes/_index";
import bunner from "~/componets/Image/bunner.png";

export const Introduction = () => {
  return (
    <>
      <Container>
        <Linha>
          <Coluna className="items-start">
            <h1 className="mt-40 text-6xl font-bold">
              Organize o dia a dia de sua associação
            </h1>
            <p className=" mt-9 text-xl">
              Otimize e organize a vida dos gestores de associações, com baixo
              custo e flexibilidade para cada realidade.
            </p>
            <button className=" mt-32 rounded-md bg-bg px-6 py-4 text-white ">
              Quero Conferir
            </button>
          </Coluna>
          <Coluna>
            <img src={bunner} alt="bunner notebook"></img>
          </Coluna>
        </Linha>
      </Container>
      <Coluna>
        <h2 className="mb-8 px-32 text-5xl font-bold tracking-tighter">
          Benefícios do Associa
        </h2>
        <Linha className="justify-between px-32">
          <CaixaBranca>
            <TitleContainer>Fácil</TitleContainer>
            <Text>
              Cadastro simplificado e fácil visualização das informações da sua
              instituição
            </Text>
          </CaixaBranca>
          <CaixaBranca>
            <TitleContainer>Dados</TitleContainer>
            <Text>
              Cadastrar os serviços oferecidos aos associados e fácil manutenção
            </Text>
          </CaixaBranca>
          <CaixaBranca>
            <TitleContainer>Transparência</TitleContainer>
            <Text>
              Tenha acesso rápido as informações dos recursos que estão sendo
              utilizados na associação
            </Text>
          </CaixaBranca>
          <CaixaBranca>
            <TitleContainer>Relatórios</TitleContainer>
            <Text>
              Relatórios de prestação de contas com dados confiáveis, chega de
              papel. Digitalize tudo!
            </Text>
          </CaixaBranca>
        </Linha>
      </Coluna>
    </>
  );
};
