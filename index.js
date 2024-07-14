let spinnerEl = document.getElementById("spinner");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let counter = 0;

function getQuote() {
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/random-quote";

    spinnerEl.classList.remove("d-none");
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                content
            } = jsonData;
            spinnerEl.classList.add("d-none");
            quoteDisplayEl.textContent = content;
        });
}
getQuote();
let clearIntervalIdEl = setInterval(function() {
    counter = counter + 1;
    timerEl.textContent = counter + " seconds";
}, 1000)






submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    let entered = quoteInputEl.value;
    console.log(entered);
    if (entered === quoteDisplayEl.textContent) {

        clearInterval(clearIntervalIdEl);
        resultEl.textContent = "You typed in " + counter + " seconds";
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
});
resetBtnEl.addEventListener("click", function() {
    counter = 0;
    getQuote();
    resultEl.textContent = "";
    quoteInputEl.value = "";
});