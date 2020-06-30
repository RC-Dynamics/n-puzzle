function draw_puzzle() {
  strokeWeight(2);
  stroke(0);
  var square_size = canvas_size / p_size;
  for (var i = 0; i < p_config.length; i++) {
    for (var j = 0; j < p_config[i].length; j++) {
      rect(square_size * i, square_size * j, square_size, square_size);
    }
  }
}
