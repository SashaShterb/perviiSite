p=0,q=0,s=0,image=0,v=360;

function functie1() {
	if (p%2==0) { p = 1;
	v=v+115;
	var visota = v + "px";
	document.getElementById("button1").innerHTML = "-";
	document.getElementById("none").style.display = "block";
    document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0s";}
	else { 	p = 0;
	v=v-115;
	var visota = v + "px";
	document.getElementById("button1").innerHTML = "+";
	document.getElementById("none").style.display = "none"; 
    document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0.1s ease";}
} 

function functie2() {
	if (q%2==0) { q = 1;
	v=v+60;
	var visota = v + "px";
	document.getElementById("button2").innerHTML = "-";
	document.getElementById("none2").style.display = "block";
	document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0s";}
	else { 	q = 0;
	v=v-60;
	var visota = v + "px";
	document.getElementById("button2").innerHTML = "+";
	document.getElementById("none2").style.display = "none"; 
	document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0.1s ease";}
} 

function functie3() {
	if (s%2==0) { s = 1;
	v=v+95;
	var visota = v + "px";
	document.getElementById("button3").innerHTML = "-";
	document.getElementById("none3").style.display = "block";
	document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0s";}
	else { 	s = 0;
	v=v-95;
	var visota = v + "px";
	document.getElementById("button3").innerHTML = "+";
	document.getElementById("none3").style.display = "none"; 
	document.getElementById("boc").style.height = visota;
	document.getElementById("boc").style.transition = "all 0.1s ease";}
} 

function poisc(m){
	var i, j,o,v,k;
	var vse = ["Street Fighter","Sport","Unravel","Kerbal Space Program","XCOM 2","Rocket League","GRID Autosport","DiRT Rally","Danganronpa","Tales From the Borderlands","Samorost","Batman: Arkham Knight","Bulletstorm: Full Clip Edition","For Honor","Tom Clancy's: Ghost Recon","Overwatch","Owlboy","Nier: AUTOMATA","Mass Effect: Andromeda","Outlast 2","RESIDENT Evil: biohazard","Metal Gear Solid V","Dark Souls","Torment: Tides of Numenera","Warhammer: Down of War"];
	var kartinki = ["fight_street.jpg","sport_nba.jpg","gol_unravel.jpg","sim_kerbal.jpg","strategy_xcom.jpg","gonki_rocket.png","gonki_grid.jpg","gonki_dirt.jpg","adventure_danganronpa.jpg","adventure_borderlands.jpg","adventure_samorost.jpg","action_batman.jpg","action_bulletstorm.jpg","action_forhonor.jpg","action_ghostrecon.jpg","action_overwatch.png","arcade_owlboy.png","rpg_automata_326.jpg","rpg_masseffect_326.jpg","action_outlast_326.jpg","action_resident_326.jpg","action_solid_326.jpg","rpg_souls_326.jpg","rpg_torment_326.jpg","strategy_warhammer_326.jpg"];
	var otenki = ["77","85","76","90","88","71","78","85","72","83","88","85","79","78","83","91","90","88","67","74","87","91","88","79","89"];
	var tablita = "<div class='table'>";
	var actionJanr = /(action)/g;
	var adventureJanr = /(adventure)/g;
	var rpgJanr = /(rpg)/g;
	var strategyJanr = /(strategy)/g;
	var gonkiJanr = /(gonki)/g;
	var simJanr = /(sim)/g;
	var arcadeJanr = /(arcade)/g;
	var golJanr = /(gol)/g;
	var sportJanr = /(sport)/g;
	var fightJanr = /(fight)/g;

	for (j=0; j <= vse.length-1; j++){
	for (i=0; i <= vse.length-1; i++){
		if (parseInt(otenki[i])>parseInt(otenki[i-1])) {
			v=vse[i-1];
			vse[i-1]=vse[i];
			vse[i]=v;

			k=kartinki[i-1];
			kartinki[i-1]=kartinki[i];
			kartinki[i]=k;

			o=otenki[i-1];
			otenki[i-1]=otenki[i];
			otenki[i]=o;
		}
	}
	}

	if (m=="vse") {
	j=0;
	for (i=0; i <= vse.length-1; i++){
		j++;
		var tablita = tablita + "<div class='row'><div class='cell nomer'>" + j + "</div>";
		var tablita = tablita + "<a href='retenzia.html'><div class='cell kartinka' style='background-image: url(\"image\\\\" + kartinki[i] + "\");'></div>";
		if (kartinki[i].match(actionJanr)) {
		var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Экшен</span></div>";
		}
		if (kartinki[i].match(adventureJanr)) {
		var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Приключение</span></div>";
		}
		if (kartinki[i].match(rpgJanr)) {
		var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: РПГ</span></div>";
		}
		if (kartinki[i].match(strategyJanr)) {
		var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Стратегия</span></div>";
		}
		if (kartinki[i].match(gonkiJanr)) {
		var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Гонки</span></div>";
		}
		if (kartinki[i].match(simJanr)) {
		var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Симулятор</span></div>";
		}
		if (kartinki[i].match(arcadeJanr)) {
		var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Аркада</span></div>";
		}
		if (kartinki[i].match(golJanr)) {
		var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Головоломка</span></div>";
		}
		if (kartinki[i].match(sportJanr)) {
		var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Спорт</span></div>";
		}
		if (kartinki[i].match(fightJanr)) {
		var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Файтинг</span></div>";
		}


		if (parseInt(otenki[i])<75) {
			var tablita = tablita + "<div class='cell otenocika' style='background-color: #FABD00;'>" + otenki[i] + "</div>";
		}
		else {
			var tablita = tablita + "<div class='cell otenocika' style='background-color: green;'>" + otenki[i] + "</div>";
		}
		var tablita = tablita + "</a></div><div class='row' style='height: 10px;'></div>";
	}
		var tablita = tablita + "</div>";
	document.getElementById("tableCont").innerHTML = tablita;
	}

	if (m=="action") {
		j=0;
		for (i=0; i <= vse.length-1; i++){
			if (kartinki[i].match(actionJanr)) {
				j++;
				var tablita = tablita + "<div class='row'><div class='cell nomer'>" + j + "</div>";
				var tablita = tablita + "<a href='retenzia.html'><div class='cell kartinka' style='background-image: url(\"image\\\\" + kartinki[i] + "\");'></div>";
				var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Экшен</span></div>";
				if (parseInt(otenki[i])<75) {
					var tablita = tablita + "<div class='cell otenocika' style='background-color: #FABD00;'>" + otenki[i] + "</div>";
				}
				else {
				var tablita = tablita + "<div class='cell otenocika' style='background-color: green;'>" + otenki[i] + "</div>";
				}
				var tablita = tablita + "</a></div><div class='row' style='height: 10px;'></div>";
			}
		}

		var tablita = tablita + "</div>";
	    document.getElementById("tableCont").innerHTML = tablita;
	}

	if (m=="adventure") {
		j=0;
		for (i=0; i <= vse.length-1; i++){
			if (kartinki[i].match(adventureJanr)) {
				j++;
				var tablita = tablita + "<div class='row'><div class='cell nomer'>" + j + "</div>";
				var tablita = tablita + "<a href='retenzia.html'><div class='cell kartinka' style='background-image: url(\"image\\\\" + kartinki[i] + "\");'></div>";
				var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Приключение</span></div>";
				if (parseInt(otenki[i])<75) {
					var tablita = tablita + "<div class='cell otenocika' style='background-color: #FABD00;'>" + otenki[i] + "</div>";
				}
				else {
				var tablita = tablita + "<div class='cell otenocika' style='background-color: green;'>" + otenki[i] + "</div>";
				}
				var tablita = tablita + "</a></div><div class='row' style='height: 10px;'></div>";
			}
		}

		var tablita = tablita + "</div>";
	    document.getElementById("tableCont").innerHTML = tablita;
	}

		if (m=="rpg") {
			j=0;
		for (i=0; i <= vse.length-1; i++){
			if (kartinki[i].match(rpgJanr)) {
				j++;
				var tablita = tablita + "<div class='row'><div class='cell nomer'>" + j + "</div>";
				var tablita = tablita + "<a href='retenzia.html'><div class='cell kartinka' style='background-image: url(\"image\\\\" + kartinki[i] + "\");'></div>";
				var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: РПГ</span></div>";
				if (parseInt(otenki[i])<75) {
					var tablita = tablita + "<div class='cell otenocika' style='background-color: #FABD00;'>" + otenki[i] + "</div>";
				}
				else {
				var tablita = tablita + "<div class='cell otenocika' style='background-color: green;'>" + otenki[i] + "</div>";
				}
				var tablita = tablita + "</a></div><div class='row' style='height: 10px;'></div>";
			}
		}

		var tablita = tablita + "</div>";
	    document.getElementById("tableCont").innerHTML = tablita;
	}

		if (m=="strategy") {
			j=0;
		for (i=0; i <= vse.length-1; i++){
			if (kartinki[i].match(strategyJanr)) {
				j++;
				var tablita = tablita + "<div class='row'><div class='cell nomer'>" + j + "</div>";
				var tablita = tablita + "<a href='retenzia.html'><div class='cell kartinka' style='background-image: url(\"image\\\\" + kartinki[i] + "\");'></div>";
				var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Стратегия</span></div>";
				if (parseInt(otenki[i])<75) {
					var tablita = tablita + "<div class='cell otenocika' style='background-color: #FABD00;'>" + otenki[i] + "</div>";
				}
				else {
				var tablita = tablita + "<div class='cell otenocika' style='background-color: green;'>" + otenki[i] + "</div>";
				}
				var tablita = tablita + "</a></div><div class='row' style='height: 10px;'></div>";
			}
		}

		var tablita = tablita + "</div>";
	    document.getElementById("tableCont").innerHTML = tablita;
	}

		if (m=="gonki") {
			j=0;
		for (i=0; i <= vse.length-1; i++){
			if (kartinki[i].match(gonkiJanr)) {
				j++;
				var tablita = tablita + "<div class='row'><div class='cell nomer'>" + j + "</div>";
				var tablita = tablita + "<a href='retenzia.html'><div class='cell kartinka' style='background-image: url(\"image\\\\" + kartinki[i] + "\");'></div>";
				var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Гонки</span></div>";
				if (parseInt(otenki[i])<75) {
					var tablita = tablita + "<div class='cell otenocika' style='background-color: #FABD00;'>" + otenki[i] + "</div>";
				}
				else {
				var tablita = tablita + "<div class='cell otenocika' style='background-color: green;'>" + otenki[i] + "</div>";
				}
				var tablita = tablita + "</a></div><div class='row' style='height: 10px;'></div>";
			}
		}

		var tablita = tablita + "</div>";
	    document.getElementById("tableCont").innerHTML = tablita;
	}

		if (m=="sim") {
			j=0;
		for (i=0; i <= vse.length-1; i++){
			if (kartinki[i].match(simJanr)) {
				j++;
				var tablita = tablita + "<div class='row'><div class='cell nomer'>" + j + "</div>";
				var tablita = tablita + "<a href='retenzia.html'><div class='cell kartinka' style='background-image: url(\"image\\\\" + kartinki[i] + "\");'></div>";
				var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Симулятор</span></div>";
				if (parseInt(otenki[i])<75) {
					var tablita = tablita + "<div class='cell otenocika' style='background-color: #FABD00;'>" + otenki[i] + "</div>";
				}
				else {
				var tablita = tablita + "<div class='cell otenocika' style='background-color: green;'>" + otenki[i] + "</div>";
				}
				var tablita = tablita + "</a></div><div class='row' style='height: 10px;'></div>";
			}
		}

		var tablita = tablita + "</div>";
	    document.getElementById("tableCont").innerHTML = tablita;
	}

		if (m=="arcade") {
			j=0;
		for (i=0; i <= vse.length-1; i++){
			if (kartinki[i].match(arcadeJanr)) {
				j++;
				var tablita = tablita + "<div class='row'><div class='cell nomer'>" + j + "</div>";
				var tablita = tablita + "<a href='retenzia.html'><div class='cell kartinka' style='background-image: url(\"image\\\\" + kartinki[i] + "\");'></div>";
				var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Аркада</span></div>";
				if (parseInt(otenki[i])<75) {
					var tablita = tablita + "<div class='cell otenocika' style='background-color: #FABD00;'>" + otenki[i] + "</div>";
				}
				else {
				var tablita = tablita + "<div class='cell otenocika' style='background-color: green;'>" + otenki[i] + "</div>";
				}
				var tablita = tablita + "</a></div><div class='row' style='height: 10px;'></div>";
			}
		}

		var tablita = tablita + "</div>";
	    document.getElementById("tableCont").innerHTML = tablita;
	}

		if (m=="gol") {
			j=0;
		for (i=0; i <= vse.length-1; i++){
			if (kartinki[i].match(golJanr)) {
				j++;
				var tablita = tablita + "<div class='row'><div class='cell nomer'>" + j + "</div>";
				var tablita = tablita + "<a href='retenzia.html'><div class='cell kartinka' style='background-image: url(\"image\\\\" + kartinki[i] + "\");'></div>";
				var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Головоломка</span></div>";
				if (parseInt(otenki[i])<75) {
					var tablita = tablita + "<div class='cell otenocika' style='background-color: #FABD00;'>" + otenki[i] + "</div>";
				}
				else {
				var tablita = tablita + "<div class='cell otenocika' style='background-color: green;'>" + otenki[i] + "</div>";
				}
				var tablita = tablita + "</a></div><div class='row' style='height: 10px;'></div>";
			}
		}

		var tablita = tablita + "</div>";
	    document.getElementById("tableCont").innerHTML = tablita;
	}

		if (m=="sport") {
			j=0;
		for (i=0; i <= vse.length-1; i++){
			if (kartinki[i].match(sportJanr)) {
				j++;
				var tablita = tablita + "<div class='row'><div class='cell nomer'>" + j + "</div>";
				var tablita = tablita + "<a href='retenzia.html'><div class='cell kartinka' style='background-image: url(\"image\\\\" + kartinki[i] + "\");'></div>";
				var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Спорт</span></div>";
				if (parseInt(otenki[i])<75) {
					var tablita = tablita + "<div class='cell otenocika' style='background-color: #FABD00;'>" + otenki[i] + "</div>";
				}
				else {
				var tablita = tablita + "<div class='cell otenocika' style='background-color: green;'>" + otenki[i] + "</div>";
				}
				var tablita = tablita + "</a></div><div class='row' style='height: 10px;'></div>";
			}
		}

		var tablita = tablita + "</div>";
	    document.getElementById("tableCont").innerHTML = tablita;
	}

		if (m=="fight") {
			j=0;
		for (i=0; i <= vse.length-1; i++){
			if (kartinki[i].match(fightJanr)) {
				j++;
				var tablita = tablita + "<div class='row'><div class='cell nomer'>" + j + "</div>";
				var tablita = tablita + "<a href='retenzia.html'><div class='cell kartinka' style='background-image: url(\"image\\\\" + kartinki[i] + "\");'></div>";
				var tablita = tablita + "<div class='cell opisanie'>" + vse[i] + "<br/><br/><span style='font-size: 14px;'>Жанр: Файтинг</span></div>";
				if (parseInt(otenki[i])<75) {
					var tablita = tablita + "<div class='cell otenocika' style='background-color: #FABD00;'>" + otenki[i] + "</div>";
				}
				else {
				var tablita = tablita + "<div class='cell otenocika' style='background-color: green;'>" + otenki[i] + "</div>";
				}
				var tablita = tablita + "</a></div><div class='row' style='height: 10px;'></div>";
			}
		}

		var tablita = tablita + "</div>";
	    document.getElementById("tableCont").innerHTML = tablita;
	}

}