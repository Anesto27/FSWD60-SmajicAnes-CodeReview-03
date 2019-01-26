
/* create a function called calculateInsurance and added 3 values */
function calculateInsurance(name, horse_power, age) {
/* declared 4 variables and used getElementbyid to take the value of the each ids*/
/* also used parseFloat only to get the number values otherwise-->(NaN)*/
		var name = document.getElementById("input1").value;
		var horse_power = parseFloat(document.getElementById("input3").value);
		var age =  parseFloat(document.getElementById("input2").value); 

	 	var country = document.getElementById("select").value;
/*used an If statement and two elses for the three countries */
			if (country == "austria") {
				document.getElementById("result").innerHTML = name + ", your insurance costs " + 
				Math.floor(horse_power * 100 / age + 50) + "€.";

			} else if (country == "hungary") {
				document.getElementById("result").innerHTML = name + ", your insurance costs " + 
				Math.floor(horse_power * 120 / age + 100) + "€.";

			} else { /*Greece */
				document.getElementById("result").innerHTML = name + ", your insurance costs " + 
				Math.floor(horse_power * 150 / (age + 3) + 150) + "€.";
			}
		}
		/* get the output with the eventlistener of the calculation*/
document.getElementById("btn").addEventListener("click", calculateInsurance , false);
