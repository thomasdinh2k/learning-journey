const testUserArray = [
	{
		name: "Adeel Solangi",
		language: "Sindhi",
		id: "V59OF92YF627HFY0",
		bio: "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
		version: 0.2,
        sex: "male"
	},
	{
		name: "Adeel Ghaffar",
		language: "Sindhi",
		id: "ENTOCR13RSCLZ6KU",
		bio: "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et. Pellentesque massa sem, scelerisque sit amet odio id, cursus tempor urna. Etiam congue dignissim volutpat. Vestibulum pharetra libero et velit gravida euismod.",
		version: 6.1,
        sex: "female"
	},
	{
		name: "Aamir Solangi",
		language: "Sindhi",
		id: "IAKPO3R4761JDRVG",
		bio: "Vestibulum pharetra libero et velit gravida euismod. Quisque mauris ligula, efficitur porttitor sodales ac, lacinia non ex. Fusce eu ultrices elit, vel posuere neque.",
		version: 7.27,
        sex: "gay"
	},
];

// Filter => Loc giu lieu
const filteredUsers = testUserArray.filter( usr => {
    return usr.version < 7 && usr.sex != 'gay'
})


// Map => Thay doi Array
const customUsers = testUserArray.map( usr => {
    return {
        ...usr, "language": `${usr.language} unverified` // Item mới được tùy biến 
    }
})

console.log(customUsers)
