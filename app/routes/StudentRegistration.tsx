import { CloseIcon } from "~/componets/Image/Icons/closeicon";
import { Coluna, Linha } from "./_index";

export default function RegistrationStudant() {
  return (
    <Coluna className="pl-36">
      <Linha className="pt-8">
        <text className="mt-4 text-2xl font-black">Cadastro de aluno</text>
        <CloseIcon />
      </Linha>
      <Linha>
        <text>Icon Livrinho</text>
        <text>Dados Pessoais</text>
        <text>Setinha para Baixo</text>
        <text>Icon de Outro Livrinho</text>
        <text>Icon de uma folha ok</text>
      </Linha>
      <text>Input de Ativo</text>
      <text>Input de nome completo</text>
      <text>Número de Inscrição</text>
      <Linha>
        <text>Data de Nascimento</text>
        <text>Idade Atual</text>
      </Linha>
      <text>Endereço Text</text>
      <Linha>
        <text>Telefone </text>
        <text>Telefone de recado </text>
      </Linha>
      <text>email</text>
      <text>Nome dos responsáveis</text>
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
