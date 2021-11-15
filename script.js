function interest_received(pin, rin, tin)
{
    // Calculating interest received and removing amount of initial payment
    var p = Number(pin);
    var r = Number(rin);
    var t = Number(tin);

     // A = P(1 + rt)
    return (p * (1 + (r/100.0) * t)) - p;
}

function create_msg(pin, rin, tin, ein)
{
    // Creates and formats the final message
    var curyear = new Date().getFullYear();
    var finalyear = curyear + Number(tin);

    var msg = "If you deposit <span class=\"special\">" + pin.toString() + "</span>,\n";
    msg += "at an interest rate of <span class=\"special\">" + rin.toString() + "</span>.\n";
    msg += "You will receive an amount of <span class=\"special\">" + ein.toString() + "</span>,\n";
    msg += "in the year <span class=\"special\">" + finalyear.toString() + "</span>"

    return msg;
}

function error_check_values(pin, rin, tin)
{
    // For error checking, since all values are numbers
    // ... they can be treated equally by looping through
    // ... each element of an array created from the user
    // ... values.
    var error_check = [pin, rin, tin]
    out = true;
    error_check.forEach(element => {
        if (element == "")
        {
            // If value empty... return false
            alert("Please enter a value");
            element.focus();
            out*= false;
        }
        else if(Number(element)==NaN)
        {
            // If values cannot be interpreted as numbers, return false
            alert("Please enter a valid number");
            element.focus();
            out *= false;
        }
        else if(Number(element) <=0)
        {
            alert("All numbers must be positive");
            element.focus;
            out *= false;
        }
        else{
            
        }
    });

    console.log(out)
    return out;
}

function compute()
{
    // Main compute function
    // Performs error and type checking
    // ...then calculates amount and message
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;

    // Error check values before performing calculations
    stat = error_check_values(p, r, t)
    if(!stat)
    {
        document.getElementById("result").innerHTML = "";
        return false;
    }

   
    var earnings = interest_received(p, r, t);
    var msg = create_msg(p, r, t, earnings);
    document.getElementById("result").innerHTML = msg;
}

function update_apr_label()
{
    // Updates the APR/rate label
    // It run onload and onchange
    var r = document.getElementById("rate").value;
    document.getElementById("rate_label").innerHTML = r.toString() + "%";
}
        