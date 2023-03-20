import styled from 'styled-components'

export const Container = styled.header`
  background-color: #000000;
  color: #fff;
  padding: 8px 24px;
  position: relative;
  border: 1px solid red;
  /* FLEXBOX */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* CSS GRID */
  grid-column: 1/-1;
`
