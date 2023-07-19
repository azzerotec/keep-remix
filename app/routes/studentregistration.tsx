import { CloseIcon } from "~/componets/Image/Icons/closeicon";
import { Coluna, Linha } from "./_index";
import { PolicitalBallot } from "~/componets/Image/Icons/political-ballot";
import { ArrowDown } from "~/componets/Image/Icons/keyboard-arrow-down";
import { MapsBook } from "~/componets/Image/Icons/maps-book";
import { StatusFileCheck } from "~/componets/Image/Icons/status-file-check";
import { TextInput } from "~/componets/TestDemo";
import { ArrowRight } from "~/componets/Image/Icons/keyboard-arrow-right";

export default function RegistrationStudant() {
  return (
    <Coluna className="bg-fundo pl-36 pr-10">
      <Linha className="pt-8">
        <text className="mt-4 text-2xl font-black">Cadastro de aluno</text>
        <div className="pl-56">
          <CloseIcon />
        </div>
      </Linha>
      <Linha className="mt-10">
        <PolicitalBallot />
        <h2 className="ml-4 text-lg font-semibold">Dados Pessoais</h2>
        <div className="ml-3">
          <ArrowDown />
        </div>
        <div className="ml-44">
          <MapsBook />
        </div>
        <div className="ml-5">
          <StatusFileCheck />
        </div>
      </Linha>

      <div className="mt-10">
        <input id="ManterAtivo" type="checkbox" />
        <label htmlFor="ManterAtivo" className="ml-2 text-base font-medium">
          Ativo
        </label>
      </div>

      <text className="mt-7 text-xs text-Cor6F7482">Nome Completo</text>
      <TextInput placeholder="Text" />

      <text className="text-xs text-Cor6F7482">Número de Inscrição</text>

      <TextInput placeholder="Text" />

      <Linha>
        <Coluna>
          <text className="text-xs text-Cor6F7482">Data de Nascimento</text>
          <TextInput placeholder="Text" />
        </Coluna>

        <Coluna className="ml-4">
          <text className="text-xs text-Cor6F7482">Idade Atual</text>
          <TextInput placeholder="Text" />
        </Coluna>
      </Linha>

      <text className="text-xs text-Cor6F7482">Endereço Text</text>

      <TextInput placeholder="Text" />

      <Linha>
        <Coluna>
          <text className="text-xs text-Cor6F7482">Telefone </text>

          <TextInput placeholder="Text" />
        </Coluna>

        <Coluna className="ml-5">
          <text className="text-xs text-Cor6F7482">Telefone de recado </text>

          <TextInput placeholder="Text" />
        </Coluna>
      </Linha>

      <text className="text-xs text-Cor6F7482">E-mail</text>

      <TextInput placeholder="Text" />

      <text className="text-xs text-Cor6F7482">Nome dos responsáveis</text>

      <TextInput placeholder="Text" />

      <text>Upload Img</text>

      <text>aparecer quando fizer Upload</text>

      <Linha className="py-6">
        <MapsBook />

        <text className="ml-6 text-lg font-semibold ">Dados Demográficos</text>
        <div className="ml-3">
          <ArrowRight />
        </div>
      </Linha>

      <Linha className="flex py-6 align-middle">
        <StatusFileCheck />
        <text className="ml-6 text-lg font-semibold">Dados Socieconômicos</text>
        <div className="ml-3">
          <ArrowRight />
        </div>
      </Linha>
    </Coluna>
  );
}
