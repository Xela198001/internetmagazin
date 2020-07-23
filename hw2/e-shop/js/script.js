class GoodsList {
  constructor(container = '.goods-list') {
    this.container = container;
    this.goods = [];
    this.allGoods = [];
    this._fetchGoods();
  }

  _fetchGoods() {
    this.goods = [{
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
  }

  render() {
    const block = document.querySelector(this.container);
    for (let Good of this.goods) {
      const GoodObj = new GoodItem(Good);
      this.allGoods.push(GoodObj);
      block.insertAdjacentHTML('beforeend', GoodObj.render())
    }
  }
  getSum() {
    /*let sum = 0;
    for(let product of this.goods){
        sum += product.price;
    }*/
    //reduce используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.
    let res = this.allGoods.reduce((sum, item) => sum += item.price, 0);
    alert(res);
  }
}
  
class GoodItem {
  constructor(Good) {
    this.title = Good.title;
    this.price = Good.price;
    this.id = Good.id;
    if (Good.img !== '') {
      this.img = Good.img;
    } else {
      this.img = 'nofoto.jpg'
    }

  }

  render() {
    return `<div class="goods-item" data-id="${this.id}">
                <img src="img/${this.img}" class="item-img" alt="Some img">
                <h3 class="item-title">${this.title}</h3>
                <p class="item-text">Цена: ${this.price}</p>
                <a href="#" class="item-link">Купить</a>
            </div>`
  }
}

let list = new GoodsList();
list.render();
list.getSum();

class Cart {
  addGoods() {

  }
  removeGoods() {

  }
  changeGoods() {

  }
}

class elemCart {

}
