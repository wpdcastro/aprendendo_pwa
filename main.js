if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js').then((reg) => {
			console.log("Chazham", reg);
		}).catch((err) => {
			console.log("deu ruim", err);
		});
	});
}