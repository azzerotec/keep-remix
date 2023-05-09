import type { V2_MetaFunction } from "@remix-run/node";
import type { PropsWithChildren } from "react";
import { FooterContent } from "~/componets/Footer";
import { TestDemo } from "~/componets/TestDemo";
import { Header } from "~/componets/header";
import { Introduction } from "~/componets/introduction";
import { MainContent } from "~/componets/maincontent";

export const meta: V2_MetaFunction = () => [{ title: "Keep" }];

export const Linha = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <div className={`flex flex-row ${className}`}>{children}</div>
);

export const Coluna = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <div className={`flex flex-col ${className}`}>{children}</div>
);

export const Container = ({ children }: PropsWithChildren) => (
  <div className="px-36">{children}</div>
);

export const TitleContainer = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <h2 className={`mb-4 text-3xl font-bold tracking-tight text-bg ${className}`}>
    {children}
  </h2>
);

export const CaixaBranca = ({
  children,
  className = "",
}: PropsWithChildren<{ className?: string }>) => (
  <Coluna
    className={`mb-56 h-64 w-72 justify-center rounded-md bg-white p-7 ${className}`}
  >
    {children}
  </Coluna>
);

export const Text = ({ children }: PropsWithChildren) => (
  <p className="text-base">{children}</p>
);

export const SubTitle = ({
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
      <Header />
      <Introduction />
      <Linha className="items-center justify-center bg-bg py-20 text-2xl font-bold">
        <h2 className="my-2 justify-center align-middle text-white ">
          Quer saber mais sobre a nossa proposta? <br />
          Entre em contato que contamos tudo pra você {";)"}
        </h2>
        <a className=" ml-12 box-border bg-textdemo px-4 py-3 text-base tracking-tight text-bg ">
          Quero saber mais!
        </a>
      </Linha>
      <MainContent />
      <TestDemo />
      <FooterContent />
    </main>
  );
}
