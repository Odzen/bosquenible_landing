import Image from 'next/image'

import { Container, HeroSection, HeroContainerTitle, ContainerHeader, ImageWrapper } from './styles'

const Hero: React.FC = () => (
  <Container id='hero'>
    <HeroSection>
      <HeroContainerTitle>
        <ContainerHeader>
          DESARROLLAMOS ESTRATEGIAS DE SOSTENIBILIDAD QUE IMPACTAN POSITIVAMENTE EN LA SOCIEDAD Y EN
          EL MEDIO AMBIENTE
        </ContainerHeader>
      </HeroContainerTitle>
      <ImageWrapper>
        <Image
          src='/images/hero/image_hero.png'
          alt='image_hero'
          layout='fill'
          objectFit='contain'
          priority
        />
      </ImageWrapper>
    </HeroSection>
  </Container>
)

export default Hero
