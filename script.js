let visitors = [];
var checkin = event => {
  event.preventDefault();
  let visitor = {
    id: Date.now(),
    name: document.getElementById("visitor-name").value,
    phone: document.getElementById("visitor-phone").value,
    email: document.getElementById("visitor-email").value
  };
  let host = document.getElementsByName("host");
  for (let i = 0; i < host.length; i++) {
    if (host[i].checked) {
      visitor.host = host[i].value;
    }
  }
  visitors.push(visitor);
  console.log(visitors);
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("checkin").addEventListener("click", checkin);
});
