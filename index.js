function menu() {
  document.getElementById("menuToggle").addEventListener("click", function () {
    const menu = document.getElementById("menu-side");
    menu.classList.toggle("active");

  });

}
menu();

function subscribe() {
  const email = document.getElementById('email-text').value;

  if (email) {
     alert('Thank you for you subscribed : ' + email)
  } 
}
subscribe();