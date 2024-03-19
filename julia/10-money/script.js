
const currency = {
    usd: 'USD',
    eur: 'EUR'
}

const selectedCurrency = currency.usd;
let selectedValue = 1;
const outputCurrency = currency.eur;
let outputCurrencyValue = 1;

const result = {};

const correlationCurrency = document.getElementById('correlation-between-currency');

const render = () => {
    const renderCorrelationCurrency = () => {
        correlationCurrency.innerText = `1 ${currency.usd} = ${outputCurrencyValue} ${outputCurrency}`;
    }

    renderCorrelationCurrency();
}

const getCurrency = async () => {
    const response = await fetch(`https://v6.exchangerate-api.com/v6//latest/${selectedCurrency}`);
    const result = await response.json();

    console.log(result);

    const rates = result.conversion_rates;

    outputCurrencyValue = rates[outputCurrency];
    console.log(outputCurrencyValue);
    render();
}



getCurrency();
