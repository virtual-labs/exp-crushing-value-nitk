var p=Math.floor(Math.random()*(2));
var flag=true;
var screensVal = 0;
var repeat = 0;
var tries = 0;
var k = p;
var x;
var c1;
var c2;
var c3;
var c4;
var c5;
var t1;
var b1,val1,val2;
var span1;

//Questions object
var questions = {
	ans1:0,
	options:[],
	nextFunction:function(){},
	// setOptions:function(d1,d2,d3,d4){
		// questions.options = new Array(d1,d2,d3,d4);
	// },
	setOptions:function(d1,d2,d3,d4,d5){
		if(d5 == 0 && d4!=0)
			questions.options = new Array(d1,d2,d3,d4);
		else if(d4 == 0 && d5 == 0)
		{
			questions.options = new Array(d1,d2,d3);
		}
		else 
		{
			questions.options = new Array(d1,d2,d3,d4,d5);
		}
	},
	setAns:function(ans){
		questions.ans1 = ans;
	},
	frameQuestions:function(qun){
		var myDiv  = document.getElementById("question-div");
		var myDiv1 = document.getElementById("divq");
		myDiv.style.visibility = "visible";
		document.getElementById("divq").innerHTML = qun;
		//Create and append select list
		var selectList = document.createElement("select");
		selectList.setAttribute("id", "mySelect");
		selectList.setAttribute("autocomplete", "off");
		// selectList.setAttribute("onchange", "questions.setAnswer()");
		
		var button1 = document.createElement("input");
		button1.setAttribute("onclick","questions.setAnswer(this)");
		button1.setAttribute("type","button");
		button1.setAttribute("value","OK");
		button1.setAttribute("style","cursor:pointer");
		
		// Appending the contents to the division
		myDiv1.appendChild(selectList);
		myDiv1.appendChild(button1);

	//Create and append the options
		for (var i = 0; i < questions.options.length; i++) {
			var opt = document.createElement("option");
			opt.setAttribute("value", questions.options[i]);
			opt.innerHTML = questions.options[i];
			selectList.appendChild(opt);
		}
	},
	setAnswer:function(ev){
		var x = document.getElementById("mySelect");
		var i = x.selectedIndex;
		if(i == 0)
		{
			var dispAns = document.createElement("p");
			dispAns.innerHTML = "You have not selected any value";
			document.getElementById("divq").appendChild(dispAns);		
			setTimeout(function(){
				dispAns.innerHTML = "";
			},200);
		}
		else if(i == questions.ans1)
		{
			ev.onclick = "";
			var dispAns = document.createElement("p");
			dispAns.innerHTML = "You are right<span class='boldClass'>&#128077;</span> ";
			document.getElementById("divq").appendChild(dispAns);		
			questions.callNextFunction();
		}
		else
		{
			ev.onclick = "";
			var dispAns = document.createElement("p");
			dispAns.innerHTML = "You are Wrong<span class='boldClass'>&#128078;</span><br>Answer is: "+x.options[questions.ans1].text;
			document.getElementById("divq").appendChild(dispAns);		
			questions.callNextFunction();
		}
	},
	setCallBack:function(cb){
		nextFunction = cb;
	},
	callNextFunction:function()
	{
		setTimeout(function()
		{
			// document.getElementById("question-div").innerHTML = "";
			document.getElementById("question-div").style.visibility = "hidden";
			nextFunction();
		},800);
	}
}
// $(function()
// {
	// $('input').on('input', function() {
		// this.value = this.value.match(/\d*(\.\d*)?/)[0];
	// });
// });

//on click of next button
function navNext()
{

    for (temp = 0; temp <=11; temp++) 
    { 
        document.getElementById ('canvas'+temp).style.visibility="hidden";
    }
    simsubscreennum+=1;
    document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
    document.getElementById('nextButton').style.visibility="hidden";
    magic();
}


//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
    if(document.getElementById('arrow1').style.visibility=="hidden")
        document.getElementById('arrow1').style.visibility="visible";
    else
        document.getElementById('arrow1').style.visibility="hidden";
}
//stop blinking arrow
function myStopFunction() 
{
    clearInterval(myInt);
    document.getElementById('arrow1').style.visibility="hidden";
}

