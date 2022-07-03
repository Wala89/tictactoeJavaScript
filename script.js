// TicTacToe - Das Spiel

var game = {
	wechsel: 0, // 0 = Spieler X -- 1 = Spieler O
	player: "X",
	
	init: function(){
		console.log("Spielfeld wird Initialisiert!");
		game.draw.set();
		game.draw.update();
	},
	
	switchPlayer: function(){
		if(this.wechsel == 0){
			this.wechsel = 1;
			this.player = "O";
			//console.log(this.player);
		} else{
			this.wechsel = 0;
			this.player = "X";
			//console.log(this.player);
		}
	},
	
	setMarker: function(x){
		document.getElementById(x).removeAttribute("onmouseenter");
		document.getElementById(x).removeAttribute("onmouseleave");
		document.getElementById(x).removeAttribute("onclick");
	},
	
	over: function(){
		for(var i = 0; i < game.draw.gameArray.length; i++){
			document.getElementById(i).removeAttribute("onmouseenter");
			document.getElementById(i).removeAttribute("onmouseleave");
			document.getElementById(i).removeAttribute("onclick");
		}
	},
	
	reset: function(){
		this.player = "X";
		this.wechsel = 0;
		game.draw.set();
		game.draw.update();
	}
}

game.draw = { // Das Speilfeld wird erstellt
	gameArray: [],
	
	set: function(){
		for(var i = 0; i < 9; i++){
			this.gameArray[i] = '<button id="' + i + '" onmouseenter="game.event.enter(' + i + ')" onmouseleave="game.event.leave(' + i + ')" onclick="game.event.click(' + i + ')">.</button>';
		}
	},
	
	update: function(){
		document.getElementById("test").innerHTML = "";
		
		document.getElementById("test").innerHTML += '<button id="reset" title="Setzt das Spiel zurück!" onclick="game.reset()">Reset</button>'
		document.getElementById("test").innerHTML += "</br>";
		document.getElementById("test").innerHTML += this.gameArray[0];
		document.getElementById("test").innerHTML += this.gameArray[1];
		document.getElementById("test").innerHTML += this.gameArray[2];
		document.getElementById("test").innerHTML += "</br>";
		document.getElementById("test").innerHTML += this.gameArray[3];
		document.getElementById("test").innerHTML += this.gameArray[4];
		document.getElementById("test").innerHTML += this.gameArray[5];
		document.getElementById("test").innerHTML += "</br>";
		document.getElementById("test").innerHTML += this.gameArray[6];
		document.getElementById("test").innerHTML += this.gameArray[7];
		document.getElementById("test").innerHTML += this.gameArray[8];
		document.getElementById("test").innerHTML += "</br>";
	}
}

game.event = {
	enter: function(x){
		//console.log("Funktion enter!");
		//document.getElementById("oL").style.backgroundColor = "green";
		document.getElementById(x).innerHTML = game.player;
	},
	
	leave: function(x){
		//console.log("Funktion leave!");
		//document.getElementById("oL").style.backgroundColor = "gray";
		document.getElementById(x).innerHTML = ".";
	},
	
	click: function(x){
		console.log("Funktion click!");
		game.setMarker(x);
		game.auswertung.teste();
		game.switchPlayer();
	}
}

game.auswertung = {
	/* Button Pattern:
		0 | 1 | 2
		3 | 4 | 5
		6 | 7 | 8
	*/
	
	teste: function(){
		/*if(	document.getElementById(0).innerHTML == "X" && document.getElementById(1).innerHTML == "X" && document.getElementById(2).innerHTML == "X" ||
			document.getElementById(3).innerHTML == "X" && document.getElementById(4).innerHTML == "X" && document.getElementById(5).innerHTML == "X" ||
			document.getElementById(6).innerHTML == "X" && document.getElementById(7).innerHTML == "X" && document.getElementById(8).innerHTML == "X" ||
			
			document.getElementById(0).innerHTML == "X" && document.getElementById(3).innerHTML == "X" && document.getElementById(6).innerHTML == "X" ||
			document.getElementById(1).innerHTML == "X" && document.getElementById(4).innerHTML == "X" && document.getElementById(7).innerHTML == "X" ||
			document.getElementById(2).innerHTML == "X" && document.getElementById(5).innerHTML == "X" && document.getElementById(8).innerHTML == "X" ||
			
			document.getElementById(0).innerHTML == "X" && document.getElementById(4).innerHTML == "X" && document.getElementById(8).innerHTML == "X" ||
			document.getElementById(6).innerHTML == "X" && document.getElementById(4).innerHTML == "X" && document.getElementById(2).innerHTML == "X" ||
			
			document.getElementById(0).innerHTML == "O" && document.getElementById(1).innerHTML == "O" && document.getElementById(2).innerHTML == "O" ||
			document.getElementById(3).innerHTML == "O" && document.getElementById(4).innerHTML == "O" && document.getElementById(5).innerHTML == "O" ||
			document.getElementById(6).innerHTML == "O" && document.getElementById(7).innerHTML == "O" && document.getElementById(8).innerHTML == "O" ||
			
			document.getElementById(0).innerHTML == "O" && document.getElementById(3).innerHTML == "O" && document.getElementById(6).innerHTML == "O" ||
			document.getElementById(1).innerHTML == "O" && document.getElementById(4).innerHTML == "O" && document.getElementById(7).innerHTML == "O" ||
			document.getElementById(2).innerHTML == "O" && document.getElementById(5).innerHTML == "O" && document.getElementById(8).innerHTML == "O" ||
			
			document.getElementById(0).innerHTML == "O" && document.getElementById(4).innerHTML == "O" && document.getElementById(8).innerHTML == "O" ||
			document.getElementById(6).innerHTML == "O" && document.getElementById(4).innerHTML == "O" && document.getElementById(2).innerHTML == "O" 
			){
			
			alert("Spieler: " + game.player + " hat Gewonnen!");
			game.over();
			
		}else{
			console.log("Ein Fehler ist aufgetreten");
		}*/
		ausW(0,1,2,"X");
		ausW(3,4,5,"X");
		ausW(6,7,8,"X");
		ausW(0,3,6,"X");
		ausW(1,4,7,"X");
		ausW(2,5,8,"X");
		ausW(0,4,8,"X");
		ausW(2,4,6,"X");
		
		ausW(0,1,2,"O");
		ausW(3,4,5,"O");
		ausW(6,7,8,"O");
		ausW(0,3,6,"O");
		ausW(1,4,7,"O");
		ausW(2,5,8,"O");
		ausW(0,4,8,"O");
		ausW(2,4,6,"O");
		
		function ausW(x,y,z,player){
			if(document.getElementById(x).innerHTML == player && document.getElementById(y).innerHTML == player && document.getElementById(z).innerHTML == player){
				game.animation.start(x,y,z);
				//alert("Spieler: " + game.player + " hat Gewonnen!");
				game.over();
			} else {
				
			}
		}
	},
}

game.animation = {
	start: function(x,y,z){
		document.getElementById(x).style.backgroundColor = "green";
		document.getElementById(y).style.backgroundColor = "green";
		document.getElementById(z).style.backgroundColor = "green";
	}
}
