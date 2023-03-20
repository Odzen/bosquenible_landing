import styled, { css } from 'styled-components'

import pageWidth from '../../constants/pageWidth'

export const FooterSection = styled.footer`
  display: flex;
  width: 100%;
  background-color: var(--green);
  justify-content: center;
  padding-bottom: 1em;
  position: relative;
`

export const FooterContent = styled.footer`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 70px 100px;
  gap: 40px;

  @media screen and (min-width: ${pageWidth.smallScreen}px) {
    justify-content: space-between;
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

export const SocialMediaLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const SocialHeader = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
`

export const FooterLogo = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 30px;

  p {
    font-family: Frutiger LT Std;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.2px;
    color: var(--dark-green);
    text-align: center;
  }

  @media screen and (min-width: ${pageWidth.smallScreen}px) {
    align-items: flex-start;
  }
`

export const ImageWrap = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
`

export const Button = styled.a`
  font-family: Frutiger LT Std;
  font-weight: 700;
  padding: 20px 12px;
  border: none;
  border-radius: 50px;
  background-color: var(--light-white);
  width: 100%;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: var(--green);
    font-family: Frutiger LT Std;
    font-weight: 900;
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

export const Logo = styled.img`
  width: 25px;
  height: 25px;

  @media (min-width: ${pageWidth.tinyPhone}px) {
    object-fit: contain;
    margin: 0;
  }

  @media (min-width: ${pageWidth.phone}px) {
    margin: 0 15px 0 0;
  }
`

export const CopyRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
`
export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;

  @media (max-width: ${pageWidth.mobileL}px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
  }
`

export const Link = styled.a<{ small?: boolean }>`
  color: #ffffff;
  text-decoration: none;
  white-space: nowrap;

  @media (min-width: ${pageWidth.tinyPhone}px) {
    font-size: 14px;
    letter-spacing: -0.004em;
    margin: 0;

    ${(props) =>
      props.small &&
      css`
        font-size: 12px;
      `}
  }

  @media (min-width: ${pageWidth.mobileL}px) {
    font-size: 14px;
    letter-spacing: -0.004em;
    margin: 8px 0;
  }
  @media (min-width: ${pageWidth.phone}px) {
    font-size: 14px;
    margin: 0px 8px;
  }
`
