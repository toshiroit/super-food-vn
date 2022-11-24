const ChatBox = () => {
  return (
    <div className="chatBox">
      <header>
        XIN CHAO
      </header>
      <main className="page__main">
        <div className="block--background">
          <div className="chatbot__overview">
            <ul className="chatlist">
              <li className="bot__output bot__output--standard">Hey, I'm Navvy!</li>
              <li className="bot__output bot__output--standard">
                I will guide you through Mees' portfolio!
              </li>
              <li className="userInput">236236236</li>
              <li className="bot__output bot__output--standard">
                <span className="bot__output--second-sentence">
                  You can ask me a bunch of things!
                </span>
                <ul>
                  <li className="input__nested-list">
                    Something <span className="bot__command">about</span> Mees
                  </li>
                </ul>
                You could also scroll down to see Mees' full portfolio
              </li>
              <li className="userInput">236236236</li>
              <li className="userInput">236236236</li>
              <li className="userInput">236236236</li>
            </ul>
          </div>
          <div className="chatbox-area">
            <form action="" id="chatform">
              <textarea
                placeholder="Talk to me!"
                className="chatbox"
                name=""
                defaultValue={""}
              />
              <button className="submit-button" type="button">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="block--background" />
        </div>
      </main>


    </div>
  )
}
export default ChatBox
