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
    <Coluna className="bg-fundo pl-36">
      <Linha className="pt-8">
        <text className="mt-4 text-2xl font-black">Cadastro de aluno</text>
        <CloseIcon />
      </Linha>

      <Linha>
        <PolicitalBallot />
        <h2 className="ml-4 text-lg font-semibold">Dados Pessoais</h2>
        <ArrowDown />
        <MapsBook />
        <StatusFileCheck />
      </Linha>

      <div>
        <input id="ManterAtivo" type="checkbox" />
        <label htmlFor="ManterAtivo" className="ml-2">
          Ativo
        </label>
      </div>
      <text className="text-xs text-Cor6F7482">Nome Completo</text>
      <TextInput placeholder="Text" className="" />
      <text className="text-xs text-Cor6F7482">Número de Inscrição</text>
      <TextInput placeholder="Text" className="" />
      <Linha>
        <Coluna>
          <text className="text-xs text-Cor6F7482">Data de Nascimento</text>
          <TextInput placeholder="Text" className="" />
        </Coluna>
        <Coluna>
          <text className="text-xs text-Cor6F7482">Idade Atual</text>
          <TextInput placeholder="Text" className="" />
        </Coluna>
      </Linha>
      <text className="text-xs text-Cor6F7482">Endereço Text</text>
      <TextInput placeholder="Text" className="" />
      <Linha>
        <Coluna>
          <text className="text-xs text-Cor6F7482">Telefone </text>
          <TextInput placeholder="Text" className="" />
        </Coluna>
        <Coluna>
          <text className="text-xs text-Cor6F7482">Telefone de recado </text>
          <TextInput placeholder="Text" className="" />
        </Coluna>
      </Linha>
      <text className="text-xs text-Cor6F7482">E-mail</text>
      <TextInput placeholder="Text" className="" />
      <text className="text-xs text-Cor6F7482">Nome dos responsáveis</text>
      <TextInput placeholder="Text" className="" />
      <text>Upload Img</text>
      <text>aparecer quando fizer Upload</text>
      <Linha>
        <MapsBook />
        <text>Dados Demográficos</text>
        <ArrowRight />
      </Linha>
      <Linha>
        <StatusFileCheck />
        <text>Dados Socieconômicos</text>
        <ArrowRight />
      </Linha>
    </Coluna>
  );
}
