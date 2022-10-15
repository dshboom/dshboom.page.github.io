function go(zone,gotype)
{
  if(gotype == "page")
  {
    var a = "./tree/main/";
    var res = a.concat(zone);
    window.open(res, "_search");
  }
  else if(gotype == "index")
  {
    var a = ".tree/main/page/";
    var res = a.concat(zone);
    window.open(res, "_search");
  }
}
