import styled from 'styled-components'

import pageWidth from '../../constants/pageWidth'

export const Contact = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`

interface ImageProps {
  route: string
}

export const ImageWrapper = styled.div<ImageProps>`
  display: flex;
  z-index: 2;
  background-image: url(${(props) => props.route});
  align-items: center;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 80px 50px;
  flex-wrap: wrap;
  pointer-events: none;

  h3 {
    font-family: Knockout HTF50-Welterweight;
    font-size: 44px;
    color: var(--white);
    text-align: center;
  }

  @media screen and (min-width: ${pageWidth.smallScreen}px) {
    justify-content: space-between;
    padding: 80px 100px;
    h3 {
      text-align: start;
      font-size: 54px;
    }
  }
`

export const CertificationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100%;
  z-index: 1;
`

export const Marketing = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--orange);
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 80px 50px;
  gap: 50px;

  @media screen and (min-width: ${pageWidth.smallScreen}px) {
    padding: 80px 150px;
    display: flex;
    flex-direction: row;
    gap: 100px;
  }
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 100%;

  @media screen and (min-width: ${pageWidth.smallScreen}px) {
    max-width: 40%;
  }
`

export const SocialHeader = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
`

export const SocialMediaLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const Button = styled.a`
  color: var(--black);
  font-family: Frutiger LT Std;
  font-weight: 700;
  padding: 20px 12px;
  border: none;
  border-radius: 50px;
  background-color: var(--white);
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: var(--orange);
    font-family: Frutiger LT Std;
    font-size: 15px;
  }

  @media screen and (min-width: ${pageWidth.smallPhone}px) {
    p {
      font-size: 20px;
    }
  }

  @media screen and (min-width: ${pageWidth.smallScreen}px) {
    p {
      font-size: 24px;
    }
  }
`

export const InputEmail = styled.input`
  font-size: 15px;
  padding: 20px 12px;
  font-family: Frutiger LT Std;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  width: 100%;
  text-align: center;
  background: transparent;
  border: 1px solid var(--white);
  border-radius: 50px;

  ::placeholder {
    color: var(--white);
  }

  &:focus {
    outline: none;

    ::placeholder {
      color: transparent;
    }
  }

  @media screen and (min-width: ${pageWidth.smallPhone}px) {
    font-size: 20px;
  }

  @media screen and (min-width: ${pageWidth.smallScreen}px) {
    font-size: 24px;
  }
`
