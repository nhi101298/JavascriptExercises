var array = [];
function add() {
  var subform = document.getElementById("sub-form");
  var temp = subform.children[0];
  var html = temp.innerHTML;
  html =
    '<div\
          name="form1"\
          class="form1"\
          style="padding: 30px; border: rgb(219, 205, 205) solid 1px;"\
        >' +
    html +
    "</div>";
  subform.insertAdjacentHTML("beforeend", html);
  checkClose();
}
function del(btnDel) {
  btnDel.parentNode.remove();
  checkClose();
}
function checkClose() {
  var count = document.getElementsByClassName("form1").length;
  if (count > 1) {
    for (var i = 0; i < count; i++) {
      var btnDel = document.getElementsByClassName("delete")[i];
      btnDel.style.display = "block";
    }
  } else {
    var btnDel = document.getElementsByClassName("delete")[0];
    btnDel.style.display = "none";
  }
}
function validateRegister() {
  var form = document.getElementsByTagName("input");
  var p = document.getElementsByClassName("error");
  var check = true;
  for (var i = 0; i < p.length; i++) {
    p[i].style.display = "none";
  }
  for (var i = 0; i < form.length; i++) {
    if (form[i].value === "") {
      p[i].style.display = "block";
      p[i].innerHTML = "This field is required";
      check = false;
    }
  }
  if (check == false) return false;
  if (form[1].value !== form[2].value) {
    p[2].style.display = "block";
    p[2].innerHTML = "This field is incorrect";
    form[2].value = "";
    return false;
  }
  for (var i = 0; i < form.length - 1; i++) {
    console.log(form[i].value);
  }
}
function validateForm1() {
  array = [];
  var check = true;
  var count = document.getElementsByClassName("form1").length;
  for (var i = 0; i < count; i++) {
    var form1 = document.getElementsByClassName("form1")[i];
    var subject = form1.getElementsByClassName("select")[0].value;
    var teacher = form1.getElementsByClassName("select")[1].value;
    var note = form1.getElementsByClassName("note")[0].value;
    if (subject == "" || teacher == "" || note == "") {
      var p = form1.getElementsByClassName("error")[0];
      p.innerHTML = "Please fill in all fields";
      p.style.display = "Block";
      check = false;
    }
  }
  if (check == false) return false;
  for (var i = 0; i < count; i++) {
    var form1 = document.getElementsByClassName("form1")[i];
    var subject = form1.getElementsByClassName("select")[0].value;
    var teacher = form1.getElementsByClassName("select")[1].value;
    var note = form1.getElementsByClassName("note")[0].value;
    array.push({ subject: subject, teacher: teacher, note: note });
  }
  console.log(array);
}
function validate() {
  validateRegister();
  validateForm1();
}
