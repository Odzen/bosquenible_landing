import styled from 'styled-components'

export const Banner = styled.section`
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
  background-image: url(${(props) => props.route});
  align-items: center;
  object-fit: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 100px 0px;
  pointer-events: none;
`

export const ImageWrap = styled.div`
  max-width: 50%;
  max-height: 200px;
  position: relative;
  display: flex;
`
