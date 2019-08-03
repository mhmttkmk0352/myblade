



var myc = document.getElementById("myc");
var ctx = myc.getContext("2d");
myc.width = window.innerWidth;
myc.height = window.innerHeight;

var mycSabit = document.getElementById("mycSabit");
var ctxSabit = mycSabit.getContext("2d");
mycSabit.width = window.innerWidth;
mycSabit.height = window.innerHeight;



var mycTuslar = document.getElementById("mycTuslar");
var ctxTuslar = mycTuslar.getContext("2d");
mycTuslar.width = window.innerWidth;
mycTuslar.height = window.innerHeight;

ctxTuslar.clearRect(0,0,mycTuslar.width, mycTuslar.height);

ctxTuslar.fillStyle = "grey";
ctxTuslar.font = "16px Arial";
ctxTuslar.fillText("Q", mycTuslar.width/2, mycTuslar.height-20);



ctx.fillStyle = "black";
ctx.fillRect(0,0, myc.width, myc.height);


var topac = new Image();
topac.src = "res/topac.png";

var topac0 = new Image();
topac0.src = "res/topac0.png";

var topac1 = new Image();
topac1.src = "res/topac1.png";

var topac2 = new Image();
topac2.src = "res/topac2.png";

var topac3 = new Image();
topac3.src = "res/topac3.png";

var topac4 = new Image();
topac4.src = "res/topac4.png";

var topac5 = new Image();
topac5.src = "res/topac5.png";

var topac6 = new Image();
topac6.src = "res/topac6.png";

var topac7 = new Image();
topac7.src = "res/topac7.png";

var topac8 = new Image();
topac8.src = "res/topac8.png";

var topac9 = new Image();
topac9.src = "res/topac9.png";




var zeminRes = new Image();
zeminRes.src = "res/road.jpg";
var zeminRes2 = new Image();
zeminRes2.src = "res/road2.jpg";

var yer = new Image();
yer.src = "res/yer.png";


var gucRes = new Image();
gucRes.src = "res/guc.png";
var hizRes = new Image();
hizRes.src = "res/karakter.png";
var bombaRes = new Image();
bombaRes.src = "res/bomb.png";



function topaci_ekranda_ortala(){
	//var ortaX = Math.floor((myc.width/2)-(topac.width/2));
	//var ortaY = Math.floor((myc.height/2)-(topac.height/2));
	var ortaX = Math.floor((myc.width/2));
	var ortaY = Math.floor((myc.height/2));	
	return {ortaX: ortaX, ortaY: ortaY}
}

function topac_Ciz(sid,sidBilgi){
	var x = 0;
	var y = 0;

	var ortaX = topaci_ekranda_ortala().ortaX;
	var ortaY = topaci_ekranda_ortala().ortaY;
	var	benimX = sidBilgi.x;
	var	benimY = sidBilgi.y;
	var	benimC = sidBilgi.c;

	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = 15;
	ctx.shadowBlur = 10;
	ctx.font = "12px Arial";
	if (sid && sid == s.id){
		ctx.shadowColor = "black";
		//ctx.font = "12px Arial";
		ctx.fillText(sidBilgi.ad, ortaX+40, ortaY-16);
		ctx.fillStyle = "red";

		if (sidBilgi.t > 0){
			ctxTuslar.clearRect(0,0,mycTuslar.width, mycTuslar.height);
			ctxTuslar.fillStyle = "grey";
			ctxTuslar.font = "20px Arial";
			ctxTuslar.fillText("Q", mycTuslar.width/2-(10), mycTuslar.height-20);	
		}else{
			ctxTuslar.clearRect(0,0,mycTuslar.width, mycTuslar.height);

			ctxTuslar.beginPath();
			ctxTuslar.fillStyle = "#2b7205";
			ctxTuslar.arc(mycTuslar.width/2-(1), mycTuslar.height-29, 16,0, Math.PI*2);
			ctxTuslar.fill();

			ctxTuslar.fillStyle = "white";
			ctxTuslar.font = "24px Arial";
			ctxTuslar.fillText("Q", mycTuslar.width/2-(10), mycTuslar.height-20);			
		}


		if (benimC >= 64){
			benimC = 64;
		}

		farkX = ortaX-sidBilgi.x;
		farkY = ortaY-sidBilgi.y;
		x = ortaX;
		y = ortaY;
		

	}
	else{
		ctx.shadowColor = "black";
		//ctx.font = "12px Arial";
		ctx.fillText(sidBilgi.ad, sidBilgi.x+farkX+40, sidBilgi.y+farkY-16);
		ctx.fillStyle = "green";
		x = sidBilgi.x+farkX;
		y = sidBilgi.y+farkY;
	}


	if (sidBilgi.r == "k"){	
		ctx.shadowColor="red";
		ctx.shadowBlur = 6;
	}
	else if(sidBilgi.r == "b"){
		ctx.shadowColor = "white";
		ctx.shadowBlur = 6;
	}
	else{

		if (sidBilgi.r == "m"){		
			ctx.shadowColor = "blue";
			ctx.shadowBlur = 35;
		}
		else{
				
			ctx.shadowColor = "black";
			ctx.shadowBlur = 6;		
		}		

	}


	if (benimC > 64){

		ctx.beginPath();
		ctx.rect(x, y-10, 64, 10);
		ctx.fillStyle = "yellow";
		ctx.fill();



		ctx.beginPath();
		ctx.rect(x,y-10, 64,10);
		ctx.stokeStyle="#ccc";
		ctx.stroke();	






	}
	else{
		//Güç göstergesi gerçek
		ctx.beginPath();
		ctx.rect(x, y-10, benimC, 10);
		ctx.fillStyle = "yellow";
		ctx.fill();

		//Güç Göstergesi Dış Çerçeve
		ctx.beginPath();
		ctx.rect(x,y-10, 64,10);
		ctx.stokeStyle="#ccc";
		ctx.stroke();


	}

	if (sidBilgi.d>0){
		ctx.beginPath();
		ctx.fillText("f" , x, y-40);
		ctx.fill();
	}



//drawRotated(aci);

tipeGoreTopac(sidBilgi,x,y);
	//ctx.drawImage(topac, x,y, topac.width, topac.height);


/*
	ctx.rotate((Math.PI/180)*25);

	ctx.translate(20, 20);

*/

	//ctx.drawImage(topac, topac.width/7*((sidBilgi.a)%7), 0, topac.width/7, topac.height, x, y, topac.width/7, topac.height);	

}



