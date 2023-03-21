import styled from 'styled-components'

import pageWidth from '../../constants/pageWidth'

export const Team = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  background-color: var(--light-white);
`

export const Content = styled.div`
  padding-top: 100px;
  padding-inline: 20px;
  display: grid;
  gap: 3rem;
  max-width: 90%;

  @media only screen and (min-width: ${pageWidth.phone}px) {
    padding-top: 100px;
    padding-inline: 10px;
    gap: 5rem;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 600px;
  height: 100%;
`

export const ImageWrap = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
  display: flex;
`

export const Title = styled.h2`
  font-family: Knockout HTF50-Welterweight;
  font-weight: 700;
  letter-spacing: 1.29px;
  line-height: 1.2;
  font-size: 45px;
  color: var(--dark-green);
  text-transform: uppercase;
  text-align: center;

  @media only screen and (min-width: ${pageWidth.smallScreen}px) {
    font-size: 60px;
    text-align: start;
  }
`

// Team

export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 700px;

  @media only screen and (min-width: ${pageWidth.screen}px) {
    flex-direction: row;
  }
`

export const ImageMemberWrapper = styled.div`
  display: flex;
  position: relative;
  min-width: 270px;
  min-height: 200px;

  @media only screen and (min-width: ${pageWidth.smallPhone}px) {
    min-width: 300px;
    flex-direction: row;
  }
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: Knockout HTF50-Welterweight;
    font-size: 40px;
    font-weight: 900;
    color: var(--dark-green);
  }

  @media only screen and (min-width: ${pageWidth.smallScreen}px) {
    text-align: start;
    align-items: flex-start;
  }
`

export const SocialMediaLink = styled.a`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const InfoMember = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  text-align: center;
  color: var(--dark-green);
  font-family: Myriad Pro;

  h3,
  h4,
  p {
    margin: 0;
  }

  h3 {
    font-weight: 700;
  }

  h4 {
    font-weight: 400;
  }
  p {
    font-style: italic;
  }

  @media only screen and (min-width: ${pageWidth.smallScreen}px) {
    text-align: start;
  }
`
