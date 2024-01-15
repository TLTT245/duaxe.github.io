const car1 = document.querySelector('.car1');
const car2 = document.querySelector('.car2');
let position1 = 0;
let position2 = 0;
let race;
const raceTrackWidth = document.querySelector('.road').offsetWidth - car1.offsetWidth;

document.getElementById('startButton').addEventListener('click', function() {
    startTrafficLightSequence(startRace); // Bắt đầu chuỗi đèn giao thông và sau đó là cuộc đua
});

function startTrafficLightSequence(callback) {
    changeLight('red');
    setTimeout(function() { changeLight('yellow'); }, 1000);
    setTimeout(function() {
        changeLight('green');
        callback(); // Bắt đầu cuộc đua sau khi đèn xanh sáng
    }, 2000);
}

function changeLight(color) {
    // Reset all lights
    ['red', 'yellow', 'green'].forEach(id => {
        document.getElementById(id).style.backgroundColor = 'grey'; // tắt tất cả đèn
    });
    // Bật đèn hiện tại
    document.getElementById(color).style.backgroundColor = color;
}

function startRace() {
    let race = setInterval(() => {
        position1 += Math.floor(Math.random() * 5) + 1;
        position2 += Math.floor(Math.random() * 5) + 1;

        if (position1 >= raceTrackWidth) {
            clearInterval(race);
            alert('Car 1 won!');
        } else if (position2 >= raceTrackWidth) {
            clearInterval(race);
            alert('Car 2 won!');
        }

        car1.style.left = `${position1}px`;
        car2.style.left = `${position2}px`;
    }, 100);
}

function endRace() {
  clearInterval(race);
  if (position1 > position2) {
    alert('Car 1 won!');
  } else if (position2 > position1) {
    alert('Car 2 won!');
  } else {
    alert('It\'s a tie!');
  }
  position1 = 0; // Reset để có thể chạy cuộc đua mới
  position2 = 0;
}




