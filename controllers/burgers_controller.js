var express = require("express")
var router = express.Router();
var burger = require("./../models/burger.js")

router.get("/", function (req, res) {
    burger.selectAll(function (result) {

        var burger_obj = {
            burger: result
        }
        res.render("index.handlebars", burger_obj)
    });

});

router.post("/api/burger/:burger_name", function (req, res) {
    burger.insertOne(req.params.burger_name, function (result) {
        res.json(result)
    })

})

router.put("/api/burger/:id", function (req, res) {
    burger.updateOne(req.params.id, function (result) {
        res.json(result)
    })

})
router.delete("/api/burger/:id", function (req, res) {
    burger.deleteOne(req.params.id, function (result) {
        console.log("controller")
        res.json(result)
    })

})

//post and put needs to refresh the page to do anything afterwards
module.exports = router;