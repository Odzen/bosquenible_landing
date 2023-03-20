import styled from 'styled-components'

import pageWidth from '../../constants/pageWidth'

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 11em;
  padding-bottom: 10em;
  background-color: #000000;

  @media only screen and (max-width: ${pageWidth.phone}px) {
    padding-top: 4em;
    padding-bottom: 3em;
  }
  @media only screen and (max-width: ${pageWidth.smallScreen}px) {
    padding: 123px 0px;
  }
  @media only screen and (max-width: ${pageWidth.mobileL}px) {
    padding: 98px 0px;
  }
`

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`

export const Title = styled.h1`
  font-family: 'Saira';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 122.5%;
  text-align: center;
  text-transform: uppercase;

  color: #d0d8dc;
  margin-bottom: 0.3em;
  margin-top: 0;

  @media only screen and (max-width: ${pageWidth.mobileL}px) {
    font-size: 15px;
  }

  @media only screen and (max-width: ${pageWidth.phone}px) {
    margin-top: 0;
  }
`

export const Subtitle = styled.h3`
  font-family: 'Saira';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 131%;
  text-align: center;
  color: #ffffff;
  margin: 0;

  @media only screen and (max-width: ${pageWidth.mobileL}px) {
    font-size: 18px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  max-width: 1300px;
  a {
    margin: 25px 37.5px;
  }
  @media only screen and (max-width: ${pageWidth.smallScreen}px) {
    img {
      max-width: 200px !important;
    }
    a {
      margin: 16px 23px;
    }
  }

  @media only screen and (max-width: ${pageWidth.mobileL}px) {
    img {
      max-height: 17px !important;
    }
    a {
      margin: 8px 15px;
    }
    margin-top: 15px;
    & .solana,
    .binance {
      width: 40%;
      & img {
        object-fit: contain;
        max-height: unset !important;
      }
    }
  }
`
