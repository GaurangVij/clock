function displayTime(){
var dateTime = new Date;
var hours = dateTime.getHours();
var mins = dateTime.getMinutes();
var secs = dateTime.getSeconds();
var session = document.getElementById('session');
if(hours>=12){
  session.innerHTML = 'PM';
  hours = hours%12;
}else{
  session.innerHTML = 'AM';
}
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = mins;
document.getElementById('seconds').innerHTML = secs;


}
setInterval(displayTime,1000);