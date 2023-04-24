// 1.hamburger
function onClickMenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("menu").style.position="fixed"
   
   var x =document.getElementById("hide")
   if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.backgroundColor = "#eae6e0"
    x.style.height="100vh"
    x.style.width="40vh"
    x.style.marginTop="0"
    x.style.marginLeft="0"
    x.style.position="fixed"
    x.style.paddingBottom="10px"
    x.style.bottom="0"
    x.style.left="0"
  }
}

// 2.cookies

const acceptBtn = document.getElementById('accept-btn');
const cookiePopup = document.getElementById('cookie');

acceptBtn.addEventListener('click', () => {
  cookiePopup.style.display = 'none';
  document.cookie = 'accepted=true; expires=Fri, 31 Dec 2050 23:59:59 GMT';
});



// 3.go to top button

// hiding and ahowing of button

function toggleBackToTopBtn() {
  const backToTopBtn = document.getElementById('back-to-top-btn');

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

// function for calling when scrolling 
window.addEventListener('scroll', toggleBackToTopBtn);


// this scrolls back to top
const backToTopBtn = document.getElementById('back-to-top-btn');

backToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});




//4.blurring all background when cookies show up

if (document.getElementById('cookie').style.display === "block") {
  
  document.body.style.filter="blur(2px)"
  document.getElementById('cookie').style.filter="blur(0px)"
  document.getElementById('cookie').style.zIndex="2"
} else {
  document.getElementById('cookie').style.filter= "blur(0px)";
  
}




//5.scrolling and keeping the right side of suggestions and the cross sign fixed
const myDiv = document.getElementById('right-side');
const heightToFix = 700; // set the height to fix here

window.addEventListener('scroll', function() {
  if (window.scrollY > heightToFix && window.scrollY < 2050) {
    myDiv.classList.add('fixed');
    document.getElementById('right-side').style.display ="flex";
  
    // this is to keep the cross fixed while scrolling and viewing
    document.getElementsByClassName("close")[0].classList.add("fixed1");
    document.getElementsByClassName("close")[1].classList.add('fixed1');
    document.getElementsByClassName("close")[2].classList.add('fixed1');
    document.getElementsByClassName("close")[3].classList.add('fixed1');
    document.getElementsByClassName("close")[4].classList.add('fixed1');
    document.getElementsByClassName("close")[5].classList.add('fixed1');
    document.getElementsByClassName("close")[6].classList.add('fixed1');
    document.getElementsByClassName("close")[7].classList.add('fixed1');
    document.getElementsByClassName("close")[8].classList.add('fixed1');
    document.getElementsByClassName("close")[9].classList.add('fixed1');
    document.getElementsByClassName("close")[10].classList.add('fixed1');
    document.getElementsByClassName("close")[11].classList.add('fixed1');
    document.getElementsByClassName("close")[12].classList.add('fixed1');
    document.getElementsByClassName("close")[13].classList.add('fixed1');
    document.getElementsByClassName("close")[14].classList.add('fixed1');
    
  }
  else if(window.scrollY>0 && window.scrollY<700){
    myDiv.classList.remove('fixed');
    document.getElementById('right-side').style.display ="flex";

    // this is to keep the cross fixed while scrolling and viewing
    document.getElementsByClassName("close")[0].classList.remove("fixed1"); 
    document.getElementsByClassName("close")[1].classList.remove('fixed1');
    document.getElementsByClassName("close")[2].classList.remove('fixed1');
    document.getElementsByClassName("close")[3].classList.remove('fixed1');
    document.getElementsByClassName("close")[4].classList.remove('fixed1');
    document.getElementsByClassName("close")[5].classList.remove('fixed1');
    document.getElementsByClassName("close")[6].classList.remove('fixed1');
    document.getElementsByClassName("close")[7].classList.remove('fixed1');
    document.getElementsByClassName("close")[8].classList.remove('fixed1');
    document.getElementsByClassName("close")[9].classList.remove('fixed1');
    document.getElementsByClassName("close")[10].classList.remove('fixed1');
    document.getElementsByClassName("close")[11].classList.remove('fixed1');
    document.getElementsByClassName("close")[12].classList.remove('fixed1');
    document.getElementsByClassName("close")[13].classList.remove('fixed1');
    document.getElementsByClassName("close")[14].classList.remove('fixed1');
  }
  else if(window.scrollY == 0){
    myDiv.classList.remove('fixed');
    document.getElementById('right-side').style.display ="flex";

    // this is to keep the cross fixed while scrolling and viewing
    document.getElementsByClassName("close")[0].classList.remove("fixed1"); 
    document.getElementsByClassName("close")[1].classList.remove('fixed1');
    document.getElementsByClassName("close")[2].classList.remove('fixed1');
    document.getElementsByClassName("close")[3].classList.remove('fixed1');
    document.getElementsByClassName("close")[4].classList.remove('fixed1');
    document.getElementsByClassName("close")[5].classList.remove('fixed1');
    document.getElementsByClassName("close")[6].classList.remove('fixed1');
    document.getElementsByClassName("close")[7].classList.remove('fixed1');
    document.getElementsByClassName("close")[8].classList.remove('fixed1');
    document.getElementsByClassName("close")[9].classList.remove('fixed1');
    document.getElementsByClassName("close")[10].classList.remove('fixed1');
    document.getElementsByClassName("close")[11].classList.remove('fixed1');
    document.getElementsByClassName("close")[12].classList.remove('fixed1');
    document.getElementsByClassName("close")[13].classList.remove('fixed1');
    document.getElementsByClassName("close")[14].classList.remove('fixed1');
  }
    else {
    myDiv.classList.remove('fixed');
    document.getElementById('right-side').style.display ="none";

    // this is to keep the cross fixed while scrolling and viewing
    document.getElementsByClassName("close")[0].classList.remove("fixed1"); 
    document.getElementsByClassName("close")[1].classList.remove('fixed1');
    document.getElementsByClassName("close")[2].classList.remove('fixed1');
    document.getElementsByClassName("close")[3].classList.remove('fixed1');
    document.getElementsByClassName("close")[4].classList.remove('fixed1');
    document.getElementsByClassName("close")[5].classList.remove('fixed1');
    document.getElementsByClassName("close")[6].classList.remove('fixed1');
    document.getElementsByClassName("close")[7].classList.remove('fixed1');
    document.getElementsByClassName("close")[8].classList.remove('fixed1');
    document.getElementsByClassName("close")[9].classList.remove('fixed1');
    document.getElementsByClassName("close")[10].classList.remove('fixed1');
    document.getElementsByClassName("close")[11].classList.remove('fixed1');
    document.getElementsByClassName("close")[12].classList.remove('fixed1');
    document.getElementsByClassName("close")[13].classList.remove('fixed1');
    document.getElementsByClassName("close")[14].classList.remove('fixed1');
  }
});


//6. function to load random number of div container everytime we refresh 


function showMultipleRandomDivsOnRefresh(numDivsToShow) {
  // get all div elements with the class "random-div"
  var divs = document.querySelectorAll(".template");

  // generate an array of random indices between 0 and the number of divs
  const randomIndices = [];
  while (randomIndices.length < numDivsToShow) {
    const randomIndex = Math.floor(Math.random() * divs.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
      
      const myDiv = document.getElementById('right-side');
const heightToFix = 700; // set the height to fix here

window.addEventListener('scroll', function() {
  if (window.scrollY > heightToFix && window.scrollY< 2050) {
    myDiv.classList.add('fixed');
    document.getElementById('right-side').style.display ="flex";
    
  }
  else if(window.scrollY>0 && window.scrollY<700){
    myDiv.classList.remove('fixed');
    document.getElementById('right-side').style.display ="flex";
  }
  else if(window.scrollY == 0){
    myDiv.classList.remove('fixed');
    document.getElementById('right-side').style.display ="flex";
  }
   else {
    myDiv.classList.remove('fixed');
    document.getElementById('right-side').style.display ="none";
  }
});

    }
  }

  // hides all the  divs
  divs.forEach((div) => {
    div.style.display = "none";
  });

  // show the randomly selected divs
  randomIndices.forEach((index) => {
    divs[index].style.display = "flex";
  });
}

window.addEventListener("load", () => {
  showMultipleRandomDivsOnRefresh(5); 
});


//7. for the creating of custom opening and closing of dialogue box related to job profiles

//function i made is such that on clicking a particular link it shows a job profile and on clicking a button it is again hidden which can be toggled back once we click on the link again
var y = document.getElementById('link1')
var span = document.getElementsByClassName("close")[0];
var z = document.getElementById('info1')

y.onclick = function() {
  z.style.display = "block";
}
span.onclick = function() {
  z.style.display = "none";
}


// for link2

document.getElementById('link2').onclick = function() {
  document.getElementById('info2').style.display = "block";
}
document.getElementsByClassName("close")[1].onclick = function() {
  document.getElementById('info2').style.display = "none";
}

// for link3

document.getElementById('link3').onclick = function() {
  document.getElementById('info3').style.display = "block";
}
document.getElementsByClassName("close")[2].onclick = function() {
  document.getElementById('info3').style.display = "none";
}

// for link4

document.getElementById('link4').onclick = function() {
  document.getElementById('info4').style.display = "block";
}
document.getElementsByClassName("close")[3].onclick = function() {
  document.getElementById('info4').style.display = "none";
}
// for link5

document.getElementById('link5').onclick = function() {
  document.getElementById('info5').style.display = "block";
}
document.getElementsByClassName("close")[4].onclick = function() {
  document.getElementById('info5').style.display = "none";
}

// for link6

document.getElementById('link6').onclick = function() {
  document.getElementById('info6').style.display = "block";
}
document.getElementsByClassName("close")[5].onclick = function() {
  document.getElementById('info6').style.display = "none";
}

// for link7

document.getElementById('link7').onclick = function() {
  document.getElementById('info7').style.display = "block";
}
document.getElementsByClassName("close")[6].onclick = function() {
  document.getElementById('info7').style.display = "none";
}

// for link8

document.getElementById('link8').onclick = function() {
  document.getElementById('info8').style.display = "block";
}
document.getElementsByClassName("close")[7].onclick = function() {
  document.getElementById('info8').style.display = "none";
}

// for link9

document.getElementById('link9').onclick = function() {
  document.getElementById('info9').style.display = "block";
}
document.getElementsByClassName("close")[8].onclick = function() {
  document.getElementById('info9').style.display = "none";
}
// for link10

document.getElementById('link10').onclick = function() {
  document.getElementById('info10').style.display = "block";
}
document.getElementsByClassName("close")[9].onclick = function() {
  document.getElementById('info10').style.display = "none";
}
// for link11

document.getElementById('link11').onclick = function() {
  document.getElementById('info11').style.display = "block";
}
document.getElementsByClassName("close")[10].onclick = function() {
  document.getElementById('info11').style.display = "none";
}

// for link12

document.getElementById('link12').onclick = function() {
  document.getElementById('info12').style.display = "block";
}
document.getElementsByClassName("close")[11].onclick = function() {
  document.getElementById('info12').style.display = "none";
}

// for link13

document.getElementById('link13').onclick = function() {
  document.getElementById('info13').style.display = "block";
}
document.getElementsByClassName("close")[12].onclick = function() {
  document.getElementById('info13').style.display = "none";
}

// for link14

document.getElementById('link14').onclick = function() {
  document.getElementById('info14').style.display = "block";
}
document.getElementsByClassName("close")[13].onclick = function() {
  document.getElementById('info14').style.display = "none";
}
// for link15

document.getElementById('link15').onclick = function() {
  document.getElementById('info15').style.display = "block";
}
document.getElementsByClassName("close")[14].onclick = function() {
  document.getElementById('info15').style.display = "none";
}

// 8.SEARCH BAR


// function search() {
//   let searchTerm = document.getElementById("job-title2").value;
//   let apiUrl = 'http://bits-dvm.org/test_json?q=${searchTerm}';
  
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       // Process the search results
//       let locations = data.results;
//       let resultsContainer = document.getElementById("search-results");
//       resultsContainer.innerHTML = "";
//       locations.forEach(location => {
//         // Create a new HTML element for each location and append it to the results container
//         let locationElement = document.createElement("div");
//         locationElement.innerHTML = location.name;
//         resultsContainer.appendChild(locationElement);
//       });
//     });
// }

// 8.a.function for searching job title 

// Note: this function allows to filter with the particular keywords but i was unable to make something happen when i typed the first letter which does not match with the job profile but when second letter was enetered everything went display none. otherwise the code filters fine.

function search() {
let filter = document.getElementById('job-title1').value.toUpperCase();
let item = document.querySelectorAll('.template');
let l = document.querySelectorAll('.job-title');
for(var i = 0;i<=l.length;i++){
let a=item[i].querySelectorAll('.job-title')[0];
let value=a.innerHTML || a.innerText || a.textContent;
if(value.toUpperCase().indexOf(filter) > -1) {
item[i].style.display="";
}
else
{
item[i].style.display="none";
}
}
}

// 8.b. function for location and api 
  // JavaScript code for searching the JSON file
  // const searchInput = document.getElementById("job-title2");
  // const resultsDiv = document.getElementById("job-title2");

  // // Event listener for when the user types in the search bar
  // searchInput.addEventListener("keyup", function(event) {
  //   const searchText = event.target.value.toLowerCase(); // Get the search text entered by the user
  //   resultsDiv.innerHTML = ""; // Clear the previous search results

  //   fetch("test.json")
  //     .then(response => response.json()) // Parse the response as JSON
  //     .then(data => {
  //       // Filter the location data based on the search text
  //       const filteredLocations = data.filter(location =>
  //         location.name.toLowerCase().includes(searchText) 
  //           // Filter by location name
  //           // Filter by state name
          
  //       );

  //       // Display the search results
  //       const resultsList = document.createElement("ul");
  //       filteredLocations.forEach(location => {
  //         const listItem = document.createElement("li");
  //         listItem.textContent = `${location.name}`;
  //         resultsList.appendChild(listItem);
  //       });
  //       resultsDiv.appendChild(resultsList);
  //     })
  //     .catch(error => console.error(error));
  // });

//   function autocomplete(inp, arr) {
//     /*the autocomplete function takes two arguments,
//     the text field element and an array of possible autocompleted values:*/
//     var currentFocus;
//     /*execute a function when someone writes in the text field:*/
//     inp.addEventListener("input", function(e) {
//         var a, b, i, val = this.value;
//         /*close any already open lists of autocompleted values*/
//         closeAllLists();
//         if (!val) { return false;}
//         currentFocus = -1;
//         /*create a DIV element that will contain the items (values):*/
//         a = document.createElement("DIV");
//         a.setAttribute("id", this.id + "autocomplete-list");
//         a.setAttribute("class", "autocomplete-items");
//         /*append the DIV element as a child of the autocomplete container:*/
//         this.parentNode.appendChild(a);
//         /*for each item in the array...*/
//         for (i = 0; i < arr.length; i++) {
//           /*check if the item starts with the same letters as the text field value:*/
//           if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//             /*create a DIV element for each matching element:*/
//             b = document.createElement("DIV");
//             /*make the matching letters bold:*/
//             b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
//             b.innerHTML += arr[i].substr(val.length);
//             /*insert a input field that will hold the current array item's value:*/
//             b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
//             /*execute a function when someone clicks on the item value (DIV element):*/
//             b.addEventListener("click", function(e) {
//                 /*insert the value for the autocomplete text field:*/
//                 inp.value = this.getElementsByTagName("input")[0].value;
//                 /*close the list of autocompleted values,
//                 (or any other open lists of autocompleted values:*/
//                 closeAllLists();
//             });
//             a.appendChild(b);
//           }
//         }
//     });
//     /*execute a function presses a key on the keyboard:*/
//     inp.addEventListener("keydown", function(e) {
//         var x = document.getElementById(this.id + "autocomplete-list");
//         if (x) x = x.getElementsByTagName("div");
//         if (e.keyCode == 40) {
//           /*If the arrow DOWN key is pressed,
//           increase the currentFocus variable:*/
//           currentFocus++;
//           /*and and make the current item more visible:*/
//           addActive(x);
//         } else if (e.keyCode == 38) { //up
//           /*If the arrow UP key is pressed,
//           decrease the currentFocus variable:*/
//           currentFocus--;
//           /*and and make the current item more visible:*/
//           addActive(x);
//         } else if (e.keyCode == 13) {
//           /*If the ENTER key is pressed, prevent the form from being submitted,*/
//           e.preventDefault();
//           if (currentFocus > -1) {
//             /*and simulate a click on the "active" item:*/
//             if (x) x[currentFocus].click();
//           }
//         }
//     });
//     function addActive(x) {
//       /*a function to classify an item as "active":*/
//       if (!x) return false;
//       /*start by removing the "active" class on all items:*/
//       removeActive(x);
//       if (currentFocus >= x.length) currentFocus = 0;
//       if (currentFocus < 0) currentFocus = (x.length - 1);
//       /*add class "autocomplete-active":*/
//       x[currentFocus].classList.add("autocomplete-active");
//     }
//     function removeActive(x) {
//       /*a function to remove the "active" class from all autocomplete items:*/
//       for (var i = 0; i < x.length; i++) {
//         x[i].classList.remove("autocomplete-active");
//       }
//     }
//     function closeAllLists(elmnt) {
//       /*close all autocomplete lists in the document,
//       except the one passed as an argument:*/
//       var x = document.getElementsByClassName("autocomplete-items");
//       for (var i = 0; i < x.length; i++) {
//         if (elmnt != x[i] && elmnt != inp) {
//           x[i].parentNode.removeChild(x[i]);
//         }
//       }
//     }
//     /*execute a function when someone clicks in the document:*/
//     document.addEventListener("click", function (e) {
//         closeAllLists(e.target);
//     });
//   }

//  var countries = ["Afghanistan" ,"Albania" ,"Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman",,"Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America"]


// /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
// autocomplete(document.getElementById("job-title2"), countries);

//8.c function for radio buttons



//8.d function for find button


// Note: THE FILTER BUTTON IS WORKING , OTHER ONES I AM UNABLE TO DO . 

