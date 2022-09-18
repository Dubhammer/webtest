let item1 = document.getElementById('item1');
let wrapper1 = document.getElementById('wrapper1');
let wrapper2 = document.getElementById('wrapper2');
let wrapper3 = document.getElementById('wrapper3');
let close = document.getElementById('close');
let cartclose = document.getElementById('cartclose');
let detailimg = document.getElementById('detailimg');
let vmenu = document.getElementById('vmenu');
let vendorm = document.getElementById('vendorm');
let cartstat = document.getElementById('cartstat');
let viewcart = document.getElementById('viewcart');
let cartbg = document.getElementById('cartbg');
let navcart = document.getElementById('navcart');
let morder = 0;
let cartcount = document.getElementById('cartcount');
const btns = document.querySelectorAll('.btns');
const addon = document.querySelectorAll('.addon');
const vendors = document.querySelectorAll('.vendors');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const counter = document.getElementById('counter');

let count = 1;
let item1count = 0;
let item2count = 0;
let item3count = 0;
let item4count = 0;
let item5count = 0;
let item6count = 0;
let item7count = 0;
let item8count = 0;
let item9count = 0;
let item10count = 0;
let item11count = 0;
let item12count = 0;
let totalitemcount = 0;
let totalprice = 0;
let currentitem = 0;
let cartbutton = document.getElementById('cartbutton');


//Array button for vendors
Array.from(vendors).forEach(function (div) {
    div.addEventListener('click', function () {
        wrapper0.style.position = "fixed";
        wrapper1.style.display = "block";
        wrapper1.classList.remove("slideDown");
        wrapper1.classList.add("slideUp");
        setTimeout(disp4, 350);

        if (div.id == 'vendor1') {
            vendorm.style.backgroundImage = "linear-gradient(rgba(135, 125, 0, 0.3), rgba(135, 0, 0, 0.3)), url('img/vendor1bg.jpg')";
        } else if (div.id == 'vendor2') {
            vendorm.style.backgroundImage = "linear-gradient(rgba(135, 125, 0, 0.3), rgba(135, 0, 0, 0.3)), url('img/vendor2bg.jpg')";
        } else {
            vendorm.style.backgroundImage = "linear-gradient(rgba(135, 125, 0, 0.3), rgba(135, 0, 0, 0.3)), url('img/vendor3bg.jpg')";
        }

        function disp4() {
            wrapper0.style.display = "none";
        }
    });

});


