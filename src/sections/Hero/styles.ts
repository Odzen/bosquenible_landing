import styled from 'styled-components'

import pageWidth from '../../constants/pageWidth'

export const Container = styled.section`
  display: flex;
  height: 700px;
  position: relative;
  width: 100%;

  // @media (min-width: ${pageWidth.smallScreen}px) {
  //   height: 570px;
  // }
  @media (min-width: ${pageWidth.screen}px) {
    height: 900px;
  }
`

export const HeroSection = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  align-items: center;
  width: 100%;
  padding-inline: 100px;
  text-align: left;
  background-color: var(--green);

  @media (max-width: ${pageWidth.phone}px) {
    padding-inline: 20px;
  }
`

export const HeroContainerTitle = styled.div`
  display: inline-block;
  max-width: 70%;
  z-index: 2;
  position: relative;
`

export const ImageWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 90%;
  left: 70%;
  transform: translate(-50%, -50%);
  z-index: 1;
  align-items: center;
  width: 50%;
  max-width: 500px;
  height: 50%;
  margin: 0 auto;

  @media (min-width: ${pageWidth.phone}px) {
    height: 410px;
    top: 80%;
  }

  @media (min-width: ${pageWidth.screen}px) {
    height: 710px;
    left: 80%;
  }
`

export const ContainerHeader = styled.h2`
  font-size: 32px;
  font-weight: bold;
  font-family: Knockout HTF50-Welterweight;
  line-height: 1.2;
  color: var(--green--alt);
  text-transform: uppercase;

  @media (min-width: ${pageWidth.smallScreen}px) {
    font-size: 42px;
  }

  @media (min-width: ${pageWidth.screen}px) {
    font-size: 62px;
  }
`

export const ContainerSub = styled.h3`
  color: var(--light-white--alt);
  font-size: 15px;
  font-weight: bold;
  font-family: Frutiger LT Std;
  line-height: 1.2;
  color: var(--light-white--alt);
  text-transform: uppercase;

  @media (min-width: ${pageWidth.phone}px) {
    font-size: 20px;
  }

  @media (min-width: ${pageWidth.smallScreen}px) {
    font-size: 28px;
  }

  @media (min-width: ${pageWidth.screen}px) {
    font-size: 42px;
  }
`
