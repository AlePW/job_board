var countdown = document.getElementById("countdown");
var description = document.getElementById("description");

function updateCountdown() {
  // 600 is the max message length
  var remaining = 600 - description.value.length;
  countdown.innerHTML = remaining + " characters remaining.";
}

function updateCountdownMsg(id) {
  var messageTxt = document.getElementById("messageTxt_" + id);
  var countdownMsg = document.getElementById("countdownMsg_" + id);

  var remaining = 200 - messageTxt.value.length;
  countdownMsg.innerHTML = remaining + " characters remaining.";
}

function updateCountdownNote(id) {
  var noteTxt = document.getElementById("noteTxt_" + id);
  var countdownNote = document.getElementById("countdownNote_" + id);

  var remaining = 200 - noteTxt.value.length;
  countdownNote.innerHTML = remaining + " characters remaining.";
}

function updateCountdownBio() {
  var bioTxt = document.getElementById("developer-bio");
  var countdownBio = document.getElementById("countdownBio");

  var remaining = 200 - bioTxt.value.length;
  countdownBio.innerHTML = remaining + " characters remaining.";
}

description.onkeyup = function() {
  updateCountdown();
};

window.onload = function() {
  updateCountdown();
};
