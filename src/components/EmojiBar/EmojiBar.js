import "./EmojiBar.css"

function EmojiBar({ onEmojiButtonClick }) {
  return (
    <div className="EmojiBar">
      <button
        className="EmojiBarButton"
        onClick={() => onEmojiButtonClick("🤓")}
      >
        🤓
      </button>
      <button
        className="EmojiBarButton"
        onClick={() => onEmojiButtonClick("🥸")}
      >
        🥸
      </button>
      <button
        className="EmojiBarButton"
        onClick={() => onEmojiButtonClick("😇")}
      >
        😇
      </button>
      <button
        className="EmojiBarButton"
        onClick={() => onEmojiButtonClick("😵‍💫")}
      >
        😵‍💫
      </button>
      <button
        className="EmojiBarButton"
        onClick={() => onEmojiButtonClick("🦩")}
      >
        🦩
      </button>
    </div>
  )
}

export default EmojiBar
