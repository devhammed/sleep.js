function sleep( seconds ) {
  var start = new Date().getTime();
  while ( (new Date().getTime() - start) < (seconds * 1000) ) {
    // zZz...
  }
}