const data = require('../db/courses.db.js');

const getHandler = (req, res) => {
	res.status(200).json(data);
};

module.exports = getHandler;
