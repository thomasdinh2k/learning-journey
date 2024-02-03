const dashboard = (req, res) => {
	res.render("new_admin/dashboard");
};

const testAnnounce = (req, res) => {
	res.send("Please route to <b> admin/dashboard <b> to go to the Dashboard")
}

module.exports = {dashboard, testAnnounce};
