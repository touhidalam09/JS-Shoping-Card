var cartproduct = [];
var totalPriceArray = [];

window.onload = function() {


    const products = [{
            id: 1,
            quanty: 1,
            productName: "Product1 shirt pant boys girls",
            imagePath: "../assets/img/1.jpg",
            price: "1000"
        },
        {
            id: 2,
            quanty: 1,
            productName: "Product2",
            imagePath: "../assets/img/2.png",
            price: "2000"
        },
        {
            id: 3,
            quanty: 1,
            productName: "Product3",
            imagePath: "../assets/img/3.jpg",
            price: "3000"
        },
        {
            id: 4,
            quanty: 1,
            productName: "Product4",
            imagePath: "../assets/img/4.jpg",
            price: "600"
        },
        {
            id: 5,
            quanty: 1,
            productName: "Product5",
            imagePath: "../assets/img/5.jpg",
            price: "800"
        },
        {
            id: 6,
            quanty: 1,
            productName: "Product6",
            imagePath: "../assets/img/6.jpg",
            price: "700"
        },
        {
            id: 7,
            quanty: 1,
            productName: "Product7",
            imagePath: "../assets/img/7.jpg",
            price: "7000"
        },
        {
            id: 8,
            quanty: 1,
            productName: "Product8",
            imagePath: "../assets/img/8.jpg",
            price: "8000"
        },
        {
            id: 9,
            quanty: 1,
            productName: "Product9",
            imagePath: "../assets/img/9.png",
            price: "9000"
        },
        {
            id: 10,
            quanty: 1,
            productName: "Product10 shirt color",
            imagePath: "../assets/img/10.jpg",
            price: "1000"
        },
        {
            id: 11,
            quanty: 1,
            productName: "Product11",
            imagePath: "../assets/img/11.jpg",
            price: "1100"
        },
        {
            id: 12,
            quanty: 1,
            productName: "Product12",
            imagePath: "../assets/img/12.jpg",
            price: "1200"
        },
        {
            id: 13,
            quanty: 1,
            productName: "Product13",
            imagePath: "../assets/img/13.jpg",
            price: "1300"
        },
        {
            id: 14,
            quanty: 1,
            productName: "Product14",
            imagePath: "../assets/img/14.jpg",
            price: "1400"
        },
        {
            id: 15,
            quanty: 1,
            productName: "Product15",
            imagePath: "../assets/img/15.jpg",
            price: "1500"
        }
    ];


    // Card Create Start
    const productSection = document.querySelector('.product-section');
    for (let i = 0; i < products.length; i++) {

        var card = document.createElement("div");
        card.classList.add('card');
        card.setAttribute('title', products[i].productName + " Price: " + products[i].price);
        card.onclick = function() {
            shopingCart(products[i]);
        };
        productSection.appendChild(card);

        var cardHeader = document.createElement("div");
        cardHeader.classList.add('card-header');
        card.appendChild(cardHeader);

        var cardImg = document.createElement('img');
        cardImg.classList.add('card-img');
        cardImg.src = products[i].imagePath;
        cardImg.alt = "no image";
        cardHeader.appendChild(cardImg);

        var cardBody = document.createElement('div')
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);

        var cardSpan = document.createElement('span')
        cardSpan.classList.add('card-span');
        cardSpan.innerHTML = products[i].productName
        cardBody.appendChild(cardSpan);

        var cardPriceTag = document.createElement('p')
        cardPriceTag.classList.add('price-tag');
        cardPriceTag.innerHTML = "Price: &#2547; " + products[i].price
        cardBody.appendChild(cardPriceTag);
    }
    // card Create END 

}

function shopingCart(product) {
    // Shoping Card START
    let findProduct = cartproduct.find((value) => { return value.id == product.id });

    if (findProduct) {
        let findIndex = cartproduct.findIndex(v => { return v === findProduct });
        cartproduct[findIndex].quanty = cartproduct[findIndex].quanty + 1;
    } else {
        cartproduct.push(product);
    }
    renderCartProducts(cartproduct);
    // Shoping Card END
}

