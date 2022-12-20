window.addEventListener('load', solve);

function solve() {
    document.getElementById("add").addEventListener('click', addEntry);
    let model = document.getElementById("model");
    let year = document.getElementById("year");
    let description = document.getElementById("description");
    let price = document.getElementById("price");
    let tableSection = document.getElementById("furniture-list");
    let profitField = document.getElementsByClassName("total-price")[0];


    function addEntry(e) {
        e.preventDefault();

        let modelValue = model.value;
        let yearValue = year.value;
        let descriptionValue = description.value;
        let priceValue = price.value;
        priceValue = Number(priceValue).toFixed(2);
        
        if (!modelValue || !descriptionValue || !yearValue || yearValue <= 0 || !priceValue || priceValue <= 0) {
            return;
        }

        let trAlwaysOn = document.createElement('tr');
        trAlwaysOn.classList.add('info');

        let tdModel = document.createElement('td');
        tdModel.textContent = modelValue;
        trAlwaysOn.appendChild(tdModel);

        let tdPrice = document.createElement('td');
        tdPrice.textContent = priceValue;
        trAlwaysOn.appendChild(tdPrice);

        let tdBtns = document.createElement('td');

        let moreBtn = document.createElement('button');
        moreBtn.classList.add('moreBtn');
        moreBtn.textContent = 'More Info';
        moreBtn.addEventListener('click', showMore);
        tdBtns.appendChild(moreBtn);

        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy It';
        buyBtn.addEventListener('click', buyItem);
        tdBtns.appendChild(buyBtn);

        trAlwaysOn.appendChild(tdBtns);

        tableSection.appendChild(trAlwaysOn);

        let trExtra = document.createElement('tr');
        trExtra.classList.add('hide');

        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${yearValue}`;
        trExtra.appendChild(tdYear);

        let tdDescription = document.createElement('td');
        tdDescription.setAttribute('colspan', "3");
        tdDescription.textContent = `Description: ${descriptionValue}`;
        trExtra.appendChild(tdDescription);

        tableSection.appendChild(trExtra);
    }

    function showMore(e) {
        
        e.target.textContent = 'Less Info';
        e.target.parentElement.parentElement.parentElement.children[1].style.diplay = 'content';
        e.target.addEventListener('click', showLess);
    }

    function showLess(e) {
        e.target.textContent = 'More Info';
        e.target.parentElement.parentElement.parentElement.children[1].style.diplay = 'none';
        e.target.addEventListener('click', showMore);
    }
    
    function buyItem(e) {
        
    }
}