//Arry button for menu
Array.from(btns).forEach(function (div) {
    div.addEventListener('click', function () {
        wrapper2.style.display = "block";
        wrapper2.classList.remove("slideDown");
        wrapper2.classList.add("slideUp");
        setTimeout(disp1, 350);
        document.body.style.overflow = "hidden";
        count = 1;

        if (div.id == 'item1') {
            countcheck();
            counter.innerHTML = count;

            //indicate current item for addtoCart function
            currentitem = 1;

            //check to display proper text.
            if (item1count !== 0) {
                count = item1count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item1count * 15;
            } else {
                cartbutton.innerHTML = "Add to Cart - $15";
            }

            detailimg.style.backgroundImage = "url(img/pulledpork.jpg)";
            itemdesc.innerHTML = "<h2>Pulled Pork Sandwich</h2><p>Shredded pork slowly cooked with our signiture BBQ sauce. Served on buttered buns with our famous Bean Slaw.</p>";
            itemprice.innerHTML = "$15";

        } else if (div.id == 'item2') {

            countcheck();
            counter.innerHTML = count;
            currentitem = 2;

            if (item2count !== 0) {
                count = item2count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item2count * 25;
            } else {
                cartbutton.innerHTML = "Add to Cart - $25";
            }

            detailimg.style.backgroundImage = "url(img/2lbpulledpork.jpg)";
            itemdesc.innerHTML = "<h2>2lb Pullled Pork</h2><p>Shredded pork slowly cooked with our signiture BBQ sauce. Served with our famous Bean Slaw.</p>";
            itemprice.innerHTML = "$25";

        } else if (div.id == 'item3') {

            countcheck();
            counter.innerHTML = count;
            currentitem = 3;

            if (item3count !== 0) {
                count = item3count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item3count * 20;
            } else {
                cartbutton.innerHTML = "Add to Cart - $20";
            }

            detailimg.style.backgroundImage = "url(img/halfrack.jpg)";
            itemdesc.innerHTML = "<h2>Half Rack Ribs</h2><p>Tendor and meaty ribs cooked over hickory wood. Seasned with our famous dry rub. Served with our Sweet Corn Slaw.</p>";
            itemprice.innerHTML = "$20";

        } else if (div.id == 'item4') {

            countcheck();
            counter.innerHTML = count;
            currentitem = 4;

            if (item4count !== 0) {
                count = item4count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item4count * 30;
            } else {
                cartbutton.innerHTML = "Add to Cart - $30";
            }

            detailimg.style.backgroundImage = "url(img/fullrack.jpg)";
            itemdesc.innerHTML = "<h2>Full Rack Ribs</h2><p>Tendor and meaty ribs cooked over hickory wood. Seasned with our famous dry rub. Served with our Sweet Corn Slaw.</p>";
            itemprice.innerHTML = "$30";

        } else if (div.id == 'item5') {

            countcheck();
            counter.innerHTML = count;
            currentitem = 5;

            if (item5count !== 0) {
                count = item5count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item5count * 15;
            } else {
                cartbutton.innerHTML = "Add to Cart - $15";
            }

            detailimg.style.backgroundImage = "url(img/3sausages.jpg)";
            itemdesc.innerHTML = "<h2>3 Smoked Sausages</h2><p>Smoky and juicy sausage bursting with flavours. Served with our Apple Vinegar Coleslaw.</p>";
            itemprice.innerHTML = "$15";

        } else if (div.id == 'item6') {

            countcheck();
            counter.innerHTML = count;
            currentitem = 6;

            if (item6count !== 0) {
                count = item6count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item6count * 30;
            } else {
                cartbutton.innerHTML = "Add to Cart - $30";
            }

            detailimg.style.backgroundImage = "url(img/chicken.jpg)";
            itemdesc.innerHTML = "<h2>Whole Chicken</h2><p>Smoked whole chicken marinated with our sweet and tangy barbeque sauce. Served with our Apple Vinegar Coleslaw.</p>";
            itemprice.innerHTML = "$30";

        } else if (div.id == 'special1') {

            countcheck();
            counter.innerHTML = count;
            currentitem = 7;

            if (item7count !== 0) {
                count = item7count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item7count * 50;
            } else {
                cartbutton.innerHTML = "Add to Cart - $50";
            }

            detailimg.style.backgroundImage = "url(img/speical1.jpg)";
            itemdesc.innerHTML = "<h2>Sampler Combo</h2><p>1lb of shredded pork. Smoked half chicken. 3 smoky and juicy sausages. Served with Bean Slaw and Apple Vinegar Coleslaw.</p>";
            itemprice.innerHTML = "$50";

        } else if (div.id == 'special2') {

            countcheck();
            counter.innerHTML = count;
            currentitem = 8;

            if (item8count !== 0) {
                count = item8count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item8count * 80;
            } else {
                cartbutton.innerHTML = "Add to Cart - $80";
            }

            detailimg.style.backgroundImage = "url(img/special2.jpg)";
            itemdesc.innerHTML = "<h2>Potbelly Combo</h2><p>2lb of shredded pork. Smoked whole chicken. 6 smoky and juicy sausages. Served with Bean Slaw and Apple Vinegar Coleslaw.</p>";
            itemprice.innerHTML = "$80";

        } else if (div.id == 'special3') {

            countcheck();
            counter.innerHTML = count;
            currentitem = 9;

            if (item9count !== 0) {
                count = item9count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item9count * 120;
            } else {
                cartbutton.innerHTML = "Add to Cart - $120";
            }

            detailimg.style.backgroundImage = "url(img/speical3.jpg)";
            itemdesc.innerHTML = "<h2>Potbelly Combo</h2><p>3lb of shredded pork. 2 Smoked whole chicken. 9 smoky and juicy sausages. Served with Bean Slaw and Apple Vinegar Coleslaw.</p>";
            itemprice.innerHTML = "$120";

        } else if (div.id == 'drink1') {

            countcheck();
            counter.innerHTML = count;
            currentitem = 10;

            if (item10count !== 0) {
                count = item10count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item10count * 2;
            } else {
                cartbutton.innerHTML = "Add to Cart - $2";
            }

            detailimg.style.backgroundImage = "url(img/drink.jpg)";
            itemdesc.innerHTML = "<h2>Coke</h2><p>Refreshing and ice cold soft drink to quench your thirst. 500ml</p>";
            itemprice.innerHTML = "$2";

        } else if (div.id == 'drink2') {

            countcheck();
            counter.innerHTML = count;
            currentitem = 11;

            if (item11count !== 0) {
                count = item11count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item11count * 2;
            } else {
                cartbutton.innerHTML = "Add to Cart - $2";
            }

            detailimg.style.backgroundImage = "url(img/drink.jpg)";
            itemdesc.innerHTML = "<h2>Diet Coke</h2><p>Refreshing and ice cold soft drink to quench your thirst. 500ml</p>";
            itemprice.innerHTML = "$2";
        } else if (div.id == 'drink3') {

            countcheck();
            counter.innerHTML = count;
            currentitem = 12;

            if (item12count !== 0) {
                count = item12count;
                counter.innerHTML = count;
                cartbutton.innerHTML = "Update Cart - $" + item12count * 2;
            } else {
                cartbutton.innerHTML = "Add to Cart - $2";
            }

            detailimg.style.backgroundImage = "url(img/drink.jpg)";
            itemdesc.innerHTML = "<h2>Coke Zero</h2><p>Refreshing and ice cold soft drink to quench your thirst. 500ml</p>";
            itemprice.innerHTML = "$2";
        }

        function disp1() {
            wrapper1.style.display = "block";
        }

    });
});

function countcheck() {
    if (count !== 0) {
        minus.disabled = false;
    } else if (count < 1) {
        minus.disabled = true;
    }
}

//Back button to vendor selection
goback.addEventListener('click', function () {
    wrapper0.style.display = 'block';
    wrapper1.classList.remove('slideUp');
    wrapper1.classList.add('slideDown');
    setTimeout(disp5, 270);

    function disp5() {
        wrapper1.style.display = 'none';
        wrapper0.style.position = "relative";
    }
})

//Close button
close.addEventListener('click', closeitem);

function closeitem() {
    //reset selected item
    currentitem = 0;
    document.body.style.overflow = 'visible';
    wrapper1.style.display = 'block';
    wrapper2.classList.remove('slideUp');
    wrapper2.classList.add('slideDown');
    setTimeout(disp2, 270);

    function disp2() {
        count = 1;
        counter.innerHTML = count;
        wrapper2.style.display = 'none';
    }
}

function CartSummary() {
    totalpricehtml.innerHTML = "$" + totalprice;
    if (item1count > 0) {
        ordersummary.innerHTML += item1count + "x " + "Pulled Pork Sandwich<br>";
        orderprice.innerHTML += "$" + item1count * 15 + "<br>";
    }
    if (item2count > 0) {
        ordersummary.innerHTML += item2count + "x " + "2lb Pullled Pork<br>";
        orderprice.innerHTML += "$" + item2count * 25 + "<br>";
    }
    if (item3count > 0) {
        ordersummary.innerHTML += item3count + "x " + "Half Rack Ribs<br>";
        orderprice.innerHTML += "$" + item3count * 20 + "<br>";
    }
    if (item4count > 0) {
        ordersummary.innerHTML += item4count + "x " + "Full Rack Ribs<br>";
        orderprice.innerHTML += "$" + item4count * 30 + "<br>";
    }
    if (item5count > 0) {
        ordersummary.innerHTML += item5count + "x " + "3 Smoked Sausages<br>";
        orderprice.innerHTML += "$" + item5count * 15 + "<br>";
    }
    if (item6count > 0) {
        ordersummary.innerHTML += item6count + "x " + "Whole Chicken<br>";
        orderprice.innerHTML += "$" + item6count * 30 + "<br>";
    }
    if (item7count > 0) {
        ordersummary.innerHTML += item7count + "x " + "Sampler Combo<br>";
        orderprice.innerHTML += "$" + item7count * 50 + "<br>";
    }
    if (item8count > 0) {
        ordersummary.innerHTML += item8count + "x " + "Potbelly Combo<br>";
        orderprice.innerHTML += "$" + item8count * 80 + "<br>";
    }
    if (item9count > 0) {
        ordersummary.innerHTML += item9count + "x " + "Carnivore Combo<br>";
        orderprice.innerHTML += "$" + item9count * 120 + "<br>";
    }
    if (item10count > 0) {
        ordersummary.innerHTML += item10count + "x " + "Coke<br>";
        orderprice.innerHTML += "$" + item10count * 2 + "<br>";
    }
    if (item11count > 0) {
        ordersummary.innerHTML += item11count + "x " + "Diet Coke<br>";
        orderprice.innerHTML += "$" + item11count * 2 + "<br>";
    }
    if (item12count > 0) {
        ordersummary.innerHTML += item12count + "x " + "Coke Zero<br>";
        orderprice.innerHTML += "$" + item12count * 2 + "<br>";
    }
}
//Viewcart button
viewcart.addEventListener('click', function () {
    morder = 0;

    wrapper3.style.display = 'block';
    wrapper3.classList.remove('slideDown');
    wrapper3.classList.add('slideUp');

    setTimeout(disp7, 350);
    CartSummary();

    function disp7() {
        wrapper1.style.display = 'none';
        document.getElementById("wrapper3").style.position = "relative";
        //        wrapper3.scrollTop;
    }
})