//animate arrow at position
function animateArrowATPosition(left,top,degg)
{
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left:"+left+"px; top: "+top+"px; height: 30px; z-index: 10;";
	document.getElementById("arrow1").style.WebkitTransform = "rotate("+degg+"deg)"; 
	 // Code for IE9
	document.getElementById("arrow1").style.msTransform = "rotate("+degg+"deg)";
	 // Standard syntax
	document.getElementById("arrow1").style.transform = "rotate("+degg+"deg)";
}
function magic()
{
	
	if(simsubscreennum==1)
	{
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(305,470,90);	
		document.getElementById("can1-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("can1-2").onclick="";
			document.getElementById("can1-2").style.visibility="hidden";
			document.getElementById('can1-5').style.visibility="visible";
			document.getElementById("can1-5").innerHTML = "00.01";	
			document.getElementById('can1-4').style.visibility="visible";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			animateArrowATPosition(150,130,-90);	
			document.getElementById("can1-4").onclick=function()
			{
				myStopFunction();
				document.getElementById("can1-4").onclick="";	
				document.getElementById("can1-4").style.animation = "movePlate 1s forwards linear";
				setTimeout(function()
				{
					document.getElementById("can1-5").innerHTML = "150.00";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					animateArrowATPosition(415,470,90);	
					document.getElementById("can1-3").onclick=function()
					{
						myStopFunction();
						document.getElementById("can1-3").onclick="";
						document.getElementById('can1-3').style.visibility="hidden";
						document.getElementById("can1-5").innerHTML = "00.00";
						document.getElementById("can1-6").style.visibility = "visible";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						animateArrowATPosition(595,220,360);	
						document.getElementById("can1-6").onclick=function()
						{
							myStopFunction();
							document.getElementById("can1-6").onclick="";
							document.getElementById("can1-6").style.transformOrigin = "100% 80%";
							document.getElementById("can1-6").style.animation = "moveAgg 1s forwards linear";
							setTimeout(function()
							{
								document.getElementById('can1-6').style.visibility="hidden";
								document.getElementById("can1-4").src = "images/plate2.png";
								document.getElementById("can1-5").innerHTML = "3500.00";
								document.getElementById('nextButton').style.visibility="visible";
							},1300);
						}						
					}
				},1000);
			}
		}
    }
	else if (simsubscreennum==2)
	{
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="trial "+(repeat+1);
		document.getElementById("can1-1").style.visibility="hidden";
		document.getElementById("can1-4").style.visibility="hidden";
		document.getElementById("can1-5").style.visibility="hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(330,335,270);
		document.getElementById("can2-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("can2-2").onclick = "";
			document.getElementById("can2-2").style.animation="moveSeive10 1.5s forwards";
			setTimeout(function()
			{
				myInt = setInterval(function(){ animatearrow(); }, 500);
				animateArrowATPosition(540,335,270);
				document.getElementById("can2-3").onclick=function()
				{
					myStopFunction();
					document.getElementById("can2-3").onclick = "";
					document.getElementById("can2-3").style.animation="moveSeive12 1.5s forwards";
					setTimeout(function()
					{
						document.getElementById("can2-4").style.visibility="visible";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						animateArrowATPosition(350,225,360);
						document.getElementById("can2-4").onclick=function()
						{
							myStopFunction();
							document.getElementById("can2-4").onclick = "";
							document.getElementById("can2-4").style.transformOrigin = "100% 80%";
							document.getElementById("can2-4").style.animation = "moveAgg 1s forwards";
							setTimeout(function()
							{
								document.getElementById("can2-3").src = "images/filled125.png";
								document.getElementById("can2-4").style.visibility="hidden";
								document.getElementById("can2-5").style.visibility="visible";
								document.getElementById("can2-6").style.visibility="visible";
								myInt = setInterval(function(){ animatearrow(); }, 500);
								animateArrowATPosition(375,230,360);
								document.getElementById("can2-6").onclick=function()
								{
									myStopFunction();
									document.getElementById("can2-6").onclick = "";
									document.getElementById("can2-6").style.animation = "shiftCap 1s forwards";
									setTimeout(function()
									{
										document.getElementById("nextButton").style.visibility = "visible";
									},1600);
								}
							},1600);
						}
					},1800);
				}
			},1800);
		}			
		
    }
	else if (simsubscreennum==3)
	{
		document.getElementById("nextButton").style.visibility = "hidden";
		for(var i = 1;i<=6;i++)
		{
			if(i==4)continue;
			else 
			document.getElementById("can2-"+i).style.visibility = "hidden";
		}
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(200,350,360);
		document.getElementById("can3-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("can3-2").onclick = "";
			document.getElementById("can3-2").style.animation = "moveSieveSet 1s forwards";
			setTimeout(function()
			{
				document.getElementById("can3-2").style.width="110px";
				document.getElementById("can3-3").style.visibility = "visible";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				animateArrowATPosition(205,160,270);
				document.getElementById("can3-3").onclick=function()
				{
					myStopFunction();
					document.getElementById("can3-3").onclick = "";
					document.getElementById("can3-3").style = "position:absolute; left:437.5px; top:195px;";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					animateArrowATPosition(438,182.5,180);
					document.getElementById("can3-1l").onclick=function()
					{
						myStopFunction();
						document.getElementById("can3-1l").onclick = "";
						document.getElementById("can3-1l").style.top="176.5px";
						myInt = setInterval(function(){ animatearrow(); }, 500);
						animateArrowATPosition(625,190,360);
						document.getElementById("can3-1r").onclick=function()
						{
							myStopFunction();
							document.getElementById("can3-1r").onclick = "";
							document.getElementById("can3-1r").style.top="183px";
							document.getElementById("can3-3").style.visibility = "visible";
							myInt = setInterval(function(){ animatearrow(); }, 500);
							animateArrowATPosition(470,455,90);
							document.getElementById("can3-1on").onclick=function()
							{
								myStopFunction();
								document.getElementById("can3-1on").style.visibility = "hidden";
								document.getElementById("can3-1onon").style.visibility = "visible";
								document.getElementById("can3-2").style="position:absolute; left:450px; top:195px; width:110px;";
								document.getElementById("can3-2").style.animation="shake 0.5s 8";
								setTimeout(function()
								{
									document.getElementById("nextButton").style.visibility="visible";
								},4000);
							}
						}
					}
				}
			},1100);
		}
	}
	else if (simsubscreennum==4)
	{
		document.getElementById("nextButton").style.visibility = "hidden";
		document.getElementById("can3-1").style.visibility = "hidden";
		document.getElementById("can3-1l").style.visibility = "hidden";
		document.getElementById("can3-1r").style.visibility = "hidden";
		document.getElementById("can3-1onon").style.visibility = "hidden";
		document.getElementById("can3-2").style.visibility = "hidden";
		document.getElementById("can3-3").style.visibility = "hidden";
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(630,227.5,360);
		document.getElementById("can4-3r").onclick=function()
		{
			myStopFunction();
			document.getElementById("can4-3r").onclick="";
			document.getElementById("can4-3r").style.top="145px";
			myInt = setInterval(function(){ animatearrow(); }, 500);
			animateArrowATPosition(440,227,180);
			document.getElementById("can4-3l").onclick=function()
			{
				myStopFunction();
				document.getElementById("can4-3l").onclick="";
				document.getElementById("can4-3l").style.top="140px";
				myInt = setInterval(function(){ animatearrow(); }, 500);
				animateArrowATPosition(525,200,270);
				document.getElementById("can4-3").onclick=function()
				{
					myStopFunction();
					document.getElementById("can4-3").style.visibility="hidden";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					animateArrowATPosition(525,220,270);
					document.getElementById("can4-2").onclick=function()
					{
						myStopFunction();
						document.getElementById("can4-2").style.visibility="hidden";
						document.getElementById("can4-4").style.visibility="visible";
						document.getElementById("can4-5").style.visibility="visible";
						document.getElementById("can4-6").style.visibility="visible";
						document.getElementById("can4-7").style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById("can4-1").style.visibility="hidden";
							document.getElementById("can4-3l").style.visibility="hidden";
							document.getElementById("can4-3r").style.visibility="hidden";
							myInt = setInterval(function(){ animatearrow(); }, 500);
							animateArrowATPosition(125,255,270);
							document.getElementById("can4-7").onclick=function()
							{
								myStopFunction();
								document.getElementById("can4-7").style.visibility="hidden";
								myInt = setInterval(function(){ animatearrow(); }, 500);
								animateArrowATPosition(125,300,270);
								document.getElementById("can4-6").onclick=function()
								{
									myStopFunction();
									document.getElementById("can4-6").onclick="";		
									document.getElementById("can4-6").style="position:absolute; left:230px; top:335px;";
									document.getElementById("can4-8").style.visibility="visible";
									myInt = setInterval(function(){ animatearrow(); }, 500);
									animateArrowATPosition(220,365,360);
									document.getElementById("can4-5").onclick=function()
									{
										myStopFunction();
										document.getElementById("can4-5").onclick="";		
										document.getElementById("can4-5").style="position:absolute; left:440px; top:335px;";
										document.getElementById("can4-8").style="position:absolute; left:467.5px; top:360px;";
										setTimeout(function()
										{
											document.getElementById("can4-6").style.visibility="hidden";
											document.getElementById("can4-4").style.visibility="hidden";
											document.getElementById("can4-9").style.visibility="visible";
											myInt = setInterval(function(){ animatearrow(); }, 500);
											animateArrowATPosition(420,400,180);
											document.getElementById("can4-5").onclick=function()
											{
												myStopFunction();
												document.getElementById("can4-5").onclick="";	
												document.getElementById("can4-5").style.visibility="hidden";
												document.getElementById("can4-8").style.visibility="hidden";									
												document.getElementById("can4-10").style.visibility="visible";
												document.getElementById("can4-10").style.animation="moveSeive10-1 1.5s forwards";
												setTimeout(function()
												{
													document.getElementById("can4-10").style="position:absolute; left:115px; top:150px;";
													document.getElementById("can4-10").style.transformOrigin="100% 80%";
													document.getElementById("can4-10").style.animation="moveAgg 1.5s forwards";
													setTimeout(function()
													{
														document.getElementById("can4-10").style.visibility="hidden";
														document.getElementById("can4-11").style.visibility="visible";
														document.getElementById("can4-112").style.visibility="visible";
														document.getElementById("can4-113").style.visibility="visible";
														document.getElementById("can4-114").style.visibility="visible";
														document.getElementById("nextButton").style.visibility="visible";
													},1600);
												},1600);
											}												
										},800);
									}
								}
							}
						},1200);
					}
				}
			}
		}
		
	}	
	else if (simsubscreennum==5)
	{
		document.getElementById('trial').style="visibility:visible ;left: 700px; top: 100px;position: absolute;font-weight: bold;text-transform: uppercase;";
		document.getElementById('trial').innerHTML="trial "+(repeat+1);
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("can4-11").style.visibility="hidden";
		document.getElementById("can4-112").style.visibility="hidden";
		document.getElementById("can4-113").style.visibility="hidden";
		document.getElementById("can4-114").style.visibility="hidden";
		document.getElementById("can4-9").style.visibility="hidden";
		if(repeat == 1)
		{
			do{
				p=Math.floor(Math.random()*(2));
			}while(p == k);
			document.getElementById("finalForm").style.visibility = "hidden";
			document.getElementById("canvas12").style.visibility = "hidden";
			// document.getElementById('can5-1').style.visibility="visible";
			// document.getElementById('can5-1a').style.visibility="visible";
			// document.getElementById('can5-1b').style.visibility="visible";
			// document.getElementById('can5-2').style.visibility="visible";
			// document.getElementById('can5-2').style.transformOrigin = "";
			// document.getElementById('can5-2').style.animation="";
			// document.getElementById('p5-1').style.visibility="visible";
			// document.getElementById('p5-2').style.visibility="visible";
			// document.getElementById('w1span').innerHTML= "_______";
			// document.getElementById('p5-2').innerHTML = "";
			count = 0;
			flag = true;	
			document.getElementById("can5-31").style.visibility="visible";
			document.getElementById("can5-32").style.visibility="visible";
			document.getElementById("can5-33").style.visibility="visible";
			document.getElementById("can5-34").style.visibility="visible";
			document.getElementById("can5-4").style.visibility="visible";
			document.getElementById("can5-2").style.visibility="visible";
			document.getElementById("can5-2").style.left="405px";
			document.getElementById("can5-2").style.top="220px";
			setTimeout(function()
			{
				if(repeat == 0)
				{
					var q1 = Object.create(questions);
					generateQuestion(q1,"Aggregate used here is retained in sieve: ","","12.5mm","10mm","PAN","1.75mm",2,fillCylinder,150,150,200,150);
				}
				else{
					fillCylinder();
				}
			},500);
		}
		else if(repeat == 0){
		myInt = setInterval(function(){ animatearrow(); }, 500);
		animateArrowATPosition(437.5,470,90);
		document.getElementById("can5-1a").onclick=function()
		{
			myStopFunction();
			document.getElementById("can5-1a").onclick="";
			document.getElementById("can5-1a").style.visibility="hidden";
			setTimeout(function()
			{
				document.getElementById("p5-2").innerHTML="00.01";
			},650);
			document.getElementById("can5-1").style.backgroundColor="lightgrey";
			setTimeout(function()
			{
				myInt = setInterval(function(){ animatearrow(); }, 500);
				animateArrowATPosition(542.5,470,90);
				document.getElementById("can5-1b").onclick=function(){
					myStopFunction();
					document.getElementById("can5-1b").onclick="";
					document.getElementById("can5-1b").style.visibility="hidden";
					document.getElementById("p5-2").innerHTML="00.00";
					myInt = setInterval(function(){ animatearrow(); }, 500);
					animateArrowATPosition(220,345,360);
					document.getElementById("can5-2").onclick=function()
					{
						myStopFunction();
						document.getElementById("can5-2").onclick="";
						document.getElementById("can5-2").style.animation="moveCylinder 1.5s forwards";
						setTimeout(function()
						{
							document.getElementById("w1span").innerHTML=emptyWeight+".00";
							document.getElementById("p5-2").innerHTML=emptyWeight+".00";
							setTimeout(function()
							{
								document.getElementById("can5-1").style.visibility="hidden";
								document.getElementById("p5-1").style.visibility="hidden";
								document.getElementById("p5-2").style.visibility="hidden";
								document.getElementById("can5-31").style.visibility="visible";
								document.getElementById("can5-32").style.visibility="visible";
								document.getElementById("can5-33").style.visibility="visible";
								document.getElementById("can5-34").style.visibility="visible";
								document.getElementById("can5-4").style.visibility="visible";
								setTimeout(function()
								{
									if(repeat == 0)
									{
										var q1 = Object.create(questions);
										generateQuestion(q1,"Aggregate used here is retained in sieve: ","","12.5mm","10mm","PAN","1.75mm",2,fillCylinder,150,150,200,150);
									}
									else{
										fillCylinder();
									}
								},500);
							},1650);
						},1600);
					}
				}
			},800);

		}
		}
		
	}
	else if(simsubscreennum==6)
	{
		if(repeat == 1)
		{
			document.getElementById('can6-1').style.visibility="visible";
			document.getElementById('can6-1a').style.visibility="visible";
			document.getElementById('can6-1b').style.visibility="visible";
			document.getElementById('can6-2').style.visibility="visible";
			document.getElementById('can6-2').style.transformOrigin = "";
			document.getElementById('can6-2').style.animation="";
			document.getElementById('p6-1').style.visibility="visible";
			document.getElementById('p6-2').style.visibility="visible";
			document.getElementById('w2span').innerHTML = "__________";
			document.getElementById('p6-2').innerHTML = "";	
		}
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("can5-9").style.visibility="hidden";
		document.getElementById("can5-31").style.visibility="hidden";
		document.getElementById("can5-32").style.visibility="hidden";
		document.getElementById("can5-33").style.visibility="hidden";
		document.getElementById("can5-34").style.visibility="hidden";
		document.getElementById("can5-4").style.visibility="hidden";
		myInt=setInterval(function(){animatearrow();},500);
		animateArrowATPosition(115.5,480,90);
		document.getElementById("can6-1a").onclick=function()
		{
			myStopFunction();
			document.getElementById("can6-1a").onclick="";
			document.getElementById("can6-1a").style.visibility="hidden";
			setTimeout(function()
			{
				document.getElementById("p6-2").innerHTML="00.01";
			},650);
			document.getElementById("can6-1").style.backgroundColor="lightgrey";
			myInt=setInterval(function(){animatearrow();},500);
			animateArrowATPosition(217.5,480,90);
			document.getElementById("can6-1b").onclick=function(){
			myStopFunction();
			document.getElementById("can6-1b").onclick="";
			document.getElementById("can6-1b").style.visibility="hidden";
			document.getElementById("p6-2").innerHTML="00.00";
			myInt=setInterval(function(){animatearrow();},500);
			animateArrowATPosition(450,300,180);
			document.getElementById("can6-2").onclick=function()
			{
				myStopFunction();
				document.getElementById("can6-2").onclick="";
				document.getElementById("can6-2").style.animation="shiftCyl 1.5s forwards";
				setTimeout(function()
				{
					document.getElementById("w2span").innerHTML=data[p][0]+".00";
					document.getElementById("p6-2").innerHTML="   " +data[p][0]+".00";
					document.getElementById("nextButton").style.visibility="visible";
				},1550);
			}
			}
		}
			
	}
	else if(simsubscreennum==7)
	{
		if(repeat == 1)
		{
			document.getElementById('can7-1').style.visibility="visible";
			document.getElementById('can7-2').style.visibility="visible";
			document.getElementById('can7-3').style = "position:absolute; left:350px; top:250px;width:16%;cursor:pointer;visibility:hidden";
			document.getElementById('can7-2').style.transformOrigin = "";
			document.getElementById('can7-2').style.animation="";
			document.getElementById('can7-4').style.transformOrigin = "";
			document.getElementById('can7-4').style.animation="";
		}
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("can6-1").style.visibility="hidden";
		document.getElementById("can6-2").style.visibility="hidden";
		document.getElementById("p6-1").style.visibility="hidden";	
		document.getElementById("p6-2").style.visibility="hidden";	
		myInt=setInterval(function(){animatearrow();},500);
		animateArrowATPosition(505,300,360);
		document.getElementById("can7-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("can7-2").onclick="";
			document.getElementById("can7-2").style.animation="shiftCylToBasePlate 1.5s forwards";
			setTimeout(function()
			{
				document.getElementById("can7-3").style.visibility="visible";	
				myInt=setInterval(function(){animatearrow();},500);
				animateArrowATPosition(495,300,360);
				document.getElementById("can7-3").onclick=function()
				{
					myStopFunction();
					document.getElementById("can7-3").onclick="";
					document.getElementById("can7-3").style.visibility="hidden";	
					document.getElementById("can7-4").style.visibility="visible";	
					document.getElementById("can7-4").style.animation="shiftCylToHandPlate 1.5s forwards";
					setTimeout(function()
					{
						document.getElementById("can7-4").style.visibility="hidden";	
						document.getElementById("can7-3").style.visibility="visible";	
						document.getElementById("can7-3").style.left="174px";
						document.getElementById("can7-3").style.top="166px";							
						document.getElementById("nextButton").style.visibility = "visible";	
					},1600);
				}	
			},1800);
		}	
	}
	else if(simsubscreennum==8)
	{
		if(repeat == 1)
		{
			document.getElementById('can8-1').style.visibility="visible";
			document.getElementById('can8-1').src="images/mainsetup.png";
			document.getElementById('can8-3').src="images/plungSetup2.png";
			document.getElementById('can8-1a').style.visibility="visible";
			document.getElementById('can8-2').style.visibility="visible";
			document.getElementById('can8-4').style.visibility="visible";
			document.getElementById('can8-6a').style.visibility="visible";
			document.getElementById('can8-6b').style.visibility="visible";
			document.getElementById('can8-2a').style.transformOrigin = "";
			document.getElementById('can8-2a').style.animation="";
			document.getElementById('can8-4').style.transformOrigin = "";
			document.getElementById('can8-4').style.animation="";
			screensVal = 0;
		}
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("can7-1").style.visibility="hidden";
		document.getElementById("can7-2").style.visibility="hidden";
		document.getElementById("can7-3").style.visibility="hidden";	
		myInt=setInterval(function(){animatearrow();},500);
		animateArrowATPosition(620,360,360);
		document.getElementById("can8-2").onclick=function()
		{
			myStopFunction();
			document.getElementById("can8-2").onclick="";
			document.getElementById("can8-2").style.visibility="hidden";	
			document.getElementById("can8-2a").style.visibility="visible";
			document.getElementById("can8-2a").style.animation="plungerSetupMove 1.5s forwards";
			setTimeout(function()
			{
				document.getElementById("can8-2a").style.visibility="hidden";	
				document.getElementById("can8-3").style.visibility="visible";
				setDialog("Adjust the machine to touch the cylinder and plunger in proper position.",480,300,120,280);
			},1600);
		}
	}
	else if(simsubscreennum==9)
	{
		if(repeat == 1)
		{
			document.getElementById('can9-1').src="images/mainsetup3.png";
			document.getElementById('can9-3').src="images/plungSetup3.png";
			document.getElementById('can9-1').style.visibility="visible";
			document.getElementById('can9-1a').style.visibility="visible";
			document.getElementById('can9-3').style.visibility="visible";
			document.getElementById('can9-4').style.visibility="visible";
			document.getElementById('can9-6a').style.visibility="visible";
			document.getElementById('can9-6b').style.visibility="visible";
			document.getElementById("can9-5").style.transformOrigin= "";
			document.getElementById("can9-5").style.animation="";
		}
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("can8-1").style.visibility="hidden";
		document.getElementById("can8-1a").style.visibility="hidden";
		document.getElementById("can8-2").style.visibility="hidden";
		document.getElementById("can8-3").style.visibility="hidden";
		document.getElementById("can8-4").style.visibility="hidden";
		document.getElementById("can8-6a").style.visibility="hidden";
		document.getElementById("can8-6b").style.visibility="hidden";
		document.getElementById("can9-4").style.transformOrigin= "50% 30%";
		document.getElementById("can9-4").style.animation="needleMove forwards";
		myInt=setInterval(function(){animatearrow();},500);
		animateArrowATPosition(80,410,180);
		document.getElementById("can9-5").style.visibility = "visible";
		document.getElementById("can9-5").onclick=function()
		{
			myStopFunction();
			document.getElementById("can9-5").onclick="";
			document.getElementById("can9-5").style.transformOrigin="13% 15%";
			document.getElementById("can9-5").style.animation="rotateToSetTonns 1s reverse";
			setTimeout(function()
			{
				document.getElementById("can9-5").style.visibility = "hidden";
				resetMachine();
			},1100);
		}
	}
	else if(simsubscreennum==10)
	{
		if(repeat == 1)
		{
			document.getElementById('can10-1').style.visibility="visible";
			document.getElementById('can10-2').style="position:absolute; left:179px; top:220px;cursor:pointer;visibility:visible";
			document.getElementById('can10-3').style="position:absolute; left:174px; top:166px;width:16%;cursor:pointer;visibility:visible";
			document.getElementById('can10-10').style="position:absolute; left:9.75px; top:295px; visibility:hidden;cursor:pointer";
			document.getElementById('can10-12').style="position:absolute; left:250px; top:170px;cursor:pointer;visibility:hidden;";
			document.getElementById('can10-11l').style="position:absolute; left:434px; top:140px;cursor:pointer;visibility:hidden;";
			document.getElementById('can10-11r').style="position:absolute; left:545px; top:145px;cursor:pointer;visibility:hidden;";
		}
		document.getElementById("nextButton").style.visibility="hidden";
		document.getElementById("can9-2").style.visibility="hidden";
		document.getElementById("can9-1").style.visibility="hidden";
		document.getElementById("can9-1a").style.visibility="hidden";
		document.getElementById("can9-4").style.visibility="hidden";
		document.getElementById("can9-5").style.visibility="hidden";
		document.getElementById("can9-6a").style.visibility="hidden";
		document.getElementById("can9-6b").style.visibility="hidden";
		if(repeat == 0)
			setDialog("Remove plunger from cylinder. ",460,300,100,270);
		else if(repeat == 1)
		{
			var q1 = Object.create(questions);
			generateQuestion(q1,"Identify the apparatus placed on top of the mould ","","Base plate","Sieve","Plunger","Tamping rod",3,removePlunger,480,300,200,150);
		}
			
	}
	
	else if(simsubscreennum==11)
	{
		if(repeat == 1)
		{
			document.getElementById('can11-1').style.visibility="visible";
			document.getElementById('can11-2').style="position:absolute; left:450px; top:195px; width:110px; visibility:visible";
			document.getElementById('can11-3').style="position:absolute; left:437.5px; top:195px;cursor:pointer;visibility:visible";
			document.getElementById('can11-3l').style="position:absolute; left:434px; top:176.5px;cursor:pointer;visibility:visible";
			document.getElementById('can11-3r').style="position:absolute; left:545px; top:183px; cursor:pointer;visibility:visible;";
			document.getElementById('can11-8').style = "position:absolute; left:25px; top:360px; visibility:hidden;cursor:pointer";
			document.getElementById('can11-6').style = "position:absolute; left:25px; top:320px; visibility:hidden;cursor:pointer";
			document.getElementById('can11-4').style = "position:absolute; left:10px; top:335px; width:140px; visibility:hidden;cursor:pointer";
			document.getElementById("can11-41").style.animation="";
			document.getElementById("can9-4").style.transformOrigin= "";			
			document.getElementById('can11-5').style = "position:absolute; left:10px; top:297.5px; width:140px; visibility:hidden;cursor:pointer";
			document.getElementById('can11-7').style = "position:absolute; left:9.75px; top:285px; visibility:hidden;cursor:pointer";
			document.getElementById("w3span").innerHTML="__________";
			document.getElementById("p11-2").innerHTML="";
		}
		document.getElementById("can10-10").style.visibility="hidden";
		document.getElementById("can10-11").style.visibility="hidden";
		document.getElementById("can10-11onon").style.visibility="hidden";
		document.getElementById("can10-11l").style.visibility="hidden";
		document.getElementById("can10-11r").style.visibility="hidden";
		document.getElementById("can10-12").style.visibility="hidden";
		myInt=setInterval(function(){animatearrow();},500);
		animateArrowATPosition(630,227.5,360);
		document.getElementById("can11-3r").onclick=function()
		{
			myStopFunction();
			document.getElementById("can11-3r").onclick="";
			document.getElementById("can11-3r").style.top="145px";
			myInt=setInterval(function(){animatearrow();},500);
			animateArrowATPosition(440,227,180);
			document.getElementById("can11-3l").onclick=function()
			{
				myStopFunction();
				document.getElementById("can11-3l").onclick="";
				document.getElementById("can11-3l").style.top="140px";
				myInt=setInterval(function(){animatearrow();},500);
				animateArrowATPosition(525,200,270);
				document.getElementById("can11-3").onclick=function()
				{
					myStopFunction();
					document.getElementById("can11-3").onclick="";		
					document.getElementById("can11-3").style.visibility="hidden";
					myInt=setInterval(function(){animatearrow();},500);
					animateArrowATPosition(525,220,270);
					document.getElementById("can11-2").onclick=function()
					{
						myStopFunction();
						document.getElementById("can11-2").onclick="";		
						document.getElementById("can11-2").style.visibility="hidden";
						document.getElementById("can11-4").style.visibility="visible";
						document.getElementById("can11-5").style.visibility="visible";
						document.getElementById("can11-6").style.visibility="visible";
						document.getElementById("can11-7").style.visibility="visible";
						setTimeout(function()
						{
							document.getElementById("can11-1").style.visibility="hidden";
							document.getElementById("can11-3l").style.visibility="hidden";
							document.getElementById("can11-3r").style.visibility="hidden";
							myInt=setInterval(function(){animatearrow();},500);
							animateArrowATPosition(117,280,270);
							document.getElementById("can11-7").onclick=function()
							{
								myStopFunction();
								document.getElementById("can11-7").onclick="";		
								document.getElementById("can11-7").style.visibility="hidden";
								document.getElementById("can11-6").style.visibility="visible";
								myInt=setInterval(function(){animatearrow();},500);
								animateArrowATPosition(220,360,360);
								document.getElementById("can11-5").onclick=function()
								{
									myStopFunction();
									document.getElementById("can11-5").onclick="";		
									document.getElementById("can11-5").style="position:absolute; left:230px; top:335px; width:140px;";
									document.getElementById("can11-6").style="position:absolute; left:245px; top:357.5px;";
									document.getElementById("can11-8").style.visibility="visible";
									setTimeout(function()
									{
										document.getElementById("can11-5").style.visibility="hidden";
										document.getElementById("can11-6").style.visibility="hidden";
										document.getElementById("can11-9").style.visibility="visible";
										document.getElementById("can11-10").style.visibility="visible";
										document.getElementById("can11-9a").style.visibility="visible";
										document.getElementById("can11-9b").style.visibility="visible";
										document.getElementById("can11-4").style.visibility="hidden";
										document.getElementById("can11-8").style.visibility="hidden";
										document.getElementById("can11-41").style.visibility="visible";
										document.getElementById("p11-2").style.visibility="visible";
										myInt = setInterval(function(){ animatearrow(); }, 500);
										animateArrowATPosition(437.5,470,90);
										document.getElementById("can11-9a").onclick=function()
										{
											myStopFunction();
											document.getElementById("can11-9a").onclick="";
											document.getElementById("can11-9a").style.visibility="hidden";
											setTimeout(function()
											{
												document.getElementById("p11-2").innerHTML="150.00";
											},650);
											document.getElementById("can11-9").style.backgroundColor="lightgrey";
											setTimeout(function()
											{
												myInt = setInterval(function(){ animatearrow(); }, 500);
												animateArrowATPosition(542.5,470,90);
												document.getElementById("can11-9b").onclick=function(){
													myStopFunction();
													document.getElementById("can11-9b").onclick="";
													document.getElementById("can11-9b").style.visibility="hidden";
													document.getElementById("p11-2").innerHTML="00.00";
													setTimeout(function()
													{
														myInt=setInterval(function(){animatearrow();},500);
														animateArrowATPosition(110,320,270);
														document.getElementById("can11-41").onclick=function()
														{
															myStopFunction();
															document.getElementById("can11-41").style.visibility = "hidden"
															document.getElementById("can11-41a").style.visibility = "visible"
															document.getElementById("can11-41a").style.animation="movePan 0.8s forwards";
															document.getElementById("p11-1").style.visibility="visible";
															setTimeout(function(){
																document.getElementById("can11-41a").style.visibility = "hidden";
																document.getElementById("can11-41a").style.animation="";
																document.getElementById("can11-41b").style.visibility = "visible";
																document.getElementById("can11-41b").style.animation = "rotateToSetTonns 0.5s forwards";
																setTimeout(function()
																{
																	document.getElementById("can11-41b").style.visibility = "hidden";
																	document.getElementById("can11-41b").style.animation = "";
																	document.getElementById("can11-10").style.visibility = "hidden";
																	document.getElementById("can11-10a").style.visibility = "visible";
																	document.getElementById("w3span").innerHTML=data[p][1]+".00";
																	document.getElementById("p11-2").innerHTML=" "+data[p][1]+".00";
																	document.getElementById("nextButton").style.visibility="visible";
																},800);
															},900);
														}
													},500);
												}
											},800);
										}
										
									},750);
								}
							}
						},250);
					}
				}
			}		
		}
	}
	else if(simsubscreennum == 12)
	{
		if(repeat == 1)
		{
			document.getElementById("finalForm").style.visibility="visible";
		}
		document.getElementById("p11-1").style.visibility="hidden";
		document.getElementById("can11-9").style.visibility="hidden";
		document.getElementById("can11-41").style.visibility="hidden";
		document.getElementById("p11-2").style.visibility="hidden";
		document.getElementById("can11-10a").style.visibility = "hidden";
		x=document.getElementById('resultTable').insertRow(repeat+1);
		c1=x.insertCell(0);
		c2=x.insertCell(1);
		c3=x.insertCell(2);
		c4=x.insertCell(3);
		t1 = document.createElement("input");
		b1 = document.createElement("input");
		span1 = document.createElement("span");
		t1.type="text";
		t1.id = "checkText";
		t1.classList.add("inputStyle");
		t1.setAttribute("oninput","checkInputValid(this)");
		c4.id = "aggVal"+repeat;
		b1.type="button";
		b1.id = "checkButton";
		b1.value = "CHECK";
		b1.style = "cursor:pointer";
		span1.id="rightAns";
		span1.style.color = "red";
		c1.innerHTML=emptyWeight+".00";
		c2.innerHTML=data[p][0]+".00";
		c3.innerHTML=data[p][1]+".00";
		c4.appendChild(t1);
		c4.appendChild(span1);
		c4.appendChild(b1);
		b1.onclick = checkCrushValue;
	}
}

