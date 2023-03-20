import Image from 'next/image'

import { Nav, Container, ImageContainer, ScrollLink } from './styles'

interface Props {
  menuItems: MenuItem[]
  logo: string
}

interface MenuItem {
  path: string
  label: string
}

const DesktopHeaderContent: React.FC<Props> = ({ menuItems, logo }: Props) => (
  <section id='home'>
    <Container>
      <ImageContainer to='hero' key='hero' smooth>
        <Image src={logo} alt='Bosquenible' width={200} height={30} />
      </ImageContainer>

      <Nav>
        {menuItems.map(({ path, label }) => (
          <ScrollLink to={path} key={path} smooth>
            {label}
          </ScrollLink>
        ))}
      </Nav>
    </Container>
  </section>
)

export default DesktopHeaderContent
