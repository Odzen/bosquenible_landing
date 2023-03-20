import styled from 'styled-components'

import pageWidth from '../../constants/pageWidth'

export const OurServices = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  background: var(--white);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-inline: 20px;
  gap: 30px;

  @media only screen and (min-width: ${pageWidth.smallScreen}px) {
    padding-top: 100px;
    padding-inline: 100px;
    align-items: flex-start;
  }
`

export const Title = styled.h2`
  font-family: Knockout HTF50-Welterweight;
  font-weight: 700;
  letter-spacing: 1.29px;
  line-height: 1.2;
  font-size: 35px;
  color: var(--dark-green);
  text-transform: uppercase;
  text-align: center;
  max-width: 200px;

  @media only screen and (min-width: ${pageWidth.smallScreen}px) {
    font-size: 60px;
    text-align: start;
  }
`

export const ServicesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  @media only screen and (min-width: ${pageWidth.smallScreen}px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    column-gap: 80px;
  }
`

export const Service = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`

export const ImageTitleWrapper = styled.image`
  width: fit-content;
  heigth: 100px;
`

export const TitleService = styled.h2`
  font-family: Knockout HTF50-Welterweight;
  color: var(--green);
  font-size: 21px;
  letter-spacing: 0.51px;

  @media only screen and (min-width: ${pageWidth.smallScreen}px) {
    font-size: 41px;
  }
`

export const ImageService = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: start;
  gap: 10px;
  p {
    text-align: justify;
    font-family: Frutiger LT Std;
    font-size: 17px;
    color: var(--dark-green);
  }
`
