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
  InfoWrapper
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
              <Image src={image} alt='member' width={526} height={526} />
            </ImageMemberWrapper>
            <InfoWrapper>
              <h2>{name || ''}</h2>
              <InfoMember>
                <h3>{role || ''}</h3>
                <h4>{education || ''}</h4>
                <p>{sideRole || ''}</p>
              </InfoMember>
            </InfoWrapper>
          </MemberContainer>
        ))}
      </Content>
    </Team>
  )
}

export default TeamSection
