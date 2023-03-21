import Image from 'next/image'

import {
  Container,
  HeroSection,
  HeroContainerTitle,
  ContainerHeader,
  ImageWrapper,
  ContainerSub
} from './styles'

const Hero: React.FC = () => (
  <Container id='hero'>
    <HeroSection>
      <HeroContainerTitle>
        <ContainerHeader>
          POTENCIAMOS MARCAS DISEÑANDO ESTRATEGIAS DE SOSTENIBILIDAD ORIENTADAS A LA TRANSFORMACIÓN
          EMPRESARIAL,
        </ContainerHeader>
        <ContainerSub>
          Generando valor e impactos positivos en el ambiente y la sociedad a partir de las
          capacidades y necesidades de las empresas
        </ContainerSub>
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
