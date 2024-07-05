// let myTitle = document.getElementById("myTitle")
// myTitle.textContent = "Testing this feature"
// console.log(myTitle);

const elementName = document.getElementsByClassName("header2");
for (i = 0; i < elementName.length; i++) {
  console.log(elementName[i].textContent = "Philip Osir Otieno");
}

// let elementName2 = document.querySelector()

// let contentNames = document.querySelectorAll(".selctItems")
// let itemModification = () => {
//   contentNames.forEach((items) => items.textContent = "We are now testing");
//   console.log(items)
// }
// itemModification();
let elementIdentifications = document.querySelectorAll(".selctItems");

let elements = () => {
  elementIdentifications.forEach(item => { 
    return item = (item.textContent = "We are here Osir with JS")
  });
}
console.log(elements());