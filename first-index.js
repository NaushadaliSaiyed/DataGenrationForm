let companyName = document.getElementById("1");
let employeeSize = document.getElementById("2");
let lastName = document.getElementById("3");
let website = document.getElementById("4");
let revenue = document.getElementById("5");
let email = document.getElementById("6");
let linkedin = document.getElementById("7");
let firstName = document.getElementById("8");
let phoneNo = document.getElementById("9");

function mySubmit() {
  if (
    companyName.value == "" ||
    employeeSize.value == "" ||
    lastName.value == "" ||
    website.value == "" ||
    revenue.value == "" ||
    email.value == "" ||
    linkedin.value == "" ||
    firstName.value == "" ||
    phoneNo.value == ""
  ) {
    alert("fill your Todolist");
  } else {
    let fullData = JSON.parse(localStorage.getItem("myDataStorage")) || [];
    let uid = 1;

    if (fullData.length > 0) {
      uid = fullData[fullData.length - 1].id + 1;
    }
    let data = {
      id: uid,
      companyName: companyName.value,
      employeeSize: employeeSize.value,
      lastName: lastName.value,
      website: website.value,
      revenue: revenue.value,
      email: email.value,
      linkedin: linkedin.value,
      firstName: firstName.value,
      phoneNo: phoneNo.value,
    };

    fullData.push(data);

    localStorage.setItem("myDataStorage", JSON.stringify(fullData));
  }
}
