import { Coluna, Container, Linha, SubTitle, Text } from "~/routes/_index";
import sitebunner from "~/componets/Image/Group665.png";
import bunnercriartema from "~/componets/Image/Group666.png";
import bunneracompanhamento from "~/componets/Image/Group667.png";

export const MainContent = () => {
  return (
    <Container>
      <Linha>
        <Coluna>
          <SubTitle className="mt-44">
            Gestão de recursos e equipamentos da associação
          </SubTitle>

          <Text>
            Tem o objetivo de controlar o que está sendo usado, em conserto ou
            em espera, ou seja, você consegue gerir todos os materiais
            utilizados na associação.
          </Text>
        </Coluna>
        <img src={sitebunner} alt="bunner site"></img>
      </Linha>
      <Linha>
        <img src={bunnercriartema} alt="bunner tema"></img>
        <Coluna>
          <SubTitle>Otimização dos serviços e cursos oferecidos</SubTitle>
          <Text>
            Você pode organizar e agilizar o processo de cadastro de cursos,
            serviços e produtos que são oferecidos aos associados. Além disso,
            também possibilita o acompanhamento da utilização dos materiais.
          </Text>
        </Coluna>
      </Linha>
      <Linha>
        <Coluna>
          <SubTitle>Gestão financeira</SubTitle>
          <Text>
            Geralmente, as associações possuem diferentes fontes de recursos,
            desde cobrança simbólica dos associados, recursos governamentais ou
            doações. De olho nesse problema a plataforma ”nome do produto” vem
            com esse recurso bem estruturado e fácil de usar.
          </Text>
        </Coluna>
        <img src={bunneracompanhamento} alt="bunner acompanhamento"></img>
      </Linha>
    </Container>
  );
};
