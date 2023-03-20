import { FC } from 'react'

import PartnerLogo from './PartnerLogo'
import { partners } from './partners'
import { Section, SectionWrapper, Header, Title, Subtitle, LogoContainer } from './styles'

const Team: FC = () => {
  const title = 'OUR PARTNERS'
  const subtitle = 'Working with the best in Web3'

  return (
    <Section id='partners'>

      <SectionWrapper>
        <Header>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        <LogoContainer>
          {partners.map(({ web, logo, size, className }) => (
            <PartnerLogo web={web} logo={logo} key={logo} size={size} className={className} />
          ))}
        </LogoContainer>
      </SectionWrapper>
    </Section>
  )
}

export default Team