function tipeGoreTopac(sidBilgi,x,y){
	if (sidBilgi.b == 0){
		ctx.drawImage(topac0, x,y, topac.width, topac.height);
	}
	else if (sidBilgi.b == 1){
		ctx.drawImage(topac1, x,y, topac.width, topac.height);
	}
	else if (sidBilgi.b == 2){
		ctx.drawImage(topac2, x,y, topac.width, topac.height);
	}
	else if (sidBilgi.b == 3){
		ctx.drawImage(topac3, x,y, topac.width, topac.height);
	}
	else if (sidBilgi.b == 4){
		ctx.drawImage(topac4, x,y, topac.width, topac.height);
	}
	else if (sidBilgi.b == 5){
		ctx.drawImage(topac5, x,y, topac.width, topac.height);
	}
	else if (sidBilgi.b == 6){
		ctx.drawImage(topac6, x,y, topac.width, topac.height);
	}
	else if (sidBilgi.b == 7){
		ctx.drawImage(topac7, x,y, topac.width, topac.height);
	}
	else if (sidBilgi.b == 8){
		ctx.drawImage(topac8, x,y, topac.width, topac.height);
	}
	else if (sidBilgi.b == 9){
		ctx.drawImage(topac9, x,y, topac.width, topac.height);
	}

}

function kaliciNesneCiz(kaliciNesneler){


	// ÖNCE ZEMİN
	for (n in kaliciNesneler){


		var x = kaliciNesneler[n].x;
		var y = kaliciNesneler[n].y;
		var t = kaliciNesneler[n].t;

		if (t == "z"){
			ctxSabit.drawImage(zeminRes, 0,0, zeminRes.width, zeminRes.height, x+farkX, y+farkY, zeminRes.width, zeminRes.height);
		}
		else if (t == "r"){
			ctxSabit.drawImage(zeminRes2, 0,0, zeminRes.width, zeminRes.height, x+farkX, y+farkY, zeminRes.width, zeminRes.height);
		}
		else if (t == "y"){
			ctxSabit.drawImage(yer, 0,0, zeminRes.width, zeminRes.height, x+farkX, y+farkY, zeminRes.width, zeminRes.height);
		}


		
	}

	// SONRA DİĞER SABİTLER
	for (n in kaliciNesneler){


		var x = kaliciNesneler[n].x;
		var y = kaliciNesneler[n].y;
		var t = kaliciNesneler[n].t;

		if (t == "g"){
			ctxSabit.drawImage(gucRes, 0,0, gucRes.width, gucRes.height, x+farkX, y+farkY, gucRes.width, gucRes.height);
		}
		else if (t == "b"){
			ctxSabit.drawImage(bombaRes,0,0,bombaRes.width, bombaRes.height, x+farkX, y+farkY, bombaRes.width, bombaRes.height);
			ctxSabit.shadowColor = "black";
			ctxSabit.shadowBlur = 15;
			ctxSabit.shadowOffsetX = 10;
			ctxSabit.shadowOffsetY = 15;
		}
		else if(t == "h"){
			ctxSabit.drawImage(hizRes, 0,0, hizRes.width, hizRes.height, x+farkX, y+farkY, hizRes.width, hizRes.height);		
		}

	}
}


function render(data){

	ctxSabit.clearRect(0,0, myc.width, myc.height);
	ctx.clearRect(0,0, myc.width, myc.height);


	kaliciNesneCiz(kaliciNesneler);	

	if (data && data.oyuncular){

		if(data.nesne && data.nesne.length>0){
			data.nesne.forEach(function(v,k){
				nesne_Ciz(v);
			});
		}

		for (sid in data.oyuncular){
			topac_Ciz(sid, data.oyuncular[sid]);
		}
		
	}

}






