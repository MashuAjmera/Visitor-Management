// Loading Hosts from Database
fetch("/api/hosts")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(hosts) {
    for (var i = 0; i < hosts.length; i++) {
      document.getElementById("host-container").innerHTML =
        document.getElementById("host-container").innerHTML +
        `<input type="radio" name="host" value="host-${i}-id" id="host-${i}" class="host" required /><label for="host-${i}" class="host-box" id="host-${i}-id"><div class="">
        
  <p class="" id="host-${i}-name">${hosts[i].name}</p>
  <p class="" id="host-${i}-email">${hosts[i].email}</p>
  <p class="" id="host-${i}-phone">${hosts[i].phone}</p>
  <p class="" id="host-${i}-address">${hosts[i].address}</p>
  </div></label>`;
    }
  });

// Collecting Checkin Information
let visitor = {};
var checkin = event => {
  event.preventDefault();
  var checkin = new Date();
  visitor = {
    checkin: checkin.toGMTString(),
    name: document.getElementById("visitor-name").value,
    phone: document.getElementById("visitor-phone").value,
    email: document.getElementById("visitor-email").value
  };

  let hosts = document.getElementsByName("host");
  var flag = false;
  for (var i = 0; i < hosts.length; i++) {
    if (hosts[i].checked) {
      visitor.hostName = document.getElementById(`host-${i}-name`).innerText;
      visitor.hostEmail = document.getElementById(`host-${i}-email`).innerText;
      visitor.hostPhone = document.getElementById(`host-${i}-phone`).innerText;
      visitor.addressVisited = document.getElementById(
        `host-${i}-address`
      ).innerText;
      flag = true;
    }
  }
  if (
    visitor.name == "" ||
    visitor.name.length == 0 ||
    visitor.name == null ||
    visitor.phone == "" ||
    visitor.phone.length == 0 ||
    visitor.phone == null ||
    visitor.email == "" ||
    visitor.phone.length == 0 ||
    visitor.phone == null ||
    flag == false
  ) {
    alert("Please complete all the fields.");
  } else {
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

    alert("The visit details have been sent.");
  }
};

// Collecting Checkout Information
var checkout = event => {
  var checkout = new Date();
  visitor.checkout = checkout.toGMTString();
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

  window.location.reload();
  alert("The visitor has been checked out.");
};

// ########################## Add Host
var addhost = event => {
  var hostAddress = document.getElementById("host-address").value;
  var hostName = document.getElementById("visitor-name").value;
  var hostPhone = document.getElementById("visitor-phone").value;
  var hostEmail = document.getElementById("visitor-email").value;
  if (
    hostAddress == "" ||
    hostAddress.length == 0 ||
    hostAddress == null ||
    hostName == "" ||
    hostName.length == 0 ||
    hostName == null ||
    hostPhone == "" ||
    hostPhone.length == 0 ||
    hostPhone == null ||
    hostEmail == "" ||
    hostEmail.length == 0 ||
    hostEmail == null
  ) {
    alert("Please complete all the fields.");
  } else {
    fetch("/addhost", {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        hostName,
        hostPhone,
        hostEmail,
        hostAddress
      })
    })
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
    window.location.reload();
    alert("The host has been added.");
  }
};

// Function Calling
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("checkin").addEventListener("click", checkin);
  document.getElementById("addhost").addEventListener("click", addhost);
  document.getElementById("checkout").addEventListener("click", checkout);
});
