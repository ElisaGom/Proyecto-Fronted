function setReminder() {
    var timeInput = document.getElementById('medicine-time').value;
    if (!timeInput) {
      alert("Por favor, elija el horario para la toma de su medicamento.");
      return;
    }
  
    var currentTime = new Date();
    var hours = parseInt(timeInput.split(':')[0]);
    var minutes = parseInt(timeInput.split(':')[1]);
  
    var reminderTime = new Date();
    reminderTime.setHours(hours);
    reminderTime.setMinutes(minutes);
    reminderTime.setSeconds(0);
  
    if (reminderTime <= currentTime) {
      reminderTime.setDate(reminderTime.getDate() + 1); // Recordatorio para el siguiente dia si la alarma ya pasó
    }
  
    var timeDifference = reminderTime - currentTime;
    var secondsUntilReminder = Math.floor(timeDifference / 1000);
  
    setTimeout(function() {
      alert("Es hora de tomar tu medicina!");
    }, secondsUntilReminder * 1000);

  
  }