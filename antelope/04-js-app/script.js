const button = document.getElementById("sendMessage");
button.onclick = function() {
  console.log('123');
  console.log(button);
  button.textContent = 'Нажмите еще раз';
}