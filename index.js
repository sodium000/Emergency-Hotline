// love section count
let loveCount = document.getElementById("love-countJs").innerHTML;
let love = 1;
function lovecount() {
  let sum = love++;
  document.getElementById("love-countJs").innerHTML = sum;
}

function callAlart(a, b) {
  let coin = document.getElementById("token").innerHTML;
  if (coin >= 20) {
    const callName = a.innerHTML;
    const callnumber = b.innerHTML;
    alert(callName + " " + callnumber + "....");
    let total = coin - 20;
    document.getElementById("token").innerHTML = total;

    //Get the parent element
    const contactContainer = document.getElementById("contact");

    //Create the outer div
    const contactAdded = document.createElement("div");
    contactAdded.classList.add(
      "p-6",
      "flex",
      "justify-between",
      "items-center",
      "contactAdded"
    );

    //Create the contact part (left side)
    const contactPart = document.createElement("div");
    contactPart.classList.add("contactPart");

    const contactName = document.createElement("h1");
    contactName.classList.add("font-semibold");
    contactName.textContent = callName;

    const contactNumber = document.createElement("p");
    contactNumber.classList.add("hind-madurai-regular");
    contactNumber.classList.add("text-[#5c5c5c]");
    contactNumber.textContent = callnumber;

    // Append name and number to contactPart
    contactPart.appendChild(contactName);
    contactPart.appendChild(contactNumber);

    // Create the time element (right side)
    const contactTime = document.createElement("div");
    contactTime.classList.add("contactTime");
    contactTime.textContent = new Date().toLocaleTimeString(); // current time

    // Append left and right to the outer container
    contactAdded.appendChild(contactPart);
    contactAdded.appendChild(contactTime);

    // Append everything to the main contact container
    contactContainer.appendChild(contactAdded);
} 
else {
    alert("You don't have sufficient balance");
}
}

// copy section
let Count = 1;
function copycount(copyText) {
let copysum = Count++;
document.getElementById("CopyCount").innerHTML = copysum;
const copy = copyText.innerHTML
navigator.clipboard.writeText(copy);
alert("Hotline number will be copied:" + copy)
}



const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
  const contacts = document.getElementsByClassName("contactAdded");
  while (contacts.length > 0) {
    contacts[0].remove();
  }
});
