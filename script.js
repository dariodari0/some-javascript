/**
 * @author Dariusz M. 
 * FOR LEARNING AND FUN
 */
window.onload = init;

function init()
{
		document.getElementById("runTest").addEventListener('click', runTesting);
		generateNameOfCurrentDay();
		informationsNav();
		actionOnString();
}
    			
/*
 * Dynamicznie generowanie nazwy dnia i kolejnych
 */
function generateNameOfCurrentDay()
{
	var date = new Date();
    var day = date.getDay();
    var weekDays = new Array ("Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota");
			
			var divForDays = document.getElementById("days");
			var text = document.createTextNode("Dziś jest: "+weekDays[day]+". Kolejnde dni to: ");
			divForDays.appendChild(text);
			divForDays.appendChild(document.createElement("br"));
						
			 if (day >= 0 && day <= weekDays.length-1)
				{
					for (var j=1; j <= (weekDays.length-1)-day; j++)
					{
						text = document.createTextNode(weekDays[day + j]);
						divForDays.appendChild(text);
						divForDays.appendChild(document.createElement("br"));
					}
					for (var j=day; j > 0; j--)
					{
						text = document.createTextNode(weekDays[day - j]);
						divForDays.appendChild(text);
						divForDays.appendChild(document.createElement("br"));
					}
				}
			else alert("Wystąpił błąd!!");
}


/*
 * Pobieranie i wyświetlanie informacji o użytkowniku
 */	
 function informationsNav()
 {
 		var navigatorInformations = "App Code Name (your browser): "   + navigator.appCodeName + "<br>";
			navigatorInformations    += "App Name (your browser): "        + navigator.appName + "<br>";
			navigatorInformations	 += "App Version (your browser): "     + navigator.appVersion + "<br>";
			navigatorInformations    += "Cookies: "                        + navigator.CokkieEnabled + "<br>";
			navigatorInformations    += "Platform (your OS): "             + navigator.platform + "<br>";
			navigatorInformations    += "User Agent: "                     + navigator.userAgent + "<br>";
			navigatorInformations    += "Online: "                         + navigator.onLine + "<br>";
				 
			var info = document.getElementById("informations");
			info.innerHTML = navigatorInformations + "<br>";
			
 }	  
		
/*
 * Zabawa metodami substr(); i split();
 */
function actionOnString()
{
			var divForStrings = document.getElementById("strings");
			var anyString = "Pasja nie nudzi.Pasja fascynuje.Tym wlasnie stalo sie dla mnie programowanie";
			var text = document.createTextNode(anyString.substr(0,5)+ " - kto ją ma ten się rozwija!");	
			divForStrings.appendChild(text);
			divForStrings.appendChild(document.createElement("br"));
								
			var separator = anyString.split(".");
			for (index in separator)
			{
				text = document.createTextNode(separator[index]);
						divForStrings.appendChild(text);
						divForStrings.appendChild(document.createElement("br"));
			}
}		
		

/*
 * Zabawa: zastowsowanie try..catch i trow wraz z switch
 */			
 function runTesting(e)
  			{
  				e.preventDefault();
			try
			{
				var x = document.getElementById("test").value;
				if (!x)
				throw "nothing";
				else
				throw "somthing";
			}
			catch(e)
			{
				switch(e)
				{
					case 'nothing':
						document.getElementById("label").setAttribute("style", "font-weight: bold; color:red;");
					break;
					
					case 'somthing':
					var input = document.getElementsByTagName("input");
					for (index in input) {
						input[index].disabled = true;
					}
					document.getElementById("label").removeAttribute("style");
					document.getElementById("label").style.display = "none";
					document.getElementById("runTest").value = "Done!";
					document.getElementById("test").value = "";
					break;
					
					default:
					alert("błąd");
				}
				
			}
			
			}

	