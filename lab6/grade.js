


// Error 1 (grade.html, Line 9): Missing 'return' in onsubmit="checkMark()", causing the form to reload and erase the result.
// Error 2 (grade.html, Line 17): Typo in onclick="showtable()"; JavaScript is case-sensitive and requires showTable().
// Error 3 (grade.html, Line 19): Wrong script filename "grades.js"; should be "grade.js".
// Error 4 (grade.js, Line 5): Used assignment operator (=) instead of comparison (===) in if (name = "").
// Error 5 (grade.js, Line 9): Typo in isNan(mark); should be isNaN(mark) with a capital N.
// Error 6 (grade.js, Line 14): Used AND (&&) instead of OR (||) in (mark < 0 && mark > 100), which can never be true.
// Error 7 (grade.js, Line 28): Typo in getElementByID; should be getElementById with a lowercase d.
// Error 8 (grade.js, Line 30): British spelling style.colour does not work in JS; should be style.color.
// Error 9 (grade.js, Line 31): Returning true submits and reloads the form; must return false to keep the result visible.
// Error 10 (grade.js, Line 38): Loop started at i = 1 instead of i = 0, skipping the first row ("A").
// Error 11 (grade.js, Line 42): Typo in innerHtml; should be innerHTML.

function checkMark() {
    let name = document.forms["gradeForm"]["name"].value.trim();
    let mark = document.forms["gradeForm"]["mark"].value.trim();

    // Validate empty name
    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    // Validate empty mark (Part 2, Step 5)
    if (mark === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    // Validate numeric mark
    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = parseInt(mark);

    // Validate range 0 to 100
    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    let grade;
    let resultEl = document.getElementById("result");

    // Determine grade and set text color accordingly (Part 2, Step 6)
    if (mark >= 80) {
        grade = "A";
        resultEl.style.color = "green";
    } else if (mark >= 65) {
        grade = "B";
        resultEl.style.color = "green";
    } else if (mark >= 50) {
        grade = "C";
        resultEl.style.color = "orange";
    } else {
        grade = "F";
        resultEl.style.color = "red";
    }

    // Display grade result and timestamp (Part 2, Step 8)
    resultEl.innerHTML = name + " got grade " + grade;
    document.getElementById("checkedTime").innerHTML = "Checked on: " + new Date();

    // Return false so the form does not refresh the page
    return false;
}

// Generate a random whole number from 0 to 100 into the mark field (Part 2, Step 7)
function generateRandomMark() {
    let randomNum = Math.floor(Math.random() * 101);
    document.getElementById("mark").value = randomNum;
}

// Display the full grade reference table
function showTable() {
    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];
    let tableHTML = "<table><tr><th>Grade</th><th>Mark range</th></tr>";

    for (let i = 0; i < grades.length; i++) {
        tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
    }

    tableHTML += "</table>";
    document.getElementById("tableContainer").innerHTML = tableHTML;
}