function deleteCardItem(cartItemIndex) {
    // before delete element edit quanty value because of going back to intialize state
    cartproduct[cartItemIndex].quanty = 1;

    cartproduct.splice(cartItemIndex, 1);
    renderCartProducts(cartproduct);
}

function renderCartProducts(cartproducts) {
    var checkoutList = document.querySelector('.checkout-list');
    var totalQuantyPrice = 0;

    if (!cartproducts.length) {
        checkoutList.innerHTML = "";
        totalPriceArray = [];
        paymentMethod(totalQuantyPrice)
    } else {
        checkoutList.innerHTML = "";

        for (let j = 0; j < cartproducts.length; j++) {

            var cardList = document.createElement('div');
            cardList.classList.add('card-list');
            checkoutList.appendChild(cardList);

            var cardListBody = document.createElement('div');
            cardListBody.classList.add('card-list-body');
            cardList.appendChild(cardListBody);

            var proInfo = document.createElement('div');
            proInfo.classList.add('product-info');
            cardListBody.appendChild(proInfo);

            var imgCardDiv = document.createElement('div');
            imgCardDiv.classList.add('img-div')
            proInfo.appendChild(imgCardDiv);

            var cardListImg = document.createElement('img');
            cardListImg.classList.add('card-list-img');
            cardListImg.src = cartproducts[j].imagePath;
            cardListImg.alt = "no image";
            imgCardDiv.appendChild(cardListImg);

            var quanty = document.createElement('span');
            quanty.classList.add('quanty');
            quanty.innerHTML = cartproducts[j].quanty;
            imgCardDiv.appendChild(quanty);

            var listProductName = document.createElement('div');
            listProductName.classList.add('product-name');
            proInfo.appendChild(listProductName);

            var listProductSpan = document.createElement('span');
            listProductSpan.classList.add('card-list-span');
            listProductSpan.innerHTML = cartproducts[j].productName;
            listProductName.appendChild(listProductSpan);

            var proAction = document.createElement('div');
            proAction.classList.add('product-action');
            cardListBody.appendChild(proAction);

            //Total Quanty price
            totalQuantyPrice = cartproducts[j].quanty * cartproducts[j].price;
            var listProductPrice = document.createElement('div');
            listProductPrice.classList.add('product-price');
            listProductPrice.innerHTML = "BDT " + totalQuantyPrice;
            proAction.appendChild(listProductPrice);

            var deleteList = document.createElement('div');
            deleteList.classList.add('product-delete');
            proAction.appendChild(deleteList);

            var deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn-delete');
            deleteBtn.setAttribute('type', 'button');
            deleteBtn.onclick = function() {
                deleteCardItem(j)
            };
            deleteList.appendChild(deleteBtn);

            var icon = document.createElement('i');
            icon.classList.add('fa-solid');
            icon.classList.add('fa-trash-arrow-up');
            deleteBtn.appendChild(icon);


            //Payment Function
            paymentMethod(totalQuantyPrice);
        }
    }
}

function paymentMethod(totalQuantyPrice) {
    // Cost Display
    totalPriceArray.push(totalQuantyPrice);
    totalPriceArray.length >= 3 ?
        totalPriceArray.splice(0, (totalPriceArray.length - cartproduct.length)) :
        '';
    taotalPayment = totalPriceArray.reduce((accumulator, curr) => accumulator + curr);


    let discountAmount = document.querySelector('.discount-cost');
    discountAmount.innerHTML = "0.00";

    let subTotal = document.querySelector('.subtotal-cost');
    subTotal.innerHTML = taotalPayment;

    let vat = document.querySelector('.tax-cost');
    vat.innerHTML = "0";

    let total = document.querySelector(".total-cost");
    total.innerHTML = taotalPayment;

    let pay = document.querySelector(".pay");
    pay.innerHTML = taotalPayment;
}