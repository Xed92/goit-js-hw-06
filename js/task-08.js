const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }
  const user = { email: `${email.value}`, Password: `${password.value}` };
  console.log(user);
  event.currentTarget.reset();
}
