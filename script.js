function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    document.getElementById("result").innerHTML = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years); 

      //document.getElementById("result").innerHTML = " if you deposit <mark>1000000</mark> at an interest of <mark>3.5%</mark>. You will receive an amount of <mark>175000</mark>, in the year <mark>2025</mark>"
}

//function calculate()
{
      //  num1 = document.getElementById("firstNumber").value;
      //  num2 = document.getElementById("secondNumber").value;
      //  num3 = document.getElementById("thirdNumber").value;
     //   document.getElementById("result").innerHTML = num1 * num2 * num3/100;
}

    function updateRate()
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }    

   