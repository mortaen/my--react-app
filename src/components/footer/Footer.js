import styled from "styled-components"

function Footer({ activeHouse, onHouseButtonClick }) {
  return (
    <StyledFooter>
      <FooterButton
        house="Gryffindor"
        active={activeHouse === "Gryffindor"}
        onClick={() => onHouseButtonClick("Gryffindor")}
      >
        Gryffindor
      </FooterButton>
      <FooterButton
        house="Hufflepuff"
        active={activeHouse === "Hufflepuff"}
        onClick={() => onHouseButtonClick("Hufflepuff")}
      >
        Hufflepuff
      </FooterButton>
      <FooterButton
        house="Ravenclaw"
        active={activeHouse === "Ravenclaw"}
        onClick={() => onHouseButtonClick("Ravenclaw")}
      >
        Ravenclaw
      </FooterButton>
      <FooterButton
        house="Slytherin"
        active={activeHouse === "Slytherin"}
        onClick={() => onHouseButtonClick("Slytherin")}
      >
        Slytherin
      </FooterButton>
      <FooterButton
        active={activeHouse === ""}
        onClick={() => onHouseButtonClick("")}
      >
        no house
      </FooterButton>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

const FooterButton = styled.button`
  color: ${({ active }) => active && "orange"};
  background-color: ${({ house }) =>
    house === "Gryffindor"
      ? "#7f0909"
      : house === "Hufflepuff"
      ? "#ffdb00"
      : house === "Ravenclaw"
      ? "#222f5b"
      : house === "Slytherin"
      ? "#0d6217"
      : "grey"};
  font-size: xx-large;
  border: 5px transparent;
  border-radius: 27px;
`

export default Footer
