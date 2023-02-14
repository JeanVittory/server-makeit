const getHandler = (req, res) => {
	const data = {
		message: 'Curso encontrado satisfactoriamente',
		top: {
			version_top: 27,
			students: 10,
			names: ['Oscar', 'Nicolas', 'Jean', 'Diego', 'Camilo', 'Michael', 'Andres', 'Sebastian'],
		},
	};
	res.status(200).json(data);
};

module.exports = getHandler;
