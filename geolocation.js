let G, options, spans;

document.addEventListener('DOMContentLoaded', init);

function init(){
    if(navigator.geolocation){
        let giveUp = 1000 * 30;  //30 sec
        let tooOld = 1000 * 60 * 5;  //5 min
        options ={
            enableHighAccuracy: true,
            timeout: giveUp,
            maximumAge: tooOld
        }

        navigator.geolocation.getCurrentPosition(gotPos, posFail, options);

    }
}

function gotPos(position){
    goal_latitude = 59.93927234157881
    goal_longitude = 30.338626827599757
    spans = document.querySelectorAll('p span');
    spans[0].textContent = position.coords.latitude;
    spans[1].textContent = position.coords.longitude;
    spans[2].textContent = position.coords.accuracy;
    spans[3].textContent = parseFloat(calcCrow(position.coords.latitude, position.coords.longitude, goal_latitude,
        goal_longitude).toFixed(1)) === 0 ? "You are here" : (calcCrow(position.coords.latitude,
        position.coords.longitude, goal_latitude,goal_longitude).toFixed(1)) + "km";
}

function posFail(err){
    //err is a number
    let errors = {
        1: 'No permission',
        2: 'Unable to determine',
        3: 'Took too long'
    }
    document.querySelector('h1').textContent = errors[err];
}

// document.body.innerHTML = (calcCrow(59.3293371,13.4877472,59.3225525,13.4619422).toFixed(1)) + "km";

function calcCrow(lat1, lon1, lat2, lon2)
{
    var R = 6371;
    var lat1 = toRad(lat1);
    var lat2 = toRad(lat2);
    var dLat = toRad(lat2-lat1);
    var dLon = toRad(lon2-lon1);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
}

// Converts numeric degrees to radians
function toRad(Value)
{
    return Value * Math.PI / 180;
}
