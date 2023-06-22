document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formId");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    console.log(name,email,phone);

  });
});
