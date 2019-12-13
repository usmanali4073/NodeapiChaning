function weathercontroller() {
    function get(req, res) {
        return res.send("test").status(200)
    }
    return {get }
}

module.exports = weathercontroller;