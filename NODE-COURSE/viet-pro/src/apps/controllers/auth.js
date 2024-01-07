const login = (req, res) => {
    res.send("admin/login");
};

const logout = (req, res) => {
    res.send("admin/logout");
}

module.exports = {
    login,
    logout
}