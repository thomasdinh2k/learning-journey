import quizLogo from "../assets/quiz-logo.png"

const Header = () => {
    return(
        <header>
            <img src={quizLogo} alt="" />
            <h1>Trò chơi React</h1>
        </header>
    );
}

export default Header;