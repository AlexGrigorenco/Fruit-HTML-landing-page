


// * PRODUCTS

{
    const products = [
        {
          img: './images/product/01.png',
          title: 'Ripe Yellow Banana',
          price: 2.89,
        },
        {
          img: './images/product/02.png',
          title: 'Red Pomegranate',
          price: 3.89,
        },
        {
          img: './images/product/03.png',
          title: 'Sweet Orange',
          price: 2.89,
        },
        {
          img: './images/product/04.png',
          title: 'Tasty Avocado',
          price: 3.89,
        },
        {
          img: './images/product/05.png',
          title: 'Ripe red apples',
          price: 5.89,
        },
        {
          img: './images/product/06.png',
          title: 'Ripe Green Apple',
          price: 1.89,
        },
        {
          img: './images/product/07.png',
          title: 'Sweet Strawberry',
          price: 5.89,
        },
        {
          img: './images/product/08.png',
          title: 'Tasty Watemelon',
          price: 6.89,
        }
      ]
      
      const htmlString = products.map((product, index) => `
                    <div class="product__item wow animate__fadeIn" data-wow-delay="${index / 6}s">
                    <div class="product__img">
                      <img src=${product.img}>
                    </div>
                    <div class="product__description">
                      <p class="product__name">
                        ${product.title}
                      </p>
                      <p class="product__price">
                        $${product.price}
                      </p>
                    </div>
                    <div class="product__description">
                      <p class="product__weight">
                        500g
                      </p>
                      <button type="button" class="product_buy">
                        Buy
                      </button>
                    </div>
                    </div>
      `).join('')
      
      document.querySelector('.product__wrapper').innerHTML = htmlString
}


// * INSTRUCTION

{
    const data = [
        {
            img: './images/instruction/icon-basket.png',
            title: 'Choose Product',
            text: 'Lorem Ipsum is simply dummy text of the printi',
            style: 'choiсe',
        },
        {
            img: './images/instruction/credit-card-icon.png',
            title: 'Do Payment',
            text: 'Lorem Ipsum is simply dummy text of the printi',
            style: 'credit-card',
        },
        {
            img: './images/instruction/payment_icon.png',
            title: 'Confirmation Payment',
            text: 'Lorem Ipsum is simply dummy text of the printi',
            style: 'payment',
        },
        {
            img: './images/instruction/delivery-icon.png',
            title: 'Order Shipped',
            text: 'Lorem Ipsum is simply dummy text of the printi',
            style: 'delivery',
        },

    ]

    document.querySelector('.instruction .instruction__description').insertAdjacentHTML('beforeend', data.map((item, index) => `
                <div class="instruction__step wow animate__slideInRight" data-wow-delay="${index / 10}s">
                        <div class="step__icon step__icon--${item.style}">
                                <img src=${item.img} alt="icon">
                        </div>
                        <div class="step__item">
                        <h5>
                            ${item.title}
                        </h5>
                        <p class="step__text">
                            ${item.text}
                        </p>
                        </div>
                    </div>
    `).join(''))
}

// * SLIDER

{
    const data = [
        {
            text: 'Me help our clients make realize thier most important businessWe help our clients make realize thier  We help our clients make realize thier most important businessWe help our clients make realize ',
            img: './images/review/customer-icon-1.png',
            name: 'Kevin Andrew',
        },
        {
            text: 'I help our clients make realize thier most important businessWe help our clients make realize thier  We help our clients important businessWe help our clients make realize thier  We hel make realize thier most important businessWe help our clients make realize',
            img: './images/review/customer-icon-2.png',
            name: 'Frank Warren',
        },
        {
            text: 'We help our clients make realize thier most important businessWe help our clients make realize thier  We help our clients make remake realize important businessWealize thier most important businessWe help our clients make realize',
            img: './images/review/customer-icon-3.png',
            name: 'Erick Newman',
        },
    ]

    document.querySelector('.review .slider').insertAdjacentHTML('afterbegin', data.map(item => `
                        <div class="slider__item ">
                                <p class="slider__item__text">
                                    ${item.text}
                                </p>
                                <div class="slider__item__customer">
                                    <div class="slider__item__icon">
                                    <img src=${item.img} alt="icon">
                                    </div>
                                    <p class="slider__item__name">
                                    ${item.name}
                                    <br><span>Happy Customers</span>
                                    </p>
                                </div>
                                </div>
    `).join(''))
}