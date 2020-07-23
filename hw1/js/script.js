const goods = [{
  title: 'Shirt',
  price: 150,
  img: 'shirt.jpg',
  },
  {
    title: 'Socks',
    price: 50,
    img: 'socks.jpg',
  },
  {
    title: 'Jacket',
    price: 350,
    img: 'jacket.jpg',
  },
  {
    title: 'Shoes',
    price: 250,
    img: 'shoes.jpg',
  },
  {
    title: 'Sweatshirt',
    price: 250,
    img: '',
  },
];

const renderGoodsItem = (title, price, img) => {
  return `<div class="goods-item">
            <img src="img/${img}" class="item-img" width="250px" height="270px">
            <h3 class="item-title">​ ${title}​ </h3>
            <p class="item-text">​ Цена: ${price} руб.​ </p>
            <a href="#" class="item-link">Купить</a>
          </div>`;
};
const renderGoodsList = (list) => {
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img != '' ? item.img : img = 'nofoto.jpg'));
  goodsList.forEach(element => document.querySelector('.goods-list').innerHTML += element);
  console.log(goodsList);
  // document.querySelector('.goods-list').innerHTML = goodsList;
}

// renderGoodsList(goods);

window.onload = renderGoodsList(goods);