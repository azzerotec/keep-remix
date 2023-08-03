import { CloseIcon } from "~/componets/Image/Icons/closeicon";
import { Coluna, Linha } from "./_index";
import { PolicitalBallot } from "~/componets/Image/Icons/political-ballot";
import { ArrowDown } from "~/componets/Image/Icons/keyboard-arrow-down";
import { MapsBook } from "~/componets/Image/Icons/maps-book";
import { StatusFileCheck } from "~/componets/Image/Icons/status-file-check";
import { TextInput } from "~/componets/TestDemo";
import { ArrowRight } from "~/componets/Image/Icons/keyboard-arrow-right";
import { UploadIcon } from "~/componets/Image/Icons/uploadIcon";
import { CloseIconCircle } from "~/componets/Image/Icons/closeiconCirle";
import { useState } from "react";

export default function RegistrationTeacher() {
  const [openSection, setOpenSection] = useState("1");

  return (
    <Coluna className="bg-fundo pl-36 pr-10">
      <Linha className="pt-8">
        <text className="mt-4 text-2xl font-black">Cadastro de Professor</text>
        <div className="pl-56">
          <CloseIcon />
        </div>
      </Linha>

      <Linha
        className="mt-10"
        onClick={() => {
          setOpenSection("1");
        }}
      >
        <PolicitalBallot />
        <h2 className="ml-4 text-lg font-semibold">Dados Pessoais</h2>
        <div className="ml-3">
          {openSection === "1" ? <ArrowDown /> : <ArrowRight />}
        </div>
      </Linha>

      {openSection === "1" ? (
        <>
          <div className="mt-10">
            <input id="ManterAtivo" type="checkbox" />
            <label htmlFor="ManterAtivo" className="ml-2 text-base font-medium">
              Ativo
            </label>
          </div>

          <text className="text-Cor6F7482 mt-7 text-xs">Nome Completo</text>
          <TextInput placeholder="Text" />
          <Linha>
            <Coluna>
              <text className="text-Cor6F7482 text-xs">Data de Nascimento</text>
              <TextInput placeholder="Text" />
            </Coluna>

            <Coluna className="ml-4">
              <text className="text-Cor6F7482 text-xs">Idade Atual</text>
              <TextInput placeholder="Text" />
            </Coluna>
          </Linha>

          <text className="text-Cor6F7482 text-xs">Endereço</text>

          <TextInput placeholder="Text" />

          <Linha>
            <Coluna>
              <text className="text-Cor6F7482 text-xs">Telefone </text>

              <TextInput placeholder="Text" />
            </Coluna>

            <Coluna className="ml-5">
              <text className="text-Cor6F7482 text-xs">
                Telefone de recado{" "}
              </text>

              <TextInput placeholder="Text" />
            </Coluna>
          </Linha>

          <text className="text-Cor6F7482 text-xs">E-mail</text>
          <TextInput placeholder="Text" />

          <Linha>
            <Coluna>
              <text className="text-Cor6F7482 text-xs">Tipo sanguíneo</text>
              <TextInput placeholder="Text" />
            </Coluna>

            <Coluna className="ml-4">
              <text className="text-Cor6F7482 text-xs">Estado civil</text>
              <TextInput placeholder="Text" />
            </Coluna>
          </Linha>

          <Linha>
            <Coluna>
              <text className="text-Cor6F7482 text-xs">Escolaridade</text>
              <TextInput placeholder="Text" />
            </Coluna>

            <Coluna className="ml-4">
              <text className="text-Cor6F7482 text-xs">
                Quantidade de filhos
              </text>
              <TextInput placeholder="Text" />
            </Coluna>
          </Linha>

          <text className="text-Cor6F7482 text-xs">Área de formação</text>
          <TextInput placeholder="Text" />

          <text className="text-Cor6F7482 text-xs">Curriculum late</text>
          <TextInput placeholder="Text" />

          <text className="text-Cor6F7482 text-xs">
            Instrumentos que o professor ensina:
          </text>
          <TextInput placeholder="Text" />

          <Linha className="mb-8 mt-3  text-white">
            <Linha className=" mr-3 h-4  w-16  items-center justify-between rounded  bg-azulClaro">
              <text className="ml-2">R.pdf</text>
              <div className="mr-2">
                <CloseIconCircle />
              </div>
            </Linha>
          </Linha>

          <Linha className="border-spacing-3 rounded-md border-2 border-dashed border-azulClaro">
            <div className="m-1 flex h-14 w-14 items-center justify-center rounded-md bg-azulClaro">
              <UploadIcon />
            </div>
            <Coluna className="ml-4 mt-3">
              <text className="text-base">Upload de documentos</text>
              <text className="text-CorA7A7A7 text-xs ">Exemplo: RG.pdf</text>
            </Coluna>
          </Linha>
          <Linha className="mb-8 mt-3  text-white">
            <Linha className=" mr-3 h-7  w-24  items-center justify-between rounded  bg-azulClaro">
              <text className="ml-2">RG.pdf</text>
              <div className="mr-2">
                <CloseIconCircle />
              </div>
            </Linha>

            <Linha className=" mr-3 h-7  w-24  items-center justify-between rounded bg-azulClaro">
              <text className="ml-2">RG.pdf</text>
              <div className="mr-2">
                <CloseIconCircle />
              </div>
            </Linha>

            <Linha className=" mr-3 h-7  w-24  items-center justify-between rounded bg-azulClaro">
              <text className="ml-2">RG.pdf</text>
              <div className="mr-2">
                <CloseIconCircle />
              </div>
            </Linha>
          </Linha>
        </>
      ) : null}

      <Linha
        className="border-y py-6"
        onClick={() => {
          setOpenSection("2");
        }}
      >
        <MapsBook />
        <text className="ml-6 text-lg font-semibold ">Dados Demográficos</text>
        <div className="ml-3">
          {openSection === "2" ? <ArrowDown /> : <ArrowRight />}
        </div>
      </Linha>

      <Linha
        className="flex border-y py-6 align-middle"
        onClick={() => {
          setOpenSection("3");
        }}
      >
        <StatusFileCheck />
        <text className="ml-6 text-lg font-semibold">Dados Socieconômicos</text>
        <div className="ml-3">
          {openSection === "3" ? <ArrowDown /> : <ArrowRight />}
        </div>
      </Linha>
    </Coluna>
  );
}
