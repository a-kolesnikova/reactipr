export default class Loger {
	static toConsole({ req, res }) {
		console.log("Request: ", req, "Response:", res);
	}
}