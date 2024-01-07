const test_1 = (req, res) => {
    res.send(`<h1>${req.params.id} and ${req.params.id2}</h1>`);
    console.log(req);
}

module.exports = test_1;