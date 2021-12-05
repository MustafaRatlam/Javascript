var city = ["karachi", "hyderabad", "quetta", "peshawar"];

var enterCity = prompt("Enter city name");

enterCity = enterCity.toLocaleLowerCase();

for (var i = 0; i <= city.length; i++){
    if(enterCity == city[i]){
        alert("city found")
    }

};