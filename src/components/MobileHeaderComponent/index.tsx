import { useState } from 'react'

import Image from 'next/image'

import {
  Nav,
  Container,
  ImageContainer,
  Button,
  LeftContainer,
  MenuImage,
  Menu,
  ScrollLink
} from './styles'
import menuIcon from '../../../public/images/menu.png'

interface MenuItem {
  id: number
  path: string
  label: string
}

interface Props {
  menuItems: MenuItem[]
  logo: string
}

const MobileHeaderContent: React.FC<Props> = ({ menuItems, logo }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <LeftContainer>
        <MenuImage
          onClick={() => setOpen(!open)}
          width={24}
          height={24}
          src={menuIcon.src}
          alt='Open - close menu'
        />
        <ImageContainer to='hero' key='hero' smooth>
          <Image src={logo} alt='Bosquenible' width={150} height={30} />
        </ImageContainer>
      </LeftContainer>
      {open && (
        <Menu>
          <Nav>
            {menuItems.map(({ path, label }) => (
              <ScrollLink to={path} key={path} smooth onClick={() => setOpen(false)}>
                {label}
              </ScrollLink>
            ))}
          </Nav>
        </Menu>
      )}

      <Button href='mailto:hablemos@bosquenible.com'>CONTACTO</Button>
    </Container>
  )
}

export default MobileHeaderContent
