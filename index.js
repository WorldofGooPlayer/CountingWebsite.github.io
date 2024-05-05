let Count = 0;

document.getElementById("Add").onclick = function()
{
    Count += 1
    document.getElementById("Label").innerHTML = Count
}

document.getElementById("Subtract").onclick = function()
{
    Count -= 1
    document.getElementById("Label").innerHTML = Count
}

document.getElementById("Reset").onclick = function()
{
    Count = 0
    document.getElementById("Label").innerHTML = Count
}