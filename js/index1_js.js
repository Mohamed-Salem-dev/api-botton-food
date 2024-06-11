//14
var allLinks = document.querySelectorAll("nav .nav-link")	//navاللي جوه ال.nav-link كلها اللي اسمها classانا كده مسكت ال

//====================================================
//5
var allMeals = [];	//فاضي Array ده 

var category = "Beef"

//15
for(var i=0; i<allLinks.length; i++)
{
	allLinks[i].addEventListener("click",resturant)//resturant اللي اسمها functionواحد واحد واعمل ال link انا كده عدت علي 
}

//16
function resturant(e)//eventده اللي بيجيب معلومات ال eال
{
	category = e.target.text;//liده بتجيب الكلمه اللي حوه ال textوال elementsهات ال taوال eventانا كده بقول ي معلومات ال
	
	//17
	getMeals()	//ويرجع Date اللي كان بيجيب AJAXده ال
	//displayMeals()و بتنادي كمان الDateده بيجيب ال
}

//12
getMeals();//functionانا عملت كول ل ال

//11	//function انا في الاخر جمعت الحاجات ده في 
function getMeals()
{
	
	//1
	var myUrHt = new XMLHttpRequest();

	//2
	myUrHt.open("GET" , "https://www.themealdb.com/api/json/v1/1/filter.php?c="+category)//ده عن اللحوم
	//myUrHt.open("GET" , "https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken")//ده عن الدجاج
	//myUrHt.open("GET" , "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood") //ده عن الاسماك 
	//بفتح من المتصفح وبيجيب انواع الاكلت https://www.themealdb.com/api/json/v1/1/list.php?c=list في الموقع Chickenوال Seafoodوال Beefبجيب ال

	//3
	myUrHt.send();	//url من ال dataانا كده بقول هات ال

	//4
	myUrHt.addEventListener("readystatechange" , function()
	{
		
		if(myUrHt.status == 200 && myUrHt.readyState == 4)
		{
			//myUrHt.response;	// string راجع علي هيئه Dataال
			console.log(JSON.parse( myUrHt.response));	//JSON ل string انا كده بحول من JSON.parse
			
			//JSON.parse( myUrHt.response).meals;	//JSON ل string انا كده بحول من JSON.parse
										//meals انا كده قولت هات بس ال
										//mealsو لاقيت كلمه الObjectوفتحت ال consoleف فتحت ال JSON.parse( myUrHt.response) علي consoleده من علمت الmealsجبت ال
			//6
			allMeals = JSON.parse( myUrHt.response).meals;	//allMealsفي ال dataانا كده شالت ال
			console.log(allMeals);	
			
			//10
			displayMeals();//functionانا عملت كول ل ال
		}
	}) 
}

//6
function displayMeals()
{
	//8
	var hasalah = ``;
	
	//7
	for (var i=0; i<allMeals.length; i++)
	{
		//console.log(allMeals[i].strMeal);
		
		hasalah += `<div class="col-md-3">
						<div class= "item">
							<img class="img-fluid" src= "${allMeals[i].strMealThumb}">
							<h2>${allMeals[i].strMeal}</h2>
						</div>
					</div>`
	}
	//9
	document.getElementById("demo").innerHTML = hasalah;
}