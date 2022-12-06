var row = document.getElementById('cardrow');
// search bar
// const searchButton = document.getElementById('search-button');
// const searchage = document.getElementById('search-input-age');
// const searchprice = document.getElementById('search-input-price');
// const searchmini = document.getElementById('search-input-mini');
// const searchmax = document.getElementById('search-input-max');
// searchButton.addEventListener('click', () => {
//   const inputage= searchage.value;
//   const inputprice = searchprice.value;
//   const inputmini = searchmini.value;
//   const inputmax = searchmax.value;
//   alert(inputage);
//   alert(inputprice);
//   alert(inputmini);
//   alert(inputmax);
// });

// function view(e)
// {
//   console.log(e.target.id);
// }

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{ console.log(json)
     for (const key in json) {
  var col = document.createElement('div')
  col.setAttribute("class","col-md-4");
  row.appendChild(col);
  var card = document.createElement('div');
  card.setAttribute('class','card my-3');
  card.style.width = "18rem";
  col.appendChild(card);
  var img = document.createElement('img');
  img.setAttribute('class','card-img-top');
  img.setAttribute('src','book.jpg')
  card.appendChild(img);
  var cardbody = document.createElement('div');
  cardbody.setAttribute('class','card-body');
  card.appendChild(cardbody);
  var title = document.createElement('h5');
  title.setAttribute('class','card-title');
  title.innerText = "title";
  cardbody.appendChild(title);
  var para = document.createElement('p');
  para.setAttribute('class','card-text')
  para.innerHTML = "description";
  cardbody.appendChild(para);
  var anchor = document.createElement('a');
  anchor.setAttribute('class','btn btn-success');
  anchor.innerText = "view";
  cardbody.appendChild(anchor);
}
})

