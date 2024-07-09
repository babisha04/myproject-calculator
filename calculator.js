function display(val)
{
    document.getElementById("value").value=document.getElementById("value").value+val;
}
function clr()
{
    document.getElementById("value").value="" ;
}
function caalc()
{
   var inp= document.getElementById("value").value;
   var res=eval(inp);
   document.getElementById("value").value=res;
}