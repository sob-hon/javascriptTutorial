function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const playerAvatar = document.querySelector('#player');
const coin = document.querySelector("#coin");


window.addEventListener('keydown', function(e){
	
	if(e.key === "ArrowDown"){
		
		const currentTop = extractPosition(playerAvatar.style.top);
		if(!((currentTop + 250) >= window.innerHeight)){
			playerAvatar.style.top = `${currentTop + 50}px`;
		} 
	}
	else if(e.key === "ArrowUp"){
		const currentTop = extractPosition(playerAvatar.style.top);
		if(!(currentTop <= 0)){
		playerAvatar.style.top = `${currentTop - 50}px`;
		}
	}
	else if(e.key === "ArrowLeft"){
		const currentLeft = extractPosition(playerAvatar.style.left);
		if(!(currentLeft <= 0)){
			playerAvatar.style.left = `${currentLeft - 50}px`;
			playerAvatar.style.transform = "scale(-1, 1)";
		}
	}
	else if(e.key === "ArrowRight"){
		const currentLeft = extractPosition(playerAvatar.style.left);
		if(!((currentLeft + 130) >= window.innerWidth)){
			playerAvatar.style.left = `${currentLeft + 50}px`;
			playerAvatar.style.transform = "scale(1, 1)";
		}
	}
	if(isTouching(playerAvatar, coin)){
		movCoin();
	}
})

const movCoin = () => {
	const y = Math.floor(Math.random() * window.innerHeight);
	const x = Math.floor(Math.random() * window.innerWidth);
	coin.style.top = `${y}px`
	coin.style.left = `${x}px`

};

const extractPosition = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2));
};