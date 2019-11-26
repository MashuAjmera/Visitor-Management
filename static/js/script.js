fetch("./static/json/hosts.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(hosts) {
    for (var i = 0; i < hosts.length; i++) {
      document.getElementById("hosts").innerHTML =
        document.getElementById("hosts").innerHTML +
        `<input type="radio" name="host" value="host-${i}-id" id="host-${i}" class="" required />
        <label for="host-${i}" class="" id="host-${i}-id">
  <p class="" id="host-${i}-name">${hosts[i].name}</p>
  <p class="" id="host-${i}-email">${hosts[i].email}</p>
  <p class="" id="host-${i}-phone">${hosts[i].phone}</p>
  <p class="" id="host-${i}-address">${hosts[i].address}</p>
  </label>`;
    }
  });

let visitors = [];
let visitor = {};
var checkin = event => {
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
      visitor.addressVisited = document.getElementById(
        `host-${i}-address`
      ).innerText;
    }
  }
  visitors.push(visitor);
  console.log(visitors);
};

var checkout = event => {
  visitor.checkout = Date.now();
  console.log(visitors);
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("checkin").addEventListener("click", checkin);
  document.getElementById("checkout").addEventListener("click", checkout);
});
