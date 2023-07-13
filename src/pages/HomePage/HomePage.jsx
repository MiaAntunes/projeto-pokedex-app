import banner from "../../assets/others/BannerComplete.png";
import banner2 from "../../assets/others/BannerComplete2.jpg"
import {
  ArticleMain,
  BannerDesktop,
  BannerMobile,
  ButtonAllPokemons,
  ContainerMain,
  H1,
  H2,
  SectionHomePage,
} from "./HomePageStyle";

export const HomePage = () => {
  return (
    <ContainerMain>
      <SectionHomePage>
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
        <BannerMobile src={banner} alt="banner" />
        <BannerDesktop src={banner2} alt="banner" />
      </SectionHomePage>
    </ContainerMain>
  );
};
