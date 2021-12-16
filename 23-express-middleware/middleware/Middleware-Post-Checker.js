export const Post_Checker = (req, res, next) => {
	const { nama, spesies } = req.body
	if (spesies == "kucing" || spesies == "anjing" || spesies == "kelinci") {
		next()
	}else{
		res.status(400)
		res.json({
			error: "Spesies tidak diinginkan"
		})
	}
}