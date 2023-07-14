import { CloseIcon } from "~/componets/Image/Icons/closeicon";
import { Coluna, Linha } from "./_index";
import { PolicitalBallot } from "~/componets/Image/Icons/political-ballot";
import { ArrowRight } from "~/componets/Image/Icons/keyboard-arrow-right";
import { MapsBook } from "~/componets/Image/Icons/maps-book";
import { StatusFileCheck } from "~/componets/Image/Icons/status-file-check";
import { TextInput } from "~/componets/TestDemo";

export default function RegistrationStudant() {
  return (
    <Coluna className="pl-36">
      <Linha className="pt-8">
        <text className="mt-4 text-2xl font-black">Cadastro de aluno</text>
        <CloseIcon />
      </Linha>
      <Linha>
        <PolicitalBallot />
        <text>Dados Pessoais</text>
        <ArrowRight />
        <MapsBook />
        <StatusFileCheck />
      </Linha>
      <div>
        <input id="ManterAtivo" type="checkbox" />
        <label htmlFor="ManterAtivo" className="ml-2">
          Ativo
        </label>
      </div>
      <text>Nome Completo</text>
      <TextInput placeholder="Text" className="" />
      <text>Número de Inscrição</text>
      <TextInput placeholder="Text" className="" />
      <Linha>
        <Linha>
          <text>Data de Nascimento</text>
          <TextInput placeholder="Text" className="" />
        </Linha>
        <Linha>
          <text>Idade Atual</text>
          <TextInput placeholder="Text" className="" />
        </Linha>
      </Linha>
      <text>Endereço Text</text>
      <TextInput placeholder="Text" className="" />
      <Linha>
        <Linha>
          <text>Telefone </text>
          <TextInput placeholder="Text" className="" />
        </Linha>
        <Linha>
          <text>Telefone de recado </text>
          <TextInput placeholder="Text" className="" />
        </Linha>
      </Linha>
      <text>E-mail</text>
      <TextInput placeholder="Text" className="" />
      <text>Nome dos responsáveis</text>
      <TextInput placeholder="Text" className="" />
      <text>Upload Img</text>
      <text>aparecer quando fizer Upload</text>
      <Linha>
        <text>Livrinho</text>
        <text>Dados Demográficos</text>
        <text>Setinha</text>
      </Linha>
      <text>icon de uma folinha ok</text>
      <text>Dados Socieconômicos</text>
      <text>Setinha</text>
    </Coluna>
  );
}
