import styled from "styled-components"

function EmojiBar({ onEmojiButtonClick }) {
  return (
    <EmojiBarDiv>
      <EmojiBarButton onClick={() => onEmojiButtonClick("🤓")}>
        🤓
      </EmojiBarButton>
      <EmojiBarButton onClick={() => onEmojiButtonClick("🥸")}>🥸</EmojiBarButton>
      <EmojiBarButton onClick={() => onEmojiButtonClick("😇")}>
        😇
      </EmojiBarButton>
      <EmojiBarButton onClick={() => onEmojiButtonClick("😵‍💫")}>
        😵‍💫
      </EmojiBarButton>
      <EmojiBarButton onClick={() => onEmojiButtonClick("🦩")}>
        🦩
      </EmojiBarButton>
    </EmojiBarDiv>
  )
}

const EmojiBarDiv = styled.div`
  display: flex;
`

const EmojiBarButton = styled.button`
  font-size: xx-large;
  border: 5px transparent;
  border-radius: 27px;
  background: transparent;
`

export default EmojiBar
