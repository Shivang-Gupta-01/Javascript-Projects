console.log("This is an alarm clock App")

const alarmSubmit = document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click',setAlarm);

function ringBell()
{
    var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
    audio.play();
}
function setAlarm(e)
{  
    e.preventDefault();
    console.log('Alarm is being set........');

    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting alarm for ${alarmDate}........`);
    now  =  new Date();
    
    let timeToAlarm = alarmDate-now;
    console.log(timeToAlarm); // miliseconds after which alarm has to ring

    if(timeToAlarm>=0)
    {
        setTimeout(() => {
            console.log("Ringing Now....")
            ringBell();
        }, timeToAlarm);
    }

}