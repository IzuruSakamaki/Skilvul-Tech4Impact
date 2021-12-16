export const Logger = (req, res, next) => {
	console.log('server run')
	console.log('this is logger')
	next()
}