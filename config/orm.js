var connection = require("./connection.js")

var commands = {
    selectAll: function (callback) {
        connection.query("SELECT * FROM burger",
            function (err, result) {
                if (err) {
                    throw err;
                }
                callback(result);
            })
    },
    insertOne: function (name, callback) {
        console.log(name)
        connection.query("INSERT INTO burger SET ?", {
            burger_name: name,

            devoured: false

        }, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },
    updateOne: function (id, callback) {

        connection.query("UPDATE burger SET ? WHERE ?", [{
                devoured: true
            },
            {
                id: id
            }
        ], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },

    deleteOne: function (id, callback) {

        connection.query("DELETE FROM burger WHERE ?", [{
                id: id
            }],
            function (err, result) {
                if (err) {
                    throw err;
                }
                console.log(result)
                callback(result);
            })
    }
}


module.exports = commands