//document.getElementsByTagName("h1")[0].innerHTML="Good Bye!";
var quantity = 1;
var subTotal ;
var cart =[];





function profile() {
  //alert("Hello !");
  location.href = "profile.html";
}
function viewProduct(id, category) {
  //alert("Hello !");
  console.log(category + " ");
  location.href = "viewproduct.html?id=" + id + "&category=" + category;
}

function fetchParams() {
  let url = new URL(window.location.href);
  let searchParams = new URLSearchParams(url.search);
  console.log(searchParams.get("category"));
  id = searchParams.get("id");
  cat = searchParams.get("category");

  fetch(`./${cat}.json`)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      //console.log(data)
      let index = 0;
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
          index = i;
        }
      }
      console.log(data[index]);
      document.getElementById("name").innerHTML = data[index].name;
      // document.getElementById("rating").innerHTML = data[index].rating;
      document.getElementById("price").innerHTML = data[index].price;
      document.getElementById("image").setAttribute("src", data[index].image);
      console.log(
        document.getElementById("image").setAttribute("src", data[index].image)
      );
      document.getElementById("image").setAttribute("alt", data[index].name);
       const stringifiedObj = JSON.stringify(data[index])
       console.log(stringifiedObj)
      document.getElementById("cart").innerHTML = `<button style="width:200px ;margin-left:20px" onclick="addToCart(${stringifiedObj})">Add to Cart</button>`;
      
     
    });
}

function onChange(){
  var e = document.getElementById("select");
  var value = e.value;
  console.log(value)
  // var text = e.options[e.selectedIndex].text;
  // console.log(text)
  quantity= value;
}


function checked(val, catType, id) {
  //location.reload();
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


function addToCart(product ) {
  
  sessionStorage.setItem("cart" , product );

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
              <span onclick ="checked(1,'product',${
                item.id
              })" id="1.1" class="fa fa-star ${
            item.rating >= 1 ? "checked" : ""
          }"></span>
              <span onclick ="checked(2,'product',${
                item.id
              })" class="fa fa-star ${
            item.rating >= 2 ? "checked" : ""
          }"></span>
              <span onclick ="checked(3,'product',${
                item.id
              })" class="fa fa-star ${
            item.rating >= 3 ? "checked" : ""
          }"></span>
              <span onclick ="checked(4,'product',${
                item.id
              })" class="fa fa-star ${
            item.rating >= 4 ? "checked" : ""
          }"></span>
              <span onclick ="checked(5,'product',${
                item.id
              })"class="fa fa-star ${item.rating >= 5 ? "checked" : ""}"></span>
                </div> 
    
                
                <span><button class="view" onclick="viewProduct(${
                  item.id
                },'product')">View Product</button></span>
    
    
          </div>
          
      </div>`;
        })
        .join("");
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
              <span onclick ="checked()" class="fa fa-star ${
                item.rating >= 1 ? "checked" : ""
              }"></span>
              <span onclick ="checked()" class="fa fa-star ${
                item.rating >= 2 ? "checked" : ""
              }"></span>
              <span onclick ="checked()" class="fa fa-star ${
                item.rating >= 3 ? "checked" : ""
              }"></span>
              <span onclick ="checked()" class="fa fa-star ${
                item.rating >= 4 ? "checked" : ""
              }"></span>
              <span onclick ="checked()"class="fa fa-star ${
                item.rating >= 5 ? "checked" : ""
              }"></span>
                </div> 
    
                
                <span><button class="view" onclick="viewProduct(${
                  item.id
                },'mens')">View Product</button></span>
    
    
          </div>
          
      </div>`;
        })
        .join("");
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
              <span class="fa fa-star  ${
                item.rating >= 1 ? "checked" : ""
              }"></span>
              <span class="fa fa-star  ${
                item.rating >= 2 ? "checked" : ""
              }"></span>
              <span class="fa fa-star ${
                item.rating >= 3 ? "checked" : ""
              }"></span>
              <span class="fa fa-star ${
                item.rating >= 4 ? "checked" : ""
              }"></span>
              <span class="fa fa-star ${
                item.rating >= 5 ? "checked" : ""
              }"></span>
                </div> 
    
                <span><button class="view" onclick="viewProduct(${
                  item.id
                },'womens')">View Product</button></span>
    
    
          </div>
          
      </div>`;
        })
        .join("");
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
              <span class="fa fa-star ${
                item.rating >= 1 ? "checked" : ""
              }"></span>
              <span class="fa fa-star ${
                item.rating >= 2 ? "checked" : ""
              }"></span>
              <span class="fa fa-star ${
                item.rating >= 3 ? "checked" : ""
              }"></span>
              <span class="fa fa-star ${
                item.rating >= 4 ? "checked" : ""
              }"></span>
              <span class="fa fa-star ${
                item.rating >= 5 ? "checked" : ""
              }"></span>
                </div> 
    
                <span><button class="view" onclick="viewProduct(${
                  item.id
                },'footwear')">View Product</button></span>
    
    
          </div>
          
      </div>`;
        })
        .join("");
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
              <span class="fa fa-star ${
                item.rating >= 1 ? "checked" : ""
              }"></span>
              <span class="fa fa-star ${
                item.rating >= 2 ? "checked" : ""
              }"></span>
              <span class="fa fa-star ${
                item.rating >= 3 ? "checked" : ""
              }"></span>
              <span class="fa fa-star ${
                item.rating >= 4 ? "checked" : ""
              }"></span>
              <span class="fa fa-star ${
                item.rating >= 5 ? "checked" : ""
              }"></span>
                </div> 
    
                <span><button class="view" onclick="viewProduct(${
                  item.id
                },'electronics')">View Product</button></span>
    
    
          </div>
          
      </div>`;
        })
        .join("");
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
