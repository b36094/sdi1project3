//Andrei Birsan
//SDI1 Project 3
//1-23-2013

//Global Variables Declaration

var	gameName = "Nagra Space Flight Simulator",
		gameVersion = 2,															
		gameSubVersion = 3,														
		gateNum = 0,
		drivingStation = 2,
		
		userInfoSave = { "userName": "Andrei", 
							  "userMiles": 37, 
							  "userLocation": "Milky-Way",
							  "shipName": "Lenora" 
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


//Implementation of obj. userInfo---------------------------------------------------------------------
var userInfo = {
			
			//properties 
			userName:     "Andrei",
			firstTime:    true,
			address:      ["City: Los Angeles", "State: California", "Country: USA", "Planet: Earth", "System: Sol", "Galaxy: Milky-Way"],
			gameSaved:    1,
			shipSpecs:    { model: "Galactic Intrepid", speed: "W.6", firePower: [ "2 Missile Launchers", "2 Laser Canons", "1 Omni-Tool" ] },
			
			//methods -----------------------------------------------------------------------------------
			//method procedure
			firstInter:   function (userName) {
				
				console.log("Nagra:			"+ userName +", your first flight practice is in the \"Vijan\" asteroid field.");
				console.log("Nagra:			It might seem easy at first, but most pilots crash their ships in here.");
				console.log(+ userName +":			Puff... I'm better than that! ...");	
				
			},
			
			//method function
			flyingMethod: function (num, bool) {
				
				//local variables
				var num_ = num;
				var bool_ = bool;
				
				//bool argument setter function 
				this.setBool = function(bool) {
    				bool_ = bool;
 				};
				
				//bool argument getter function ==> alternative
				this.getBool = function() {
    				return bool_;
  				};
  				
  				for (num_ ; num_ >=1; num_ --) {
  					
  					//do 	
  					console.log("Nagra:			"+ this.userName +", press the 'Acceleration' button...");
  					console.log("Nagra:			Good ... now, turn left ...");
  					console.log("Nagra:			Now, turn right ...");
  					
  					//conditional 
  					if (bool_ === true) {
							
							
							console.log("Nagra:			The flight lesson is over, please return the ship to  gate number "+ gateNum +".");
							return 3;
							 						
  						}
  					
  					
  					else {
							  							
  							//nested for loop  							
  							for (var i = 1; i < 3; i++) {
  								
								 								
  								console.log("Nagra:			"+ userInfoSave.userName + ", asteroid ahead! Use your laser canons to destroy it.");	
  								console.log("Andrei:			Pew, pew, pew!");	
  								console.log("The total number of shots is: "+ (i * 3));	
  							}
  							
  							return true;	
							
							
  					}
  					
  				}
  				
  				
			},
			
			
};

//function mixString
var mixString = function () {
	var stringNoun = "Congratulations, ",
	     stringPredicat = "you completed ",
	     stringComplement = "your flight training.";
	     
	     return [stringNoun, stringPredicat, stringComplement];
		
}


//function conversion JSON
var jsonConv = function (mixString_return) {
		console.log("Nagra:			Congratulations! Your training is complete.");		
		console.log("Nagra:			While you're taking the ship back to gate "+ gateNum +", I'm going to save your user profile information into our JSON data base");
		console.log("Nagra:			Please hold on ...");
		
		//JSON conversion
		var jsonObj = JSON.stringify(userInfoSave);	
		console.log("Nagra:			Done. Please verify your information: "+ jsonObj);
}
//Call methods and functions --------------------------------------------------------------------------

//method procedure
var firstInterCatch = userInfo.firstInter(userInfo.userName);

//method function 
var flyingMethodCatch = userInfo.flyingMethod(2, false);

//mixString function
var mixStringCatch = mixString();

//function json
var jsonConvCatch = jsonConv(mixStringCatch);

		