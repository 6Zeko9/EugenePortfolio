var col1 = 0
var col2 = 0
var col3 = 0
var itog = 0
var rub = '₽';

window.onload = function() {
    var elem1 = 0
    var elem2 = 0
    var elem3 = 0
    var echo
    const Price1 = document.querySelector('.Price');
    const TowarNameText1 = document.querySelectorAll('p.TowName1')
    const TowarNameText2 = document.querySelectorAll('p.TowName2')
    const TowarNameText3 = document.querySelectorAll('p.TowName3')
    const container1 = document.querySelectorAll('p.container1')
    const container2 = document.querySelectorAll('p.container2')
    const container3 = document.querySelectorAll('p.container3')
    if (elem1 === 0) {
        elem1 = 1
        // container1.classList.remove('hide')
        document.getElementById('container1').classList.remove('hide')
        let cat = localStorage.getItem('myCat');
        echo = cat
        TowarNameText1[0].innerHTML = cat
        if (echo === 'Fox Play A') {
            Price1.innerHTML = 186550
        }
    } else if (elem2 === 0) {
        elem2 = 1
        document.getElementById('container2').classList.remove('hide')
        let cat = localStorage.getItem('myCat');
        echo = cat
        TowarNameText2[0].innerHTML = cat
        if (echo === 'Fox Play A') {
            Price1.innerHTML = 186550
        }
    }else if (elem3 === 0) {
        elem3 = 1
        document.getElementById('container3').classList.remove('hide')
        let cat = localStorage.getItem('myCat');
        echo = cat
        TowarNameText3[0].innerHTML = cat
        if (echo === 'Fox Play A') {
            Price1.innerHTML = 186550
        }
    }else {
        console.log('Нет места')
    }

};

function cart() {
    const ItogoText = document.querySelectorAll('.Itogo')
    const button = document.querySelectorAll('button')
    const Button1Away = document.querySelectorAll('button.Button1Away')
    const Button1Add = document.querySelectorAll('button.Button1Add')
    const Quantity = document.querySelectorAll('p.Quantity')
    const Button1Away2 = document.querySelectorAll('button.Button1Away2')
    const Button1Add2 = document.querySelectorAll('button.Button1Add2')
    const Quantity2 = document.querySelectorAll('p.Quantity2')
    const Button1Away3 = document.querySelectorAll('button.Button1Away3')
    const Button1Add3 = document.querySelectorAll('button.Button1Add3')
    const Quantity3 = document.querySelectorAll('p.Quantity3')
    Button1Add.forEach((Button1Add) => {
            Button1Add.addEventListener('click', () => {
                col1 = col1 + 1
                Quantity[0].innerHTML = col1
            })
    })
    Button1Away.forEach((Button1Away) => {
            Button1Away.addEventListener('click', () => {
                if(col1 > 0) {
                    col1 = col1 - 1
                    Quantity[0].innerHTML = col1
                }
            })
    })
    Button1Add2.forEach((Button1Add2) => {
        Button1Add2.addEventListener('click', () => {
            col2 = col2 + 1
            Quantity2[0].innerHTML = col2
        })
    })
    Button1Away2.forEach((Button1Away2) => {
        Button1Away2.addEventListener('click', () => {
            if(col2 > 0) {
                col2 = col2 - 1
                Quantity2[0].innerHTML = col2
            }
        })
    })
    Button1Add3.forEach((Button1Add3) => {
        Button1Add3.addEventListener('click', () => {
            col3 = col3 + 1
            Quantity3[0].innerHTML = col3
        })
    })
    Button1Away3.forEach((Button1Away3) => {
        Button1Away3.addEventListener('click', () => {
            if(col3 > 0) {
                col3 = col3 - 1
                Quantity3[0].innerHTML = col3
            }
        })
    })
    button.forEach((button) => {
        button.addEventListener('click', () => {
            const Price1 = document.querySelector('.Price').textContent;
            const Price2 = document.querySelector('.Price2').textContent;
            const Price3 = document.querySelector('.Price3').textContent;
            itog = (col1 * +Price1) + (col2 * +Price2) + (col3 * +Price3)
            ItogoText[0].innerHTML = String(itog + rub)
        })
    })
}

cart()