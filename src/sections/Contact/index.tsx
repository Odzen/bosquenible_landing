import { useState, KeyboardEvent, ChangeEvent } from 'react'

import Image from 'next/image'

import {
  Contact,
  Content,
  ImageWrapper,
  Marketing,
  CertificationsWrapper,
  Social,
  SocialHeader,
  SocialMediaLink,
  Button,
  InputEmail
} from './styles'

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      // eslint-disable-next-line no-alert
      alert('Save email')

      setEmail('')
    }
  }

  return (
    <Contact id='contact'>
      <Content>
        <ImageWrapper route='/images/contact/bg_2.jpg'>
          <h3>ESTAMOS CERTIFICADOS EN</h3>
          <CertificationsWrapper>
            <Image
              src='/images/contact/certification_2.png'
              alt='certification'
              width={146}
              height={146}
            />
            <Image
              src='/images/contact/certification.png'
              alt='certification'
              width={400}
              height={146}
            />
          </CertificationsWrapper>
        </ImageWrapper>
        <Marketing>
          <Image src='/images/contact/contact.png' alt='certification' width={500} height={500} />
          <Social>
            <SocialHeader>
              <SocialMediaLink href='https://www.instagram.com/bosquenible/' target='_blank'>
                <Image
                  src='/images/contact/instagram.png'
                  alt='certification'
                  width={58}
                  height={58}
                />
              </SocialMediaLink>
              <SocialMediaLink href='https://www.linkedin.com/company/bosquenible/' target='_blank'>
                <Image
                  src='/images/contact/linkedin.png'
                  alt='certification'
                  width={58}
                  height={58}
                />
              </SocialMediaLink>
              <Image src='/images/contact/logo_2.png' alt='certification' width={300} height={58} />
            </SocialHeader>
            <Button href='mailto:hablemos@bosquenible.com'>
              {' '}
              <p>hablemos@bosquenible.com</p>{' '}
            </Button>
            <InputEmail
              onChange={handleEmailInput}
              onKeyDown={handleKeyDown}
              value={email}
              type='text'
              placeholder='tu correo aquí'
            />
          </Social>
        </Marketing>
      </Content>
    </Contact>
  )
}

export default ContactSection
