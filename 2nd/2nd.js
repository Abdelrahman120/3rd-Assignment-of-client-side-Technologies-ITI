do {
    var massage=prompt("Please enter your message")
} while(massage==null || massage==="");

for(var i=1;i<=6;i++){
    document.write("<h"+i+">"+massage+"</h"+i+"></h"+i+">")
}
