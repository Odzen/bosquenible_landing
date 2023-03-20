import Image from 'next/image'

import { alliesData } from './allies.data'
import {
  Allies,
  Title,
  PartnersWrapper,
  PartnersContent,
  SubTitle,
  LogoContainer,
  ImageWrap
} from './styles'

const AlliesSection: React.FC = () => (
  <Allies id='parterns'>
    <Title>Ellos confían en nosotros</Title>
    <PartnersWrapper>
      {alliesData.map(({ id, title, clients }) => (
        <PartnersContent key={id}>
          <SubTitle> {title} </SubTitle>
          <LogoContainer>
            {clients.map(({ name, logo, size }) => (
              <ImageWrap key={name} width={`${size.w}px`} height={`${size.h}px`}>
                <Image src={logo} alt='alllie' layout='fill' objectFit='cover' />
              </ImageWrap>
            ))}
          </LogoContainer>
        </PartnersContent>
      ))}
    </PartnersWrapper>
  </Allies>
)

export default AlliesSection
