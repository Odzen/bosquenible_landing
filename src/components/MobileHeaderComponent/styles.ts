import { Link } from 'react-scroll'
import styled from 'styled-components'

import pageWidth from '../../constants/pageWidth'

export const Container = styled.div`
  background-color: var(--green);
  padding: 0 12px;
  position: fixed;
  z-index: 6;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  /* FLEXBOX */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* CSS GRID */
  grid-column: 1/-1;
  height: 65px;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const MenuImage = styled.img`
  margin: auto 0;
  margin-right: 0.6em;
  cursor: pointer;
`

export const ImageContainer = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`

export const Menu = styled.div`
  position: fixed;
  top: 65px;
  left: 0;
  width: 50%;
  height: 100%;
  background: var(--dark-green);
`

export const Nav = styled.nav`
  font-size: 1em;
  display: flex;
  flex-direction: column;
  padding-left: 2em;
  padding-top: 3em;
`

export const ScrollLink = styled(Link)`
  color: var(--white);
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 16px;
  display: inline-block;
  font-family: Frutiger LT Std;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:visited {
    color: #fff;
  }

  &:hover {
    text-decoration: underline;
    color: var(--green);
  }

  &:active {
    text-decoration: underline;
  }
`

export const Button = styled.a`
  color: var(--black);
  font-family: Frutiger LT Std;
  font-weight: 700;
  width: fit-content;
  font-size: 0.8em;
  padding: 4px 12px;
  border: none;
  border-radius: 8px;
  background-color: var(--white);
  text-decoration: none;

  &:hover {
    box-shadow: 0 0px 15px 8px rgba(255, 255, 255, 0.335);
    transition: 0.2s;
    background-color: #ffffff;
  }

  @media screen and (max-width: ${pageWidth.phone}px) {
    padding: 6px 14px;
  }
`
