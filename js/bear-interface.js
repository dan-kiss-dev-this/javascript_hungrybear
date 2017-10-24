// gyusi learning

function Square(side) {
  return side*side;
}

function Delta(a, b) {
  return a-b;
}

function Length(x1, y1, x2, y2) {
  dx = x1-x2;
  dy = y1-y2;
  sqdx = dx*dx;
  sqdy = dy*dy;
  return (sqdx+sqdy)
}


function hanoi(n, s, i, d)
{
  if(n == 0) return;
  hanoi(n-1, s, d, i);
  console.log("move disk "+ n +" from "+ s +" to "+ d);
  hanoi(n-1, s, i, d);
  return;
}

function sides(a,b) {
  let a2 = a*a;
  let b2 = b*b;
  return function hypotfull(a2,b2) {
    return (a2 + b2);
  }
  return hypotfull(a2,b2);
}
