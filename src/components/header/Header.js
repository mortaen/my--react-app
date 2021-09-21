import styled from "styled-components"

function Header() {
  return <StyledHeader>Harry Potter</StyledHeader>
}

export default Header

const StyledHeader = styled.header`
  text-align: center;
  font-size: 4rem;
  margin-bottom: 3vh;
  width: 100%;
  color: white;
`
