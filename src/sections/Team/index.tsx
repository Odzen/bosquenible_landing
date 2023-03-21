import Image from 'next/image'

import {
  Team,
  Title,
  Content,
  Header,
  ImageWrap,
  InfoMember,
  ImageMemberWrapper,
  MemberContainer,
  InfoWrapper,
  SocialMediaLink
} from './styles'
import teamData from './team.data'

const TeamSection: React.FC = () => {
  const headerTitle = 'NUESTRO EQUIPO'
  return (
    <Team id='team'>
      <Content>
        <Header>
          <Title>{headerTitle}</Title>
          <ImageWrap>
            <Image src='/images/logos/logo_4.png' alt='logo' layout='fill' />
          </ImageWrap>
        </Header>
        {teamData.map(({ id, image, name, role, education, linkedin, sideRole }) => (
          <MemberContainer key={id}>
            <ImageMemberWrapper>
              <Image src={image} alt='member' layout='fill' />
            </ImageMemberWrapper>
            <InfoWrapper>
              <h2>{name || ''}</h2>
              <InfoMember>
                <h3>{role || ''}</h3>
                <h4>{education || ''}</h4>
                <p>{sideRole || ''}</p>
              </InfoMember>
              <SocialMediaLink href={linkedin} target='_blank'>
                <Image
                  src='/images/contact/linkedin_2.png'
                  alt='certification'
                  width={32}
                  height={32}
                />
              </SocialMediaLink>
            </InfoWrapper>
          </MemberContainer>
        ))}
      </Content>
    </Team>
  )
}

export default TeamSection
