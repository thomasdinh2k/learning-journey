const backendRoute = [
	"form",
	"/admin/login",
	"/admin/logout",
	"/admin/dashboard",
	"/admin/products",
	"/admin/products/create",
	"/admin/products/edit",
	"/admin/products/delete",
];

let backEndRouteHTML = "";

backendRoute.forEach((route) => {
	backEndRouteHTML += `
        <button onclick="location.href='${route}'">${route}</button>
    `;
});

const getHomepage = (req, res) => {
    res.send(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/static/admin/form.css" rel="stylesheet" type="text/css"/>
    <title>Homepage</title>
</head>
<body>
    <h1>Hello Express</h1>
    <h3>What's you gonna do?</h3>
    ${backEndRouteHTML}
</body>
</html>`);
}

module.exports = getHomepage;

