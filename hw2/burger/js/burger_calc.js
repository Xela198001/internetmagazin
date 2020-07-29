class Param{
    constructor(element){
        this.name = element.value;
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
        console.log(this.price);
    }
}

class Burger{
    constructor(size, cutlets, add, topping) { //add - ������
        this.size = new Param(this._select(size)); 
        this.cutlets = new Param(this._select(cutlets));
        this.add = new Param(this._select(add)); 
        this.toppings = this._getToppings(topping);
        console.log(constructor);
    }
    
    _getToppings(name) {
        let result = [];
        this._selectAll(name).forEach(el => {
            result.push(new Param(el));
            console.log(result);
        })
        return result;
    }
    
    _select(name) {
        // console.log(document.querySelector(`input[name=${name}]:checked`));
        return document.querySelector(`input[name=${name}]:checked`);
    }
    
    _selectAll(name){
        return [...document.querySelectorAll(`input[name=${name}]:checked`)];
   }
    
    _sumPrice(){
        //console.log(this.toppings);
        let result = this.size.price + this.cutlets.price + this.add.price;
        this.toppings.forEach(el => result += el.price);
        return result;
    }
    
    _sumCalories(){
        let result = this.size.calories + this.cutlets.calories + this.add.calories;
        this.toppings.forEach(el => result += el.calories);
        return result;
    }
    
    showSum(price, calories){
        document.querySelector(price).textContent = this._sumPrice();
        document.querySelector(calories).textContent = this._sumCalories();
    }
}