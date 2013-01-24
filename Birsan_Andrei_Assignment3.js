//Andrei Birsan
//SDI1 Project 3
//1-23-2013

//Global Variables Declaration

var	gameName = "Space Flight Simulator",
		gameVersion = 2,
		gameSubVersion = 3,		
		gateNum = 3,
		drivingStation = 2,
		userInfoSave = { "userName": "Andrei", "userMiles": 55, "userLocation": "Milky-Way" };
		

//
if (gameVersion >= 2) {
	
	if (gameSubVersion >= 3) {
		
		//log welcome message and concatinate version and subversion
		console.log("Welcome to "+ gameName +" "+ gameVersion +"."+ gameSubVersion);	
		console.log("You are up to date!");		
	}
	
	else {
		}	
}	
		