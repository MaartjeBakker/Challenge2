function timeDate(){
	var today = new Date();
	// De huidige uren, minuten, seconden en datum worden gebruikt:
	var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

	if (hours >= 8 && hours <= 20) {
		document.getElementById('zonEnMaan').classList.remove('maan');
		document.getElementById('zonEnMaan').classList.add('zon');
	} else {
		document.getElementById('zonEnMaan').classList.remove('zon');
		document.getElementById('zonEnMaan').classList.add('maan');
	}

    if (hours >= 8 && hours <= 20) {
		document.getElementById('page').classList.remove('nacht');
		document.getElementById('page').classList.add('dag');
	} else {
		document.getElementById('page').classList.remove('dag');
		document.getElementById('page').classList.add('nacht');
	}

 		// plaatst een nul voor enkel getal als hij onder de 10 is
    if (hours < 10){
    	hours = '0' + hours;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }

    var date = today.getDate();
    // De telling van de maanden begint bij 1 en niet bij 0
    var month = (today.getMonth());
    var year = today.getFullYear();

    //Door deze array komt er de naam van de maand te staan ipv het cijfer
    var maanden = new Array('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');

    // plaatsing van de elementen en hoe het wordt weergegeven:
    document.getElementById('tijd').innerHTML = hours + ":" + minutes + ":" + seconds;
    document.getElementById('datum').innerHTML = date + " " + maanden[month] + " " + year;
    
    setTimeout("timeDate()",1000);

}

window.onload = function() {
	timeDate();
}