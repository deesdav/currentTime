const demo = document.getElementById("demo");

const d = new Date();
demo.innerText= d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();

setInterval(() => {
    window.location.reload(); 
}, 1000);