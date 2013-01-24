//Andrei Birsan
//SDI1 Project 3
//1-23-2013

//Global Variables Declaration

var	gameName = "Nagra Space Flight Simulator",
		gameVersion = 2,															// ==> switch
		gameSubVersion = 3,														// ==> switch
		gateNum = 0,
		drivingStation = 2,
		
		userInfoSave = { "userName": "Andrei", 
							  "userMiles": 0, 
							  "userLocation": "Milky-Way",
							  "shipName": "" 
		};
		

//Conditional (version - subversion check)

if (gameVersion >= 2) {
	
	//Nested Conditional
	if (gameSubVersion >= 3) {
		
		//output welcome message and concatenate version and subversion
		console.log("Welcome to "+ gameName +" "+ gameVersion +"."+ gameSubVersion);	
		console.log("Your Nagra client is up to date!");	
		
			while(gateNum < 3)	{
				
				console.log("Loading ... Please wait");
				
				//changes the value of the global gateNum				
				gateNum++;	
				
			}
			console.log("Gate "+ gateNum +" is now available for you.");
			console.log("Please proceed to your ship.");
	}
	
	//ewer subversion available	
	else {
		
		console.log("There is a newer subversion available on our inter-galactic site.")			
		
		}	
}	

else {
	console.log("There is a newer version of the program available for download. Please update before playing.");	
	
}


//Implementation of obj. userInfo
var userInfo = {
			
			userName:    "Andrei",
			firstTime:    true,
			address:    ["City: Los Angeles", "State: California", "Country: USA", "Planet: Earth", "System: Sol", "Galaxy: Milky-Way"],
			gameSaved:     1,
			shipSpecs:  { model: "Galactic Intrepid", speed: "W.6", firePower: [ "2 Missile Launchers", "2 Laser Canons", "1 Omni-Tool" ] } 
};

console.log(userInfo);
		