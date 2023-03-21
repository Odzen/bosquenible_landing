import Image from 'next/image'

import {
  FooterSection,
  FooterContent,
  FooterLogo,
  ImageWrap,
  Social,
  SocialHeader,
  SocialMediaLink,
  Button
} from './styles'

const Footer: React.FC = () => (
  <FooterSection>
    <FooterContent>
      <FooterLogo>
        <ImageWrap>
          <Image alt='logo' src='/images/logos/logo.png' layout='fill' />
        </ImageWrap>
        <p>© Bosquenible 2023, todos los derechos reservados.</p>
      </FooterLogo>

      <Social>
        <Button href='mailto:hablemos@bosquenible.com'>
          <p>hablemos@bosquenible.com</p>
        </Button>
        <SocialHeader>
          <SocialMediaLink href='https://www.instagram.com/bosquenible/' target='_blank'>
            <Image src='/images/contact/instagram.png' alt='certification' width={58} height={58} />
          </SocialMediaLink>
          <SocialMediaLink href='https://www.linkedin.com/company/bosquenible/' target='_blank'>
            <Image src='/images/contact/linkedin.png' alt='certification' width={58} height={58} />
          </SocialMediaLink>
          <Image src='/images/contact/logo_2.png' alt='certification' width={300} height={58} />
        </SocialHeader>
      </Social>
    </FooterContent>
  </FooterSection>
)

export default Footer
