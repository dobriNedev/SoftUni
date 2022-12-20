window.addEventListener('load', solution);

function solution() {
  let submitBtn = document.getElementById("submitBTN");
  submitBtn.addEventListener('click', preview);
  let name = document.getElementById("fname");
  let email = document.getElementById("email");
  let number = document.getElementById("phone");
  let address = document.getElementById("address");
  let postalCode = document.getElementById("code");
  let editBtn = document.getElementById("editBTN");
  editBtn.addEventListener('click', sendBack);
  let continueBtn = document.getElementById("continueBTN");
  continueBtn.addEventListener('click', finishOrder);
  let previewSection = document.getElementById("infoPreview");
  let block = document.getElementById("block");
  let phoneCounter = 0;
  let addressCounter = 0;
  let codeCounter = 0;

  function preview(e) {
    e.preventDefault();

    let nameValue = name.value;
    let emailValue = email.value;
    if (!nameValue || !emailValue) {
      return;
    }

    let nameLi = createLi();
    nameLi.textContent = `Full Name: ${nameValue}`;
    appendLi(nameLi);

    let emailLi = createLi();
    emailLi.textContent = `Email: ${emailValue}`;
    appendLi(emailLi);

    if (number.value) {
      let numberLi = createLi();
      numberLi.textContent = `Phone number: ${number.value}`;
      appendLi(numberLi);
      phoneCounter++;
    }

    if (address.value) {
      let addressLi = createLi();
      addressLi.textContent = `Address: ${address.value}`;
      appendLi(addressLi);
      addressCounter++;
    }

    if (postalCode.value) {
      let postalCodeLi = createLi();
      postalCodeLi.textContent = `Postal Code: ${postalCode.value}`;
      appendLi(postalCodeLi);
      codeCounter++;
    }

    editBtn.disabled = false;
    continueBtn.disabled = false;
    submitBtn.disabled = true;

    name.value = '';
    email.value = '';
    number.value = '';
    address.value = '';
    postalCode.value = '';
  }

  function appendLi(el) {
    return previewSection.appendChild(el);
  }

  function createLi() {
    return document.createElement('li');
  }

  function sendBack(e) {

    let currentOrder = e.target.parentElement.parentElement.children[0];
    let orderArr = Array.from(e.target.parentElement.parentElement.children[0].children);
    nameValue = currentOrder.children[0].textContent.split(': ')[1];
    emailValue = currentOrder.children[1].textContent.split(': ')[1];
    name.value = nameValue;
    email.value = emailValue;
    for (let i = 2; i < orderArr.length; i++) {
      let currentValue = currentOrder.children[i].textContent.split(': ')[1];
      if (phoneCounter > 0) {
        number.value = currentValue;
        phoneCounter = 0;
      } else if (addressCounter > 0) {
        address.value = currentValue;
        addressCounter = 0;
      } else if (codeCounter > 0) {
        postalCode.value = currentValue;
        codeCounter = 0;
      }
    }

    submitBtn.disabled = false;

    Array.from(currentOrder.children).forEach(el => el.remove());

    editBtn.disabled = true;
    continueBtn.disabled = true;
  }

  function finishOrder(e) {
    Array.from(block.children).forEach(el => el.remove());
    let h = document.createElement('h3');
    h.textContent = "Thank you for your reservation!";
    block.appendChild(h);
  }
}
