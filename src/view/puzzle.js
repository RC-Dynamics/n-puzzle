function draw_puzzle() {
  var square_size = canvas_size / p_size;
  for (var i = 0; i < p_config.length; i++) {
    for (var j = 0; j < p_config[i].length; j++) {
      strokeWeight(2);
      stroke(0);
      rect(square_size * i, square_size * j, square_size, square_size);
      if (p_config[i][j] == 0) continue;
      noStroke();
      textSize(square_size / 3);
      textAlign(CENTER, CENTER);
      text(
        p_config[i][j],
        square_size * i + square_size / 2,
        square_size * j + square_size / 2
      );
    }
  }
}
