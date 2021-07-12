function randomNumbers() {
  document.getElementById("num").innerHTML = "";
  var startNum = document.getElementById("from").value;
  var endNum = document.getElementById("to").value;
  var numb = document.getElementById("number").value;
  for (var i = startNum; i < endNum; i++) {
    var num = i.toString();
    var sum = 0;
    var revSum = 0;
    for (var j = 0; j < num.length; j++) {
      if (j > 0) {
        sum = sum + parseInt(num[j]);
      }
    }
    for (var j = num.length; j >= 0; j--) {
      if (j < num.length - 1) {
        revSum = revSum + parseInt(num[j]);
      }
    }
    var lastChar = sum.toString()[sum.toString().length - 1];
    if (lastChar == numb) {
      var lashar = revSum.toString()[revSum.toString().length - 1];
      if (lashar == numb) {
        document.getElementById("num").innerHTML +=
          "<div class='item'><b>" + i + "</b></div>";
      }
    }
  }
}
