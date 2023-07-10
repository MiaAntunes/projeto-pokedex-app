import banner from "../../assets/others/banner.jpg";
import { ArticleMain, Banner, ButtonAllPokemons, ContainerMain, H1, H2 } from "./HomePageStyle";

export const HomePage = () => {
  return (
    <div>
      <ContainerMain>
        <ArticleMain>
          <H1>
            <strong>Encontre</strong> todos os seus <strong>Pokémons</strong>{" "}
            favoritos
          </H1>
          <H2>
            Você pode conhecer todos os tipos de Pokémons, seus pontos fortes,
            desvantagens e habilidades
          </H2>
          <ButtonAllPokemons>Ver Pokémons</ButtonAllPokemons>
        </ArticleMain>
        <Banner src={banner} alt="banner" />
      </ContainerMain>
    </div>
  );
};
