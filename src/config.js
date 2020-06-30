var p_size = 3;
var p_config = [];
var canvas_size = 300;

function create_random_puzzle() {
  var tmp,
    array = [],
    current,
    top = p_size * p_size;
  for (var i = 0; i < top; ++i) array[i] = i;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  var i,
    j,
    temparray = [],
    chunk = p_size;
  for (i = 0, j = array.length; i < j; i += chunk) {
    temparray.push(array.slice(i, i + chunk));
  }
  return temparray;
}
