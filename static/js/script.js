// Loading Hosts from Database
fetch("./static/json/hosts.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(hosts) {
    for (var i = 0; i < hosts.length; i++) {
      document.getElementById("host-container").innerHTML =
        document.getElementById("host-container").innerHTML +
        `<div class="host-box"><input type="radio" name="host" value="host-${i}-id" id="host-${i}" class="" required />
        <label for="host-${i}" class="" id="host-${i}-id">
  <p class="" id="host-${i}-name">${hosts[i].name}</p>
  <p class="" id="host-${i}-email">${hosts[i].email}</p>
  <p class="" id="host-${i}-phone">${hosts[i].phone}</p>
  <p class="" id="host-${i}-address">${hosts[i].address}</p>
  </label></div>`;
    }
  });

// Collecting Checkin Information
let visitor = {};
var checkin = event => {
  event.preventDefault();
  visitor = {
    checkin: Date.now(),
    name: document.getElementById("visitor-name").value,
    phone: document.getElementById("visitor-phone").value,
    email: document.getElementById("visitor-email").value
  };
  let hosts = document.getElementsByName("host");
  for (var i = 0; i < hosts.length; i++) {
    if (hosts[i].checked) {
      visitor.hostName = document.getElementById(`host-${i}-name`).innerText;
      visitor.hostEmail = document.getElementById(`host-${i}-email`).innerText;
      visitor.hostPhone = document.getElementById(`host-${i}-phone`).innerText;
      visitor.addressVisited = document.getElementById(
        `host-${i}-address`
      ).innerText;
    }
  }
  fetch("/checkin", {
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: visitor.name,
      email: visitor.email,
      phone: visitor.phone,
      checkin: visitor.checkin,
      hostName: visitor.hostName,
      hostEmail: visitor.hostEmail,
      hostPhone: visitor.hostPhone,
      addressVisited: visitor.addressVisited
    })
  })
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
  console.log(visitor);
};

// Collecting Checkout Information
var checkout = event => {
  visitor.checkout = Date.now();
  fetch("/checkout", {
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      name: visitor.name,
      email: visitor.email,
      phone: visitor.phone,
      checkin: visitor.checkin,
      checkout: visitor.checkout,
      hostName: visitor.hostName,
      addressVisited: visitor.addressVisited
    })
  })
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
  console.log(visitor);
};

// Function Calling
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("checkin").addEventListener("click", checkin);
  document
    .getElementById("checkout")
    .addEventListener("click", checkout, false);
});
