let r, luas;
const pi = 3.14;

document.getElementById("btn").onclick = function(){
    r = document.getElementById("r").value;
    luas = pi * r * r;
    document.getElementById("hasil").textContent = `Luas dari lingkaran dengan jari-jari ${r} adalah ${luas}`
}