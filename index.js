function go(zone,gotype)
{
  if(gotype == "page")
  {
    var a = "./";
    var res = a.concat(zone);
    window.open(res, "_search");
  }
  else if(gotype == "index")
  {
    var a = "./page/";
    var res = a.concat(zone);
    window.open(res, "_search");
  }
}