/*
In this project, you'll enhance the usability of a web page that has too much information. To make it easier to find information and read the page, you'll use progressive enhancement to add pagination.

The page includes a list of 54 students. You need to add programming to display 10 students per page, and add buttons to jump between the lists of 10 students.

Your solution should work for any number of student listings, whether there were 5, 25, 55 or 100 student listings.

Optionally you can add a search bar to let users search the list of students for a particular student or students.
*/

//Global variables
const studentList = document.querySelector('.student-list'); //Selects list of students
console.log(studentList);
const student = studentList.children; //Selects children of list of students
console.log(student);
const studentTotal = student.length; //Finds length of student list
console.log(studentTotal);
const pages = Math.ceil(studentTotal/10); //Finds number of pages by dividing total students by 10
console.log(pages);
const buttonPage = 1;

//When the page loads, your program should hide all but the first 10 students in the list.
function pageOne() {
  for (i = 10; i < studentTotal; i++) {
      student[i].style.display = "none";
  }
}

//Look at the HTML in the example-meets.html on lines 119-137 :  
      /*
      <div class="pagination">
          <ul>
            <li>
              <a class="active" href="#">1</a>
            </li>
             <li>
              <a href="#">2</a>
            </li>
             <li>
              <a href="#">3</a>
            </li>
             <li>
              <a href="#">4</a>
            </li>
             <li>
              <a href="#">5</a>
            </li>
          </ul>
        </div>
        */
//this is an example of the markup you'll need to add dynamically to the index.html page to create pagination links.

//Since only 10 students should be shown at a time, your programming needs to calculate the number of pages needed and add the appropriate number of links to the bottom of the page.

const page = document.querySelector(".page"); //Select div with the class of "page" in index.html
console.log(page);
const pageDiv = document.createElement("div"); //Creates div for pagination
pageDiv.className = "pagination"; //Assigns class of "pagination" to div
console.log(pageDiv);
page.appendChild(pageDiv); //Adds Pagination Div to Page Div on index.html
console.log(page);
const pageUL = document.createElement("ul"); //Creates Unordered List
console.log(pageUL);
pageDiv.appendChild(pageUL); //Adds Unordered List to Pagination Div
console.log(pageDiv);
  
//loop that creates links based on the number of pages declared in the constant above
  for (i = 1; i <= pages; i++) {
    const pageLI = document.createElement("li"); //Creates list item tags
    console.log(pageLI);
    pageUL.appendChild(pageLI); //Adds List Items to Unordered List
    console.log(pageUL);
    const pageLink = document.createElement("a"); //Creates anchor element for page link
    pageLink.textContent = i; //Assigns page number to link
    pageLI.appendChild(pageLink); //Add Links to List Items
    console.log(pageLink);
  }

//Assigns class of "active" to Page 1 link
const page1 = pageUL.firstElementChild.firstElementChild;
page1.className = "active";
console.log(page1);

//When a user clicks on “2” in the pagination, students 11 through 20 are shown. When a user clicks “3”, students 21 through 30 are shown. And so on. When “6” is clicked 51 through 55 should be shown.

const buttons = document.querySelector(".pagination");
console.log(buttons);

buttons.addEventListener("click", (event) => {
  const buttonPage = event.target.textContent;
  console.log(buttonPage);
  const upper = buttonPage * 10;
  console.log(upper);
  const lower = upper - 10;
  console.log(lower);
    for (i = 0; i < studentTotal; i++) {
      if (i >= lower && i < upper) {
          student[i].style.display = "block";
      } else {
          student[i].style.display = "none"; 
      }
    }
 
//Removes existing "active" class from links and then assigns "active" class to newly selected link
const activePage = document.getElementsByTagName("a");
console.log(activePage);
console.log(activePage.length);
  for (i = 0; i < activePage.length; i++) {
      activePage[i].classList.remove("active");  
  }
console.log(activePage);
event.target.className = "active";
console.log(activePage);
}, false);

//Your program should work for any number of students. There are 54 students in index.html, but you can test your code by adding the JavaScript file your write to the other lists of students we’ve provided in the student-list-examples folder.

  //My program works in 44students.html & 64students.html

//Before you submit your project for review, make sure you can check off all of the items on the Student Project Submission Checklist. The checklist is designed to help you make sure you’ve met the grading requirements and that your project is complete and ready to be submitted!

//NOTE: It’s good practice to check your project for cross browser compatibility. We recommend making sure your project looks and functions as expected in at least 3 different browsers.

//To get an "exceeds" rating, you can expand on the project in the following ways:

//Include a search component so that a user could search for a particular student or students. See the file example-exceeds.html and lines 16-19 for what the markup for the search component should look like.

        /*
        <div class="student-search">
          <input placeholder="Search for students...">
          <button>Search</button>
        </div>
        */

const pageHeader = document.querySelector(".page-header");
console.log(pageHeader);
const searchDiv = document.createElement("div"); //Creates div for search
searchDiv.className = "student-search"; //Assigns class of "student-search" to div
console.log(searchDiv);
pageHeader.appendChild(searchDiv); //Adds Search Div to Page Div on index.html
console.log(pageHeader);
console.log(pageHeader);
const searchBox = document.createElement('input'); //Creates input for search
searchBox.placeholder = "Search for students..."; //Assigns placeholder text to input
console.log(searchBox);
searchDiv.appendChild(searchBox); //Adds Search Box to Search Div
console.log(pageHeader);
const searchButton = document.createElement('button'); //Creates button for search
searchButton.textContent = "Search";
searchDiv.appendChild(searchButton); //Adds Search Button to Search Div
console.log(pageHeader);
const noMatchesDiv = document.createElement("div"); //Creates div for message
console.log(noMatchesDiv);
noMatchesDiv.id = "no-matches"; //Assigns id of "no-matches" to div
searchDiv.appendChild(noMatchesDiv); //Adds No Matches Div to Page Div on index.html
const noMatchesHeading = document.createElement("h2");
noMatchesDiv.appendChild(noMatchesHeading); //Adds No Matches Div to Page Div on index.html
//function hideNoMatches () {
const noMatches = document.createTextNode("No Matches");
noMatchesHeading.appendChild(noMatches);
noMatchesHeading.style.display = "none";
//}
console.log(noMatchesDiv);

//When the "Search" button is clicked, the list of students is filtered to match the search. For example if the name Phillip is typed into the box list all students whose name or email includes Phillip.

searchButton.addEventListener("click", (event) => {
  console.log("I've been clicked!")
  const search = searchBox.value.toLowerCase();
  console.log(search);
  for (i = 0; i < studentTotal; i++) {
    const studentName = studentList.children[i].getElementsByTagName("h3")[0].firstChild.nodeValue;
    console.log(studentName);
      if (search === studentName) {
        studentList.children[i].style.display = "block";
        noMatchesHeading.style.display = "none";
      } else {
        student[i].style.display = "none";
        //If no matches are found by the search, include a message in the HTML to tell the user there are no matches.
        noMatchesHeading.style.display = "block";
      } 
  }                         
});

buttons.addEventListener("click", (event) => {
  noMatchesHeading.style.display = "none";
});

//NOTE: To get an "Exceeds Expectations" grade for this project, you'll need to "exceed" on every requirement that has an "Exceeds Expectations" option.

pageOne();