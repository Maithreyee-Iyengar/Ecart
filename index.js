//document.getElementsByTagName("h1")[0].innerHTML="Good Bye!";

function profile() {
  //alert("Hello !");
  location.href = "profile.html";
}
function viewProduct() {
  //alert("Hello !");
  location.href = "viewproduct.html";
}

// var list = document.querySelector('.rate');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'SPAN') {
//     ev.target.classList.toggle('checked'); //add class
//   }
// }, false);

function categories() {
  var click = document.getElementById("list-items");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}

var i = 0;
function addToCart() {
  console.log("hfukhfquwh");
  i++;
  document.getElementById("inc").value = i;
}

// let search = document.getElementById("searchImg");
// search = ()=>{
//    window.open("https://www.google.com/search?q=border+style+css&oq=&aqs=chrome.0.35i39i362l8.80674876j0j15&sourceid=chrome&ie=UTF-8");
// }
let pageNoLower = 0;
let pageNoUpper = 4;
function getProductsList() {
  fetch("./product.json")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      document.getElementById("list").innerHTML = data
        .slice(pageNoLower, pageNoUpper)
        .map((item) => {
          return `<div class="product" id=${item.id}>
          <img src=${item.image} alt="" />
          <div class="productDetails">
              <h2>${item.name}</h2>
              <h4>Rs ${item.price}</h4>
              <div class="rate">
              <span onclick ="checked()" id="1.1" class="fa fa-star "></span>
              <span onclick ="checked()" class="fa fa-star "></span>
              <span onclick ="checked()" class="fa fa-star "></span>
              <span onclick ="checked()" class="fa fa-star"></span>
              <span onclick ="checked()"class="fa fa-star"></span>
                </div> 
    
                <span> <button onclick="addToCart()">Add to Cart</button><button class="view" onclick="viewProduct()">View Product</button></span>
    
    
          </div>
          
      </div>`;
        });
    });
}

function getMensList() {
  fetch("./mens.json")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      document.getElementById("mens").innerHTML = data
        .slice(pageNoLower, pageNoUpper)
        .map((item) => {
          return `<div class="product" id=${item.id}>
          <img src=${item.image} alt="" />
          <div class="productDetails">
              <h2>${item.name}</h2>
              <h4>Rs ${item.price}</h4>
              <div class="rate">
              <span onclick ="checked()" class="fa fa-star "></span>
              <span onclick ="checked()" class="fa fa-star "></span>
              <span onclick ="checked()" class="fa fa-star "></span>
              <span onclick ="checked()" class="fa fa-star"></span>
              <span onclick ="checked()"class="fa fa-star"></span>
                </div> 
    
                <span> <button onclick="addToCart()">Add to Cart</button><button class="view" onclick="viewProduct()">View Product</button></span>
    
    
          </div>
          
      </div>`;
        });
    });
}

function getWomensList() {
  fetch("./womens.json")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      document.getElementById("womens").innerHTML = data
        .slice(pageNoLower, pageNoUpper)
        .map((item) => {
          return `<div class="product" id=${item.id}>
          <img src=${item.image} alt="" />
          <div class="productDetails">
              <h2>${item.name}</h2>
              <h4>Rs ${item.price}</h4>
              <div class="rate">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
                </div> 
    
                <span> <button onclick="addToCart()">Add to Cart</button><button class="view" onclick="viewProduct()">View Product</button></span>
    
    
          </div>
          
      </div>`;
        });
    });
}

function getFootwearList() {
  fetch("./footwear.json")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      document.getElementById("footwear").innerHTML = data
        .slice(pageNoLower, pageNoUpper)
        .map((item) => {
          return `<div class="product" id=${item.id}>
          <img src=${item.image} alt="" />
          <div class="productDetails">
              <h2>${item.name}</h2>
              <h4>Rs ${item.price}</h4>
              <div class="rate">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
                </div> 
    
                <span> <button onclick="addToCart()">Add to Cart</button><button class="view" onclick="viewProduct()">View Product</button></span>
    
    
          </div>
          
      </div>`;
        });
    });
}

function getElectronicsList() {
  fetch("./electronics.json")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      document.getElementById("electronics").innerHTML = data
        .slice(pageNoLower, pageNoUpper)
        .map((item) => {
          return `<div class="product" id=${item.id}>
          <img src=${item.image} alt="" />
          <div class="productDetails">
              <h2>${item.name}</h2>
              <h4>Rs ${item.price}</h4>
              <div class="rate">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
                </div> 
    
                <span> <button onclick="addToCart()">Add to Cart</button><button class="view" onclick="viewProduct()">View Product</button></span>
    
    
          </div>
          
      </div>`;
        });
    });
}

getProductsList();
getMensList();
getWomensList();
getFootwearList();
getElectronicsList();

const nextPage = () => {
  pageNoLower += 4;
  pageNoUpper += 4;
  getProductsList();
  getMensList();
  getWomensList();
  getFootwearList();
  getElectronicsList();
};
const prevPage = () => {
  pageNoLower = 0;
  pageNoUpper = 4;
  getProductsList();
  getMensList();
  getWomensList();
  getFootwearList();
  getElectronicsList();
};
