$(function(){
	function getHour() {
		return (new Date()).getHours();
		// return 17;
	} 
	var n = getHour();
	day = n < 18 && n >= 6 ? true : false
	streamNumber = 1;

	function updateImage() {
		if(day) {
			$('.box_i').css('background-image', 'url(public/i/day' + streamNumber + '/' + (getHour() - 5) + '.jpg)')
		} else {
			var date = new Date();
			seed = (date.getYear() * 10000 + date.getMonth() * 100 + date.getDate()) * 1000 
				+ date.getHours() * 10 + (date.getMinutes() > 29 ? 1 : 0);
			Math.seedrandom(seed);
			imageNumber = Math.round(Math.random() * 50);
			$('.box_i').css('background-image', 'url(public/i/night/' + imageNumber + '.jpg)')
		}
	}
	
	updateImage();
	setInterval(updateImage, 1000);
});
