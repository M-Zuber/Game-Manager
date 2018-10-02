class IdFactory {
	private idCounter = 0;

	getNewId() {
		return ++this.idCounter;
	}

	resetCounter() {
		this.idCounter = 0;
	}
}
export default IdFactory;
