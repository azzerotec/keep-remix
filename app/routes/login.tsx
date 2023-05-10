import { Logo } from "~/componets/Image/logo";
import { TextInput } from "~/componets/TestDemo";
import { Coluna, Container } from "~/routes/_index";
import { Linha } from "~/routes/_index";
import imageViolao from "~/componets/Image/IMGViolao.png";
import manchacolorida from "~/componets/Image/ManchaColorida.png";

export default function Login() {
  return (
    <main className="bg-fundo font-sans">
      <Linha>
        <Coluna className="ml-24 w-1/2 ">
          <Linha className="mb-16 mt-36">
            <Logo />
          </Linha>
          <Coluna className="mb-12">
            <h2 className="text-xl font-bold">Log in</h2>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sagittis tincidunt varius. Curabitur pharetra justo non tellus
              maximus accumsan.
            </p>
          </Coluna>
          <TextInput
            placeholder="E-mail"
            className="-mx-2 flex w-full flex-row"
          />
          <TextInput
            placeholder="Senha"
            className="-mx-2 flex w-full flex-row"
          />
          <Linha className="text-xs font-bold">
            <input id="manterlogado" type="checkbox" />
            <Linha className="justify-between">
              <label htmlFor="manterlogado" className="ml-2">
                Manter logado
              </label>
              <a className="underline">Esqueci a Senha</a>
            </Linha>
          </Linha>
          <Container>
            <Coluna>
              <button className=" mb-5 mt-14 rounded-md bg-loginbutton px-6 py-4 text-white">
                Acessar
              </button>
            </Coluna>
          </Container>
          <Coluna className="items-center">
            <text className="mb-44 text-xs font-medium ">
              Ainda não tem uma assinatura? Veja detalhes
            </text>
          </Coluna>
        </Coluna>
        <Coluna className="bg-contain pl-7">
          <Linha>
            <img src={manchacolorida} alt="Ondas Coloridas" />
            <img src={imageViolao} alt="Imagem De Violão" />
          </Linha>
        </Coluna>
      </Linha>
    </main>
  );
}
