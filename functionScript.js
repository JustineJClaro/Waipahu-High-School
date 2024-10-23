
function showDate() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();    
}