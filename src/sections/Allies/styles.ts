import styled from 'styled-components'

import pageWidth from '../../constants/pageWidth'

export const Allies = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 100px 0;
`

export const Title = styled.h2`
  font-family: Knockout HTF50-Welterweight;
  font-size: 40px;
  letter-spacing: 1.24px;
  line-height: 1.2;
  color: var(--green);
  text-transform: uppercase;
  text-align: center;

  @media only screen and (min-width: ${pageWidth.smallScreen}px) {
    font-size: 60px;
  }
`

export const PartnersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
  max-width: 80%;
`

export const PartnersContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

interface ImageProps {
  width: string
  height: string
}

export const ImageWrap = styled.div<ImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  margin: 10px;
`

export const SubTitle = styled.h2`
  font-family: Frutiger LT Std;
  font-size: 23px;
  letter-spacing: 1.24px;
  line-height: 1.2;
  color: var(--dark-green);
  text-transform: uppercase;
`
