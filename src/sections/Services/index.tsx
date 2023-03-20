import Image from 'next/image'

import servicesData from './services.data'
import {
  OurServices,
  Content,
  Title,
  ServicesWrapper,
  Service,
  TitleService,
  TitleSection,
  ServiceContent,
  ImageTitleWrapper
} from './styles'

const Services: React.FC = () => {
  const headerTitle = 'NUESTROS SERVICIOS'
  return (
    <OurServices id='services'>
      <Content>
        <Title>{headerTitle}</Title>
        <ServicesWrapper>
          {servicesData.map(({ id, pathIcon, title, list }) => (
            <Service key={id}>
              <TitleSection>
                <ImageTitleWrapper>
                  <Image src={pathIcon} alt='service' width={51} height={55} />
                </ImageTitleWrapper>
                <TitleService>{title}</TitleService>
              </TitleSection>
              <ServiceContent>
                {list.map((element) => (
                  <p key={element}>{element}</p>
                ))}
              </ServiceContent>
            </Service>
          ))}
        </ServicesWrapper>
      </Content>
    </OurServices>
  )
}

export default Services
