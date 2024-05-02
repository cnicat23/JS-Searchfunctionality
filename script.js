const dataRow = document.querySelector(".dataRow");
const loadBtns = document.querySelector(".loadBtn");
const inp = document.querySelector(".input");

let startindex = 0;
let endindex = 8;

function ProductLoad() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((datas) => {
      console.log(datas);
      for (let i = startindex; i < endindex; i++) {
        dataRow.innerHTML += `
              <div class="card col-sm-12 mt-5 col-md-4 col-lg-4 mb-4" style="width: 18rem">
              <img src=${
                datas[i].image
              } class="card-img-top titleImg" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${datas[i].title}title</h5>
                <p class="card-text">
                  ${
                    datas[i].description.length > 50
                      ? datas[i].description.substring(0, 50) + "..."
                      : datas[i].description
                  }
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
              `;
      }
    });
}

ProductLoad();

loadBtns.addEventListener("click", () => {
  startindex = endindex;
  endindex += 4;
  ProductLoad();
});

inp.addEventListener("input", function () {
  const searchValue = inp.value.toLowerCase().trim();
  dataRow.innerHTML = "";

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((datas) => {
      console.log(datas);
      datas.forEach((elem) => {
        if (elem.title.toLowerCase().includes(searchValue)) {
          dataRow.innerHTML += `
              <div class="card col-sm-12 mt-5 col-md-4 col-lg-4 mb-4" style="width: 18rem">
                <img src=${
                  elem.image
                } class="card-img-top titleImg" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${elem.title}title</h5>
                  <p class="card-text">
                    ${
                      elem.description.length > 50
                        ? elem.description.substring(0, 50) + "..."
                        : elem.description
                    }
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            `;
        }
      });
    });
});
