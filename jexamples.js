// ALERT
function showWelcome() {
  alert("Bienvenue sur Javascript, Je Suis Caleb.");
}
function goodMorning() {
  alert("Bonjour!");
}
function goodAfternoon() {
  alert("Bonjour!");
}
function goodNight() {
  alert("Bonsoir!");
}
function specialMessage() {
  alert("Special Message for You!");
}

// USER INFO
// Get My Name
function getName() {
  let name = prompt("Enter your Name: ");
  if (name) {
    document.getElementById("displayName").innerText = "Hello " + name + "!";
  }
}
// Calculate Age
function calculateAge() {
  let input = prompt("Enter your Birthday: ");
  if (input) {
    let age;

    // If user types only a year.
    if (/^\d{4}$/.test(input)) {
      age = new Date().getFullYear() - parseInt(input);

      // If user types full date.
    } else {
      let birthDate = new Date(input);
      if (!isNaN(birthDate)) {
        let today = new Date();
        age = today.getFullYear() - birthDate.getFullYear();

        // Adjust if Birthday has not occured yet this Year.
        if (
          today.getMonth() < birthDate.getMonth() ||
          (today.getMonth() == birthDate.getMonth() &&
            today.getDate() < birthDate.getDate())
        ) {
          age--;
        }
      }
    }
    if (age) {
      document.getElementById("ageResult").innerText =
        "You are " + age + " years old.";
    } else {
      document.getElementById("ageResult").innerText =
        "Invalid input. Use YYYY or MM/DD/YYYY.";
    }
  }
}
// GET PROFILE
function getProfile() {
  let fname = prompt("First Name: ");
  let lname = prompt("Last Name: ");
  let hobby = prompt("Favorite Hobby : ");
  let food = prompt("Favorite Food: ");
  document.getElementById("profile").innerText =
    "Name: " + fname + " " + lname + " | Hobby: " + hobby + " | Food: " + food;
}

// ASK PERMISSION
function askPermission() {
  let answer = confirm("May I change the page bg-color?");
  if (answer) {
    // Find the correct background element by its new ID
    const background = document.getElementById("background-layer");

    // Remove the background image so the color can be seen
    background.style.backgroundImage = "none";

    // Set the background color to white
    background.style.backgroundColor = "white";
  } else {
    alert("Ok, keep original color!");
  }
}

// CHANGE/ RESET TEXT
function changeText() {
  document.getElementById("text").innerText = "Text has been changed!";
}
function resetText() {
  document.getElementById("text").innerText = "This is my text.";
}

// MINI CALCULATOR
function simpleCalc() {
  let a = parseInt(prompt("Enter First Number: "));
  let b = parseInt(prompt("Enter Second Number: "));
  if (!isNaN(a) && !isNaN(b)) {
    let result = a + b;
    document.getElementById("calcResult").innerText =
      a + " + " + b + " = " + result;
  }
}
