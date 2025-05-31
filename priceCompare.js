const enterBtn = document.getElementById("enter-btn");
const product1Name = document.getElementById("product-1-name");
const product1Price = document.getElementById("product-1-price");
const product1Volume = document.getElementById("product-1-volume");
const product1Select = document.getElementById("volume-select-product-1");
const product2Name = document.getElementById("product-2-name");
const product2Price = document.getElementById("product-2-price");
const product2Volume = document.getElementById("product-2-volume");
const product2Select = document.getElementById("volume-select-product-2");
const resultMsg = document.getElementById("result-msg");

let product1 = {};
let product2 = {};

const reset = () => {
    resultMsg.innerHTML = ``;
    document.getElementById("product-2").style.backgroundColor = "";
    document.getElementById("product-1").style.backgroundColor = "";
}

const product = () => {
    product1.name = product1Name.value;
    product1.price = product1Price.value;
    product1.volume = product1Volume.value;

    product2.name = product2Name.value;
    product2.price = product2Price.value;
    product2.volume = product2Volume.value;

    let volume;

    switch (product1Select.value) {
        case "Pounds":
            volume = "pound";
            break;
        case "Items":
            volume = "item";
            break;
        case "Ounces":
            volume = "ounce";
            break;
        default:
            volume = product1.volume;
    }

    let valueArr = [product1Name.value, product1Price.value, product1Volume.value, product2Name.value, product2Price.value, product2Volume.value];

    let priceFor1 = (product1.price / product1.volume).toFixed(2);
    let priceFor2 = (product2.price / product2.volume).toFixed(2);

    console.log(priceFor1, priceFor2);

    if (priceFor1 === priceFor2) {
        console.log("same");
        resultMsg.innerHTML = `
            <p>
                ${product1.name} is the same price as ${product2.name}
            </p>
        `;
        return;
    }

    for(let i = 0; i < valueArr.length; i++) {
        if(valueArr[i] === "") {
            resultMsg.innerHTML = `
            <p>
                Please fill all input fields
            </p>
            `;
            return;
        }
    };
    
    if(product1Select.value !== product2Select.value) {
        resultMsg.innerHTML = `
            <p>
                Units must be matching
            </p>
        `;
        return;
    };
    
    if(priceFor1 > priceFor2) {
        resultMsg.innerHTML = `
            <p>
                ${product1.name} is  more expensive per ${volume} than ${product2.name}
            </p>
            <p>
                ${product1.name} is $${(priceFor1 - priceFor2).toFixed(2)} more per ${volume} than ${product2.name}
            </p>
        `;
        document.getElementById("product-1").style.backgroundColor = "rgba(255, 0, 0, .7";
        document.getElementById("product-2").style.backgroundColor = "rgba(0, 255, 0, .7";
        return;
    } else if(priceFor1 < priceFor2) {
        resultMsg.innerHTML = `
            <p>
                ${product2.name} is  more expensive per ${volume} than ${product1.name}
            </p>
            <p>
                ${product2.name} is $${(priceFor2 - priceFor1).toFixed(2)} more per ${volume} than ${product1.name}
            </p>
        `;
        document.getElementById("product-2").style.backgroundColor = "rgba(255, 0, 0, .7";
        document.getElementById("product-1").style.backgroundColor = "rgba(0, 255, 0, .7";
        return;
    } else {
        resultMsg.innerHTML = `
        <p>
            An error has occured
        </p>
        `;
        return;
    };
};

enterBtn.addEventListener("click", () => {
    reset();
    product();
});
