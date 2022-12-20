window.addEventListener("load", solve);

function solve() {
    document.querySelector('button[type="submit"]').addEventListener('click', sendForm);
    let product = document.getElementById('type-product');
    let description = document.getElementById('description');
    let name = document.getElementById('client-name');
    let phone = document.getElementById('client-phone');
    let receivedOrdersSection = document.getElementById('received-orders');
    let completedOrdersSection = document.getElementById("completed-orders");
    document.getElementsByClassName('clear-btn')[0].addEventListener('click', clearRepair);
    
    function sendForm(e) {

        e.preventDefault();

        let productValue = product.value;
        let nameValue = name.value;
        let phoneValue = phone.value;
        let descriptionValue = description.value;

        if (!productValue || !nameValue || !phoneValue || !descriptionValue) {
            return;
        }

        let div = createDomElements(productValue, nameValue, phoneValue, descriptionValue);

        receivedOrdersSection.appendChild(div);

        clearInput();
    }

    function createDomElements(productValue, nameValue, phoneValue, descriptionValue) {

        let div = document.createElement('div');
        div.classList.add('container');

        let productH = document.createElement('h2');
        productH.textContent = `Product type for repair: ${productValue}`;
        div.appendChild(productH);

        let clientInfoH = document.createElement('h3');
        clientInfoH.textContent = `Client information: ${nameValue}, ${phoneValue}`;
        div.appendChild(clientInfoH);

        let descriptionH = document.createElement('h4');
        descriptionH.textContent = `Description of the problem: ${descriptionValue}`;
        div.appendChild(descriptionH);

        let startBtn = document.createElement('button');
        startBtn.classList.add('start-btn');
        startBtn.textContent = 'Start Repair';
        startBtn.addEventListener('click', startRepair);
        div.appendChild(startBtn);

        let finishBtn = document.createElement('button');
        finishBtn.classList.add('finish-btn');
        finishBtn.textContent = 'Finish repair';
        finishBtn.disabled = true;
        finishBtn.addEventListener('click', finishRepair);
        div.appendChild(finishBtn);

        return div;
    }

    function clearInput() {
        //product.value = '';
        name.value = '';
        phone.value = '';
        description.value = '';
    }

    function startRepair(e) {
        e.target.disabled = true;
        let finishBtn = e.target.parentElement.getElementsByClassName('finish-btn')[0];
        finishBtn.disabled = false;
    }

    function finishRepair(e) {
        
        let currentRepair = e.target.parentElement.children;
        let productValue = currentRepair[0].textContent.split(': ')[1];
        let nameValue = currentRepair[1].textContent.split(': ')[1].split(', ')[0];
        let phoneValue = currentRepair[1].textContent.split(': ')[1].split(', ')[1]
        let descriptionValue = currentRepair[2].textContent.split(': ')[1];

        let div = createDomElements(productValue, nameValue, phoneValue, descriptionValue);

        completedOrdersSection.appendChild(div);

        Array.from(completedOrdersSection.querySelectorAll('.start-btn')).forEach(btn => btn.remove());
        Array.from(completedOrdersSection.querySelectorAll('.finish-btn')).forEach(btn => btn.remove());
        
        e.target.parentElement.remove();
    }

    function clearRepair(e) {
        let completedRepairs = e.target.parentElement.querySelectorAll('.container');
        Array.from(completedRepairs).forEach(el => el.remove());
    }
}