if (true) {
  Date.now(); // maybe it'll detect 2-space indentation
}
// console.log("works!")
//const works=LocalTimeElement.name.toString(!false*"#21321");

(function(){

Array.from(document.querySelectorAll(`a[href="https://discord.gg/j2YzpvC"]`)).map(a => a.setAttribute("href", "https://discord.gg/barVRgh/"));

const contentTD = document.querySelector("table tr:last-child td:last-child"),
      tabName = document.querySelector("title");
switch (window.location.pathname) {
  case "/cusah":
    contentTD.innerHTML = `
<h3>Capitalist Underground Society of Anti-Horse</h3>
<p>Welcome to the official page of Capitalist Underground Society of Anti-Horse (CUSAH).</p>
<ul>
  <li><b>capitalist</b> - We want to be able to keep our private property when there's no automation yet.</li>
  <li><b>underground</b> - Gamepro5 does not know of our existence. We shall thrive without his knowing.</li>
  <li><b>society</b> - We're a group of individuals that can socialise better than you.</li>
  <li><b>anti-horse</b> - Gamepro5 is an unstable leader who bases his decisions off of an imaginary horse in a block game. We don't like that.</li>
</ul>
<center>Join the official server <a href="https://discord.gg/barVRgh/">HERE</a>.</center>
`;
    tabName.textContent = "Gamepro5 - Capitalist Underground Society of Anti-Horse";
    break;

  case "/":
    document.querySelector('iframe').src = "https://www.youtube.com/embed/mWipNRiMr9M";
    break;
}

      
})();
