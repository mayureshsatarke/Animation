document.getElementById('alarmForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const alarmTime = document.getElementById('alarmTime').value;
    if (!alarmTime) return;

    const [hours, minutes] = alarmTime.split(':').map(Number);
    const alarmDate = new Date();
    alarmDate.setHours(hours);
    alarmDate.setMinutes(minutes);
    alarmDate.setSeconds(0);

    const now = new Date();
    let timeToAlarm = alarmDate.getTime() - now.getTime();

    if (timeToAlarm < 0) {
        timeToAlarm += 24 * 60 * 60 * 1000; // If the time is already past for today, set it for tomorrow
    }

    document.getElementById('status').textContent = `Alarm set for ${alarmDate.toLocaleTimeString()}`;

    setTimeout(() => {
        alert('Alarm ringing!');
        document.getElementById('status').textContent = 'Alarm rang!';
    }, timeToAlarm);
});