//Viewcart button from vendor menu
navcart.addEventListener('click', function () {
    morder = 1;
    CartSummary();

    if (totalitemcount > 0) {
        wrapper3.style.display = 'block';
        wrapper3.classList.remove('slideDown');
        wrapper3.classList.add('slideUp');
        setTimeout(disp7, 350);

        function disp7() {
            wrapper0.style.display = 'none';
            document.getElementById("wrapper3").style.position = "relative";
        }
    } else {
        alert("Your Cart is Empty");
    }
})



//Close Cart button
cartclose.addEventListener('click', cartitem);

function cartitem() {

    ordersummary.innerHTML = "";
    orderprice.innerHTML = "";
    document.getElementById("wrapper3").style.position = "fixed";

    if (morder == 0) {
        document.body.style.overflow = 'visible';
        wrapper1.classList.remove('slideUp');
        wrapper1.classList.remove('slideDown');
        wrapper1.style.display = 'block';
        wrapper3.classList.remove('slideUp');
        wrapper3.classList.add('slideDown');
        setTimeout(disp6, 270);
    } else {
        document.body.style.overflow = 'visible';
        wrapper0.style.display = 'block';
        wrapper3.classList.remove('slideUp');
        wrapper3.classList.add('slideDown');
        setTimeout(disp6, 270);
    }

    function disp6() {
        wrapper3.style.display = 'none';
    }

    chkcount();
}


minus.disabled = true;

