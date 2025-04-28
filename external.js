
function dissapear()
{
  document.getElementById('div').style.display="none"
}
function appear()
{
  document.getElementById('div').style.display="block"
  document.getElementById('div').innerHTML="wow the text changed"
}
function welcome() 
{
  let name = prompt("What is your name?")
  document.getElementById('div').innerHTML='Hello, ' + name
}