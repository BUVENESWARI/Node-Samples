// var rect={
//   perimeter:(x,y)=>(2*(x+y))
// };
var rect= require('./rectangle');

function solverect(l,b)
{
  console.log("given length "+l +"and breadth "+ b );
  if(l<=0 || b<=0)
  {
    console.log("error on dimension");
  }
  else {
    {
      console.log("The perimeter of rectange = "+ rect.perimeter(l,b));
    }
  }
}
solverect(2,3);
solverect(3,5);
solverect(-2,-3);
