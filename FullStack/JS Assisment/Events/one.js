function mouseover() {
  document.getElementById("one").style.backgroundColor = "#0298CA";
  // alert("Mouse Over");
}

function doubleclick() {
  document.getElementById("two").style.backgroundColor = "#0298CA";
  // alert("Double Click");
}

function mouseout() {
  document.getElementById("three").style.backgroundColor = "#0298CA";
  // alert("Mouse Out");
}

function onfocus1() {
  document.getElementById("four").style.backgroundColor = "#0298CA";
}

function hit(){
  document.getElementById("five").style.backgroundColor = "#0298CA";
  // alert('On Click');
}

function onblur1() {
  document.getElementById("blur").style.backgroundColor = "#0298CA";
  let get_ref = document.getElementById('blur')
  document.getElementById('blur').value = get_ref.value.toUpperCase()
}
