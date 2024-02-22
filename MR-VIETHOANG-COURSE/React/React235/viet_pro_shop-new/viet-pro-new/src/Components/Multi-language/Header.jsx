const Header = ( {setLanguageState} ) => {
	
    const handleBtnClick = language => {
        setLanguageState( language === "eng" ? "eng" : "vie");
    }
    
    return (
		<>
			<div id="header">
				<h1 id="logo">
					<a href="#">học viện vietpro</a>
				</h1>
				<div id="lang">
					<a href="#" onClick={() => handleBtnClick("vie")}>
						<img src="./images/vi.png" alt="" /> <span>việt nam</span>
					</a>
					|
					<a href="#" onClick={() => handleBtnClick("eng")}>
						<img src="./images/en.png" alt="" /> <span>anh</span>
					</a>
				</div>
			</div>
		</>
	);
};

export default Header;
