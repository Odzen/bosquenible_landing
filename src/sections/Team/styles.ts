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
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: flex-start;
  //   align-items: flex-start;
  padding-top: 100px;
  padding-inline: 20px;
  display: grid;
  margin: 0 auto;
  gap: 5rem;

  @media only screen and (min-width: ${pageWidth.smallScreen}px) {
    padding-top: 100px;
    padding-inline: 100px;
    // align-items: flex-start;
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
  font-size: 35px;
  color: var(--dark-green);
  text-transform: uppercase;
  text-align: center;

  @media only screen and (min-width: ${pageWidth.smallScreen}px) {
    font-size: 60px;
    text-align: start;
  }
`

// Team
export const MembersWrapper = styled.div`
  display: flex;
`

export const MemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (min-width: ${pageWidth.smallScreen}px) {
    flex-direction: row;
  }
`

export const ImageMemberWrapper = styled.div`
  display: flex;
  height: 270px;
  position: relative;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-family: Knockout HTF50-Welterweight;
    font-size: 40px;
    font-weight: 900;
    color: var(--dark-green);
  }
`

export const InfoMember = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 5px;

  h3,
  h4,
  p {
    margin: 0;
  }

  h3 {
    font-family: Myriad Pro;
    font-weight: 700;
    font-size: 20px;
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
