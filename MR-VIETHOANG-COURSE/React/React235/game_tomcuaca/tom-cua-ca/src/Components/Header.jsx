const Header = () => {
	return (
		<>
			<header className="header">
				<div className="header__avatar">
					<img src="../../public/img/pixel.png" />
				</div>
				<div className="header__bet">Bàn cược: ?đ</div>
				<div className="header__money">Tiền: ?đ</div>
			</header>
		</>
	);
};

export default Header;
