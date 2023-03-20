import { Link } from 'react-scroll'
import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--green);
  color: #fff;
  padding: 40px 24px;
  position: fixed;
  top: 0;
  z-index: 5;
  /* FLEXBOX */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* CSS GRID */
  grid-column: 1/-1;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
`

export const ImageContainer = styled(Link)`
  margin-right: 30px;
  height: 34px;
  cursor: pointer;
`

export const Nav = styled.nav`
  font-size: 14px;
  flex-grow: 1;
  max-width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a:link {
    color: var(--white);
    font-weight: 600;
    text-decoration: none;
    margin-right: 16px;
    display: inline-block;
  }
`

export const ScrollLink = styled(Link)`
  color: var(--dark-green);
  font-family: Knockout HTF50-Welterweight;
  letter-spacing: 2px;
  font-weight: 700;
  text-decoration: none;
  margin-right: 16px;
  display: inline-block;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:visited {
    color: #fff;
  }

  &:hover {
    text-decoration: underline;
    color: var(--white);
  }

  &:active {
    text-decoration: underline;
  }
`