//Arry button for food quantity
Array.from(addon).forEach(function (btn) {
    btn.addEventListener('click', function () {

        if (btn.id == 'minus') {
            count = count - 1;
        } else {
            count = count + 1;
        }

        countcheck();

        counter.innerHTML = count;

        //dynamically change add to cart button. Only need when an item hasn't been added to cart, otherwhise it will be "Update Cart".

        if (currentitem == 1) {
            if (item1count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 15;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 15;
            }
        } else if (currentitem == 2) {
            if (item2count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 25;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 25;
            }
        } else if (currentitem == 3) {
            if (item3count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 20;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 20;
            }
        } else if (currentitem == 4) {
            if (item4count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 30;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 30;
            }
        } else if (currentitem == 5) {
            if (item5count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 15;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 15;
            }
        } else if (currentitem == 6) {
            if (item6count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 30;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 30;
            }
        } else if (currentitem == 7) {
            if (item7count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 50;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 50;
            }
        } else if (currentitem == 8) {
            if (item8count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 80;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 80;
            }
        } else if (currentitem == 9) {
            if (item9count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 120;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 120;
            }
        } else if (currentitem == 10) {
            if (item10count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 2;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 2;
            }
        } else if (currentitem == 11) {
            if (item11count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 2;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 2;
            }
        } else if (currentitem == 12) {
            if (item12count == 0) {
                if (count !== 0) {
                    cartbutton.innerHTML = "Add to Cart - " + "$" + count * 2;
                } else {
                    cartbutton.innerHTML = "Back to Menu";
                }
            } else if (count == 0) {
                cartbutton.innerHTML = "Remove Item";
            } else {
                cartbutton.innerHTML = "Update Cart - " + "$" + count * 2;
            }
        }

    });

});

//Update cart
cartbutton.addEventListener('click', addtoCart);

function addtoCart() {
    document.body.style.overflow = "visible";
    wrapper1.style.display = "block";
    wrapper2.classList.remove("slideUp");
    wrapper2.classList.add("slideDown");
    setTimeout(disp3, 270);


    function disp3() {
        counter.innerHTML = count;
        wrapper2.style.display = "none";
    }

    if (currentitem == 1) {
        //update item1count
        item1count = count;
    } else if (currentitem == 2) {
        //update item2count
        item2count = count;
    } else if (currentitem == 3) {
        //update item3count
        item3count = count;
    } else if (currentitem == 4) {
        //update item4count
        item4count = count;
    } else if (currentitem == 5) {
        //update item5count
        item5count = count;
    } else if (currentitem == 6) {
        //update item6count
        item6count = count;
    } else if (currentitem == 7) {
        //update item7count
        item7count = count;
    } else if (currentitem == 8) {
        //update item8count
        item8count = count;
    } else if (currentitem == 9) {
        //update item9count
        item9count = count;
    } else if (currentitem == 10) {
        //update item10count
        item10count = count;
    } else if (currentitem == 11) {
        //update item11count
        item11count = count;
    } else if (currentitem == 12) {
        //update item12count
        item12count = count;
    }


    //update cartviewbutton
    totalitemcount = item1count + item2count + item3count + item4count + item5count + item6count + item7count + item8count + item9count + item10count + item11count + item12count;

    chkcount();

    totalprice = (item1count * 15) + (item2count * 25) + (item3count * 20) + (item4count * 30) + (item5count * 15) + (item6count * 30) + (item7count * 50) + (item8count * 80) + (item9count * 120) + (item10count * 2) + (item11count * 2) + (item12count * 2);
    itemcounter.innerHTML = totalitemcount + " items";
    cartcount.innerHTML = totalitemcount;
    carttotalprice.innerHTML = "$" + totalprice;
}

function chkcount() {
    if (totalitemcount !== 0) {
        viewcartcontainer.style.display = "block";
        navcart.style.display = "block";
        cartstat.style.display = "block"
        cartbg.style.display = "block"
    } else {
        //        navcart.style.display = "none";
        viewcartcontainer.style.display = "none"
        cartstat.style.display = "none"
        cartbg.style.display = "none"
    }
}
orderbutton.addEventListener('click', donefn);

function donefn() {
    wrapper4.style.display = "block";
}
document.getElementById('done').addEventListener("click", function () {
    location.reload();
});
