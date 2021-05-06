function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years); 

      document.getElementById("result").innerHTML = " if you deposit <mark>1000000</mark> at an interest of <mark>3.5%</mark>. You will receive an amount of <mark>175000</mark>, in the year <mark>2025</mark>"

    
    //p = document.getElementById("principal").value;
    

}
    function updateRate()
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }    

   