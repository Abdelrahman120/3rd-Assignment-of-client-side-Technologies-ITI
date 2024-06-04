var age =0;
do {
    var Nam=prompt("please enter your name")
}while (Nam=="" || Nam==null || !isNaN(Nam));

do {
    var year=prompt("please enter your birth year")
    age = 2024-Number(year);
}while (year==null || year=="" || Number(year)>=2010 || !isFinite(year));

document.write("<div>Name:<span>"+Nam+"</span></div>");
document.write("<div>Birth year:<span>"+year+"</span></div>");
document.write("<div>Age:<span>"+age+"</span></div>");