function checkInputValid(e) {
	e.value = e.value.match(/\d*(\.\d*)?/)[0];
}

var count=0;
function fillCylinder()
{
	refresh();
	count++;
	document.getElementById("can5-5").style.visibility="visible";
	myInt=setInterval(function(){animatearrow();},500);
	animateArrowATPosition(180,225,360);
	document.getElementById("can5-5").onclick=function()
	{
	  myStopFunction();
	  document.getElementById("can5-5").onclick="";
	  document.getElementById("can5-5").style.animation="moveTrowel 1.5s forwards";
	  setTimeout(function()
	  {
		document.getElementById("can5-5").style.visibility="hidden";
		document.getElementById("can5-6").style.visibility="visible";
		document.getElementById("can5-6").style.animation="moveTrowel2 2s forwards";
		setTimeout(function()
		{
			if(count==1)
				document.getElementById("can5-31").style.visibility="hidden";
			if(count==2)
				document.getElementById("can5-32").style.visibility="hidden";
			if(count==3)
			{
				document.getElementById("can5-33").style.visibility="hidden";
				document.getElementById("can5-34").style.visibility="hidden";
			}
		},100);
		setTimeout(function()
		{
			document.getElementById("can5-6").style.visibility="hidden";
			document.getElementById("can5-6t").style.visibility="visible";
			document.getElementById("can5-6t").style.transformOrigin="80% 100%";
			document.getElementById("can5-6t").style.animation="rotTrowel 1s forwards";
			setTimeout(function()
			{
			  document.getElementById("can5-6t").style.visibility="hidden";
				if(count==1)
					document.getElementById("can5-35").style.visibility="visible";
				else if(count==2)
					document.getElementById("can5-37").style.visibility="visible";
				else if(count==3)
				{
				  document.getElementById("can5-38").style.visibility="visible";
				  document.getElementById("can5-39").style.visibility="visible";
				}
			  setTimeout(function()
			  {
				if(count == 1)
				{
					if(repeat == 0)
					{
					document.getElementById("divp").innerHTML = "Each layer is subjected to 25 strokes using the tamping rod.";
					document.getElementById('dialog-div').style.visibility="visible";											
					document.getElementById('dialog-div').style.left="50px";											
					document.getElementById('dialog-div').style.top="130px";											
					document.getElementById('dialog-div').style.width="250px";	
					document.getElementById('dialog-div').style.height="100px";	
					}
					else if(repeat == 1)
					{
						var q1 = Object.create(questions);
						generateQuestion(q1,"Each layer is subjected to ________ strokes using the tamping rod: ","","14","35","25","50",3,tamp,200,120,200,150);
					}
				}
				else 
					tamp();
			  },1000);
			},1200);
	    },2500);
	  },1500);
	}
}
function tamp()
{
	if(repeat == 1)
	{
		document.getElementById('can5-7l').style.transformOrigin = "";
		document.getElementById('can5-7l').style.animation="";
	}
	refresh();
	document.getElementById("can5-7l").style.visibility="visible";	
	myInt=setInterval(function(){animatearrow();},500);
	animateArrowATPosition(550,160,360);
	document.getElementById("can5-7l").onclick=function()
	{
		myStopFunction();
		document.getElementById("can5-7l").onclick="";
		document.getElementById("can5-7l").style.animation="tamp 2.5s forwards";
		setTimeout(function()
		{
			document.getElementById("can5-7l").style.visibility="hidden";
			if(count==1)
			{
			document.getElementById("can5-35").style.visibility="hidden";
			document.getElementById("can5-36").style.visibility="visible";
			}
			else if(count==2)
			{
			document.getElementById("can5-37").style.visibility="hidden";
			document.getElementById("can5-35").style.visibility="visible";
			}
			else if(count==3)
			{
				document.getElementById("can5-39").style.visibility="hidden";
				document.getElementById("can5-38").style.visibility="visible";
				flag = false;
			}
			if(count<3)
				fillCylinder();
			if(count==3 && flag==false && document.getElementById("can5-7l").style.visibility=="hidden") 
				levelCa();
		},3000);
	}
}
function levelCa()
{
	if(repeat == 1)
	{
		document.getElementById('can5-8').style.transformOrigin = "";
		document.getElementById('can5-8').style.animation="";
	}
	document.getElementById("can5-8").style.visibility="visible";
	myInt=setInterval(function(){animatearrow();},500);
	animateArrowATPosition(480,120,270);
	document.getElementById("can5-8").onclick=function()
	{
		myStopFunction();
		document.getElementById("can5-8").onclick="";
		document.getElementById("can5-8").style.animation="leveling 1.5s 2 forwards";
		setTimeout(function(){
			document.getElementById("can5-8").style.visibility="hidden";	
			document.getElementById("can5-2").style.visibility="hidden";	
			document.getElementById("can5-35").style.visibility="hidden";	
			document.getElementById("can5-36").style.visibility="hidden";	
			document.getElementById("can5-37").style.visibility="hidden";	
			document.getElementById("can5-38").style.visibility="hidden";	
			document.getElementById("can5-310").style.visibility="hidden";	
			document.getElementById("can5-9").style.visibility="visible";
			if(repeat == 0)
			{
				var q2 = Object.create(questions);
				generateQuestion(q2,"Tamping is done to obtain better compaction between aggregates. Say True/False?: ","","False","True",0,0,2,screen5Proceed,150,100,200,150);
			}
			if(repeat == 1)
			{
				var q2 = Object.create(questions);
				generateQuestion(q2,"Cylinder is filled with aggregates in ____________ layers","","4","2","3","1",3,screen5Proceed,150,100,200,150);
			}
		},3000);
	}
}
function screen5Proceed()
{
	document.getElementById("nextButton").style.visibility="visible";
}
function screen8Proceed()
{
	setMachine();
	screensVal = 1;
}
function setMachine()
{
	if(repeat == 1)
	{
		document.getElementById('can8-1a').style.transformOrigin = "";
		document.getElementById('can8-1a').style.animation="";
	}
	myInt=setInterval(function(){animatearrow();},500);
	animateArrowATPosition(420,120,360);
	document.getElementById("can8-1a").onclick=function()
	{
		myStopFunction();
		document.getElementById("can8-1a").onclick="";
		document.getElementById("can8-1a").style.animation="adjust-rotate 8s forwards";
		setTimeout(function()
		{
			document.getElementById("can8-1").src = "images/mainsetup2.png";
		},2500);
		setTimeout(function()
		{
			document.getElementById("can8-1").src = "images/mainsetup2b.png";
		},3500);
		setTimeout(function()
		{
			document.getElementById("can8-1").src = "images/mainsetup2a.png";
			document.getElementById("can8-3").src = "images/plungSetup4.png";
		},4500);
		setTimeout(function()
		{
			document.getElementById("can8-1").src = "images/mainsetup3.png";
			document.getElementById("can8-3").src = "images/plungSetup3.png";
		},7000);
		setTimeout(function()
		{
			if(repeat == 1)
			{
				var q3 = Object.create(questions);
				generateQuestion(q3,"Load applied to plunger at a uniform rate of 4 tonnes/minute is: ","","80 tonnes","40 tonnes","20 tonnes","50 tonnes",2,setTonnes,480,300,200,150);
			}
			else
				setDialog("40 tonnes of load is applied to plunger at a uniform rate of 4 tonnes/minute.",480,320,120,280);
		},8200);
	}
}
function setTonnes()
{
	if(repeat == 1)
	{
		document.getElementById('can8-5').style.transformOrigin = "";
		document.getElementById('can8-5').style.animation="";
		document.getElementById('can8-4').style.transformOrigin = "";
		document.getElementById('can8-4').style.animation="";
	}
	myInt=setInterval(function(){animatearrow();},500);
	animateArrowATPosition(80,410,180);
	document.getElementById("can8-5").style.visibility = "visible";
	document.getElementById("can8-5").onclick=function()
	{
		myStopFunction();
		document.getElementById("can8-5").onclick="";
		document.getElementById("can8-5").style.transformOrigin="13% 15%";
		document.getElementById("can8-5").style.animation="rotateToSetTonns 1s 1 forwards";
		setTimeout(function()
		{
			document.getElementById("can8-5").style.visibility = "hidden";
			myInt=setInterval(function(){animatearrow();},500);
			animateArrowATPosition(60,375,180);
			document.getElementById("can8-6b").onclick=function()
			{
				myStopFunction();
				document.getElementById("can8-6b").onclick="";
				document.getElementById("can8-6b").style.visibility = "hidden";
				document.getElementById("can8-4").style.transformOrigin="50% 30%";
				document.getElementById("can8-4").style.animation="needleMove 4s forwards";
				setTimeout(function()
				{
					myInt=setInterval(function(){animatearrow();},500);
					animateArrowATPosition(60,365,180);
					document.getElementById("can8-6a").onclick=function()
					{
						myStopFunction();
						document.getElementById("can8-6a").onclick="";
						document.getElementById("can8-6b").style.visibility = "visible";
						document.getElementById("nextButton").style.visibility = "visible";
					}
				},4200);
			}
		},1100);
	}
}
function resetMachine()
{
	if(repeat == 1)
	{
		document.getElementById('can9-1a').style.transformOrigin = "";
		document.getElementById('can9-1a').style.animation="";
		document.getElementById('can9-2a').style.transformOrigin = "";
		document.getElementById('can9-2a').style.animation="";
	}
	myInt=setInterval(function(){animatearrow();},500);
	animateArrowATPosition(420,120,360);
	document.getElementById("can9-1a").onclick=function()
	{
		myStopFunction();
		document.getElementById("can9-1a").onclick="";
		document.getElementById("can9-1a").style.animation="adjust-rotate 8s reverse";
		setTimeout(function()
		{
			document.getElementById("can9-1").src = "images/mainsetup3.png";
			document.getElementById("can9-3").src = "images/plungSetup3.png";
		},2500);
		setTimeout(function()
		{
			document.getElementById("can9-1").src = "images/mainsetup2a.png";
			document.getElementById("can9-3").src = "images/plungSetup4.png";
		},4000);
		setTimeout(function()
		{
			document.getElementById("can9-1").src = "images/mainsetup2b.png";
			document.getElementById("can9-3").src = "images/plungSetup2.png";
		},5500);
		setTimeout(function()
		{
			document.getElementById("can9-1").src = "images/mainsetup.png";
		},7000);
		setTimeout(function()
		{
			myInt=setInterval(function(){animatearrow();},500);
			animateArrowATPosition(420,300,360);
			document.getElementById("can9-3").onclick=function()
			{
				myStopFunction();
				document.getElementById("can9-3").onclick="";
				document.getElementById("can9-3").style.visibility = "hidden";
				document.getElementById("can9-2a").style.visibility="visible";
				document.getElementById("can9-2a").style.animation="plungerSetupMove 1.5s reverse";
				setTimeout(function()
				{
					document.getElementById("can9-2a").style.visibility = "hidden";
					document.getElementById("can9-2").style.visibility="visible";
					document.getElementById("nextButton").style.visibility="visible";
				},1600);
			}
		},8500);
	}
}
function removePlunger()
{
	if(repeat == 1)
	{
		document.getElementById('can10-3').style.transformOrigin = "";
		document.getElementById('can10-4').style.transformOrigin = "";
		document.getElementById('can10-4').style.animation="";
		document.getElementById('can10-6').style.transformOrigin = "";
		document.getElementById('can10-6').style.animation="";
		document.getElementById('can10-7').style.transformOrigin = "";
		document.getElementById('can10-7').style.animation="";
		document.getElementById('can10-9').style.transformOrigin = "";
		document.getElementById('can10-9').style.animation="";
		document.getElementById('can10-10').style.transformOrigin = "";
		document.getElementById('can10-10').style.animation="";
		document.getElementById("can10-6").src = "images/2.36.png";
	}
	myInt=setInterval(function(){animatearrow();},500);
	animateArrowATPosition(320,230,360);
	document.getElementById("can10-3").onclick=function()
	{
		myStopFunction();
		document.getElementById("can10-3").onclick="";
		document.getElementById("can10-3").style.visibility="hidden";	
		document.getElementById("can10-4").style.visibility="visible";	
		document.getElementById("can10-4").style.animation="shiftCylToHandPlateBack 1.5s forwards";
		setTimeout(function()
		{
			document.getElementById("can10-4").style.visibility="hidden";	
			document.getElementById("can10-3").style.visibility="visible";	
			document.getElementById("can10-3").style.left="350px";
			document.getElementById("can10-3").style.top="250px";
			setTimeout(function()
			{
				document.getElementById("can10-1").style.visibility="hidden";	
				document.getElementById("can10-3").style.visibility="hidden";	
				document.getElementById("can10-5").style.visibility="visible";	
				document.getElementById("can10-6").style.visibility="visible";
				myInt=setInterval(function(){animatearrow();},500);
				animateArrowATPosition(330,365,270);
				document.getElementById("can10-6").onclick=function()
				{
					myStopFunction();
					document.getElementById("can10-6").onclick="";
					document.getElementById("can10-6").style.animation="moveSeive236 1.5s forwards";
					setTimeout(function()
					{
						document.getElementById("can10-2").style.visibility="visible";
						myInt=setInterval(function(){animatearrow();},500);
						animateArrowATPosition(340,270,360);
						document.getElementById("can10-2").onclick=function()
						{
							myStopFunction();
							document.getElementById("can10-2").onclick = "";
							document.getElementById("can10-2").style.visibility="hidden";
							document.getElementById("can10-7").style.visibility="visible";
							document.getElementById("can10-7").style.animation="shift236 1s forwards";
							setTimeout(function()
							{
								document.getElementById("can10-7").style.left="100px";
								document.getElementById("can10-7").style.top="140px";
								document.getElementById("can10-7").style.transformOrigin="100% 80%";
								document.getElementById("can10-7").style.animation="shiftCa3 1s forwards";
								setTimeout(function()
								{
									document.getElementById("can10-6").src = "images/filled236.png";
									document.getElementById("can10-8").style.visibility="visible";
									document.getElementById("can10-7").style.visibility="hidden";
									document.getElementById("can10-9").style.visibility="visible";
									myInt=setInterval(function(){animatearrow();},500);
									animateArrowATPosition(310,250,-90);
									document.getElementById("can10-9").onclick=function()
									{
										myStopFunction();
										document.getElementById("can10-9").onclick = "";
										document.getElementById("can10-9").style.animation="placeCap 1s forwards";
										setTimeout(function()
										{
											document.getElementById("can10-5").style.visibility="hidden";
											document.getElementById("can10-8").style.visibility="hidden";
											document.getElementById("can10-6").style.visibility="hidden";
											document.getElementById("can10-9").style.visibility="hidden";
											document.getElementById("can10-10").style.visibility="visible";
											document.getElementById("can10-11").style.visibility="visible";
											myInt=setInterval(function(){animatearrow();},500);
											animateArrowATPosition(230,360,360);
											document.getElementById("can10-10").onclick=function()
											{
												myStopFunction();
												document.getElementById("can10-10").onclick="";
												document.getElementById("can10-10").style.animation="moveSieveSet2 1s forwards";
												setTimeout(function()
												{
													document.getElementById("can10-10").style.width="110px";
												},980);
												setTimeout(function()
												{
													document.getElementById("can10-12").style.visibility="visible";
													myInt=setInterval(function(){animatearrow();},500);
													animateArrowATPosition(320,170,-90);
													document.getElementById("can10-12").onclick=function()
													{
														myStopFunction();
														document.getElementById("can10-12").onclick="";
														document.getElementById("can10-12").style="position:absolute; left:437.5px; top:195px;";
														document.getElementById("can10-11l").style.visibility="visible";
														myInt=setInterval(function(){animatearrow();},500);
														animateArrowATPosition(435,182.5,180);
														document.getElementById("can10-11l").onclick=function()
														{
															myStopFunction();
															document.getElementById("can10-11l").onclick="";
															document.getElementById("can10-11l").style="position:absolute; left:434px; top:176.5px;";
															setTimeout(function()
															{
																document.getElementById("can10-11r").style.visibility="visible";
																myInt=setInterval(function(){animatearrow();},500);
																animateArrowATPosition(625,182.5,360);
																document.getElementById("can10-11r").onclick=function()
																{
																	myStopFunction();
																	document.getElementById("can10-11r").onclick="";
																	document.getElementById("can10-11r").style="position:absolute; left:545px; top:183px;";
																	document.getElementById("can10-11on").style.visibility="visible";
																	setTimeout(function()
																	{
																		myInt=setInterval(function(){animatearrow();},500);
																		animateArrowATPosition(470,435,90);
																		document.getElementById("can10-11on").onclick=function()
																		{
																			myStopFunction();
																			document.getElementById("can10-11on").onclick="";
																			document.getElementById("can10-11on").style.visibility="hidden";
																			document.getElementById("can10-11onon").style.visibility="visible";
																			document.getElementById("can10-10").style="position:absolute; left:450px; top:195px; width:110px;";
																			document.getElementById("can10-10").style.animation="shake 0.5s 8";
																			setTimeout(function()
																			{
																				document.getElementById("nextButton").style.visibility="visible";
																			},4000);
																		}
																	},500);
																}
															},500);
														}
													}
												},1000);
											}
										},1100);
									}
								},1100);
							},1100);
						}
					},1800);
				}					
			},800);
		},1600);
	}
}
function checkCrushValue()
{
	if(tries < 2)
	{
		if(document.getElementById ("checkText").value  == data[p][2])
		{
			document.getElementById("checkText").style.visibility = "hidden";
			document.getElementById("checkButton").style.visibility = "hidden";
			document.getElementById ("aggVal"+repeat).innerHTML = data[p][2];
			span1.innerHTML = "<span style='color:green'>&#10004;</span>";
			document.getElementById ("aggVal"+repeat).appendChild(span1);
			if(repeat == 0)
			{
				val1 = data[p][2];
				repeat = 1;
				simsubscreennum =4;
				document.getElementById("nextButton").style.visibility = "visible";
			}
			else if(repeat == 1)
			{
				val2 = data[p][2];
				document.getElementById("trial").style.visibility = "hidden";
				x=document.getElementById('resultTable').insertRow(repeat+2);
				var ansSpan = document.createElement("span");
				ansSpan.style.textDecorationStyle = "double";
				c5=x.insertCell(0);
				c5.setAttribute("colspan",4);
				// c5.innerHTML = "Average Aggregates Crushing Value =<span style='text-decoration-style:double;'>"+((val1+val2)/2)+"</span>%";
				c5.innerHTML = "Average Aggregates Crushing Value = ";
				c5.appendChild(ansSpan);
				ansSpan.innerHTML =  ((val1+val2)/2)+"%";
				finalStatement();
			}
			
		}
		else if(document.getElementById ("checkText").value  != data[p][2])
		{
			tries++;
			var element = document.getElementById("checkText");
			// element.classList.add("wrong");
			span1.innerHTML  ="&#10008;";
			if(tries == 2)
			{
				document.getElementById("checkButton").value = "RESULT";
			}
		}
	}
	else if(tries == 2)
	{
		tries = 0;
		displayResult();
	}
}
function displayResult()
{
	document.getElementById("checkText").style.visibility = "hidden";
	document.getElementById("checkButton").style.visibility = "hidden";
	document.getElementById("rightAns").style.visibility = "hidden";
	document.getElementById ("aggVal"+repeat).innerHTML = data[p][2];
	if(repeat == 0)
	{
		val1 = data[p][2];
		repeat = 1;
		simsubscreennum =4;
		document.getElementById("nextButton").style.visibility = "visible";
	}
	else if(repeat == 1)
	{
		val2 = data[p][2];
		document.getElementById("trial").style.visibility = "hidden";
		x=document.getElementById('resultTable').insertRow(repeat+2);
		var ansSpan = document.createElement("span");
		ansSpan.style.textDecorationStyle = "double";
		c5=x.insertCell(0);
		c5.setAttribute("colspan",4);
		// c5.innerHTML = "Average Aggregates Crushing Value =<span style='text-decoration-style:double;'>"+((val1+val2)/2)+"</span>%";
		c5.innerHTML = "Average Aggregates Crushing Value = ";
		c5.appendChild(ansSpan);
		ansSpan.innerHTML =  ((val1+val2)/2)+"%";
		finalStatement();
	}
}
function finalStatement()
{
	document.getElementById("p12-1").style.visibility = "visible";
	document.getElementById("p12-1").style.animation  ="slidePara 2s forwards";
}
function generateQuestion(qObject,qn,op1,op2,op3,op4,op5,ansKey,fn,dleft,dright,dwidth,dheight)
{
	document.getElementById('question-div').style.left=dleft+"px";											
	document.getElementById('question-div').style.top=dright+"px";												
	document.getElementById('question-div').style.width=dwidth+"px";
	document.getElementById('question-div').style.height=dheight+"px";
	qObject.setOptions(op1,op2,op3,op4,op5);
	qObject.setAns(ansKey);
	qObject.frameQuestions(qn);	
	qObject.setCallBack(fn);	
}
function hideDialog()
{
	document.getElementById("dialog-div").style.visibility = "hidden";
	if(simsubscreennum == 5)
	{
		tamp();
	}
	else if(simsubscreennum == 8 && screensVal == 0)
	{
		setMachine();
		screensVal = 1;
	}
	else if(simsubscreennum == 8 && screensVal == 1)
	{
		setTonnes();
	}
	else if(simsubscreennum == 10)
	{
		removePlunger();
	}
}	

function refresh()
{
	myStopFunction();
	document.getElementById("can5-5").style.animation="";
	document.getElementById("can5-6").style.animation="";
	document.getElementById("can5-6t").style.transformOrigin="";
	document.getElementById("can5-6t").style.animation="";
	document.getElementById("can5-7l").style.animation="";
}

function setDialog(textContent,leftPos,topPos,heightVal,widthVal)
{
	document.getElementById("divp").innerHTML = textContent;
	document.getElementById('dialog-div').style.left=leftPos+"px";											
	document.getElementById('dialog-div').style.top=topPos+"px";												
	document.getElementById('dialog-div').style.height=heightVal+"px";
	document.getElementById('dialog-div').style.width=widthVal+"px";
	document.getElementById('dialog-div').style.visibility="visible";											
}


	
	
