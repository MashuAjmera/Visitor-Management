// Loading Hosts from Database
fetch("/api/hosts")
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

  document.getElementById("checkin").disabled = true;
  document.getElementById("checkout").disabled = false;

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

  document.getElementById("checkout").disabled = true;
  document.getElementById("checkin").disabled = false;

  console.log(visitor);
};

// Add Host
var addhost = event => {
  fetch("/addhost", {
    method: "post",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      hostName: document.getElementById("visitor-name").value,
      hostPhone: document.getElementById("visitor-phone").value,
      hostEmail: document.getElementById("visitor-email").value,
      hostAddress: document.getElementById("host-address").value
    })
  })
    .then(function(res) {
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    });
  window.location.reload();
  console.log("Host Added");
};

// Function Calling
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("checkin").addEventListener("click", checkin);
  document.getElementById("addhost").addEventListener("click", addhost);
  document
    .getElementById("checkout")
    .addEventListener("click", checkout, false);
});
