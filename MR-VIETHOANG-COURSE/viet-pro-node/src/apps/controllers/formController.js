const getForm = (req, res) => {
	res.send(
		`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Submission</title>
            <link href="/static/admin/form.css" rel="stylesheet" type="text/css"/>
        </head>
        <body>
            <div class="form-container">
                <h1>This is the search function</h1>
                <form method="post" action="/action_form">
                    <input type="text" name="text" placeholder="Enter text here"></input>
                    <input type="submit" value="Search"></input>
                </form>
            </div>
        </body>
        </html>
    `
	);
};

const handleFormSubmission = (req, res) => {
	const content             = req.body.text;

	res.send(`Data <b>${content}</b> submitted successfully`);
};

module.exports = { getForm, handleFormSubmission };
