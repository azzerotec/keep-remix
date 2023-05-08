import type { V2_MetaFunction } from "@remix-run/node";
import type { PropsWithChildren } from "react";
import { Logo } from "~/componets/logo";
import bunner from "~/componets/bunner.png";
import sitebunner from "~/componets/Group665.png";
import bunnercriartema from "~/componets/Group666.png";
import bunneracompanhamento from "~/componets/Group667.png";
import { LogoFooter } from "~/componets/footer";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

const Linha = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <div className={`flex flex-row ${className}`}>{children}</div>
);

const Coluna = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <div className={`flex flex-col ${className}`}>{children}</div>
);

const Container = ({ children }: PropsWithChildren) => (
  <div className="px-36">{children}</div>
);

const TitleContainer = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <h2 className={`mb-4 text-3xl font-bold tracking-tight text-bg ${className}`}>
    {children}
  </h2>
);

const CaixaBranca = ({ children }: PropsWithChildren) => (
  <Coluna className="mb-56 h-64 w-72 justify-center rounded-md bg-white p-7 ">
    {children}
  </Coluna>
);

const Text = ({ children }: PropsWithChildren) => (
  <p className="text-base">{children}</p>
);

const SubTitle = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <h2 className={`mb-8 text-4xl font-bold tracking-tighter ${className}`}>
    {children}
  </h2>
);

export default function Index() {
  return (
    <main className="bg-fundo font-primary">
      <Coluna>
        <Linha className=" w-full justify-between p-8">
          <Logo />
          <Linha className="w-1/2 items-center justify-between">
            <a>Propósito</a>
            <a>Benefícios</a>
            <a>Preços</a>
            <a>Contato</a>
            <button className="rounded-md bg-bg px-11 py-2 text-textdemo">
              Demo
            </button>
          </Linha>
        </Linha>
      </Coluna>
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
      <Linha className="items-center justify-center bg-bg py-20 text-2xl font-bold">
        <h2 className="my-2 justify-center align-middle text-white ">
          Quer saber mais sobre a nossa proposta? <br />
          Entre em contato que contamos tudo pra você {";)"}
        </h2>
        <a className=" ml-12 box-border bg-textdemo px-4 py-3 text-base tracking-tight text-bg ">
          Quero saber mais!
        </a>
      </Linha>
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
              desde cobrança simbólica dos associados, recursos governamentais
              ou doações. De olho nesse problema a plataforma ”nome do produto”
              vem com esse recurso bem estruturado e fácil de usar.
            </Text>
          </Coluna>
          <img src={bunneracompanhamento} alt="bunner acompanhamento"></img>
        </Linha>
      </Container>
      <Coluna className="">
        <SubTitle className="flex flex-row items-start justify-center">
          Testar a demo!
        </SubTitle>
        <p className="flex flex-row justify-center text-xl">
          <strong>Gostou? </strong> Faça um teste da plataforma e verifique em
          contexto real o que ela pode fazer por você.
        </p>
      </Coluna>
      <Coluna className="flex flex-row align-middle">
        <CaixaBranca>
          <h1>Sign up for a free account</h1>
          <Linha>
            <input type="text" placeholder="Frist Name" />
            <input type="text" placeholder="Last Name" />
          </Linha>
          <Coluna>
            <input type="text" placeholder="Email Adress" />
          </Coluna>
          <Coluna>
            <input type="text" placeholder="Create Password" />
          </Coluna>
          <Coluna>
            <button className="rounded-md bg-textdemo px-8 py-2 text-sm font-bold text-bg">
              Register
            </button>
          </Coluna>
        </CaixaBranca>
      </Coluna>
      <Coluna>
        <Linha className="w-full justify-between bg-bg pb-28 pl-40 pt-48 tracking-tight text-white">
          <LogoFooter />
          <Linha className="flex flex-row justify-around font-bold">
            <a>Mobile app</a>
            <a>Community</a>
            <a>Company</a>
          </Linha>
          <p className="flex flex-row pr-14 font-light text-white">
            © Photo, Inc. 2019. We love our users!
          </p>
        </Linha>
      </Coluna>
    </main>
  );
}
