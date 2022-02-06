const amtBtns = document.querySelectorAll('.amt');
const qty = document.querySelector('#qty');
const cartPanel = document.querySelector('#cartPanel');
const cartBtn = document.querySelector('#cartBtn');
const trashBtn = document.querySelector('#trash');
const cartBody = document.querySelector('#cart__body');
const checkoutBtn = document.querySelector('#checkout');
let amt = 0;

const checkoutState = {
  'default': `<div></div>
        <p class="alt-bkg1 font-bold">Your cart is empty</p>
        <div></div>`,
  'items' : 
    `<div class="cart__body--content flex gap-1">
      <div class="cart__body--content-description flex gap-1">
        <img class="cart__img" src="/images/image-product-1-thumbnail.jpg" alt="Shoes">
            <div class="grid alt-bkg1">
              <p class="product--name">Fall Limited Edition Sneakers</p>
              <p class="product--amt flex">
                <span>$125.00</span>
                <span>&times;</span>
                <span id="amt">3</span>
                <span id="total" class="text font-bold">$375</span>
              </p>
            </div>
          </div>
          <button id="trash" aria-label="Remove product from cart">
            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <path
                  d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                  id="a" />
              </defs>
              <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
            </svg>
          </button>
        </div>
        <button class="cart__body--btn rounded accent-pale bg-accent fs-2 font-bold">Checkout
        </button>
      </div>`
}

function toggleCart(){
  cartBtn.getAttribute('aria-expanded') === 'false'
    ? cartBtn.setAttribute('aria-expanded', 'true')
    : cartBtn.setAttribute('aria-expanded', 'false')
  cartBtn.getAttribute('aria-expanded') === 'false'
    ? cartPanel.setAttribute('disabled', 'true')
    : cartPanel.removeAttribute('disabled')
}

function updateCartState(num){
  if(num === 0){
    cartBody.innerHTML = checkoutState.default;
  } else {
    cartBody.innerHTML = checkoutState.items;
    const PRICE = 125;
    const amt = document.querySelector('#amt');
    const total = document.querySelector('#total');
    amt.textContent = num;
    total.textContent = `$${num * PRICE}.00`;
  }
}

function handleAmtBtnClick(e){
  if(e.currentTarget.id === 'amt--decrease'){
    amt === 0 ? e.currentTarget : amt--;
  } else {
    amt++;
  }
  qty.textContent = amt;
  if(amt === 0){
    e.currentTarget.setAttribute('disabled', 'true');
  } else {
    e.currentTarget.removeAttribute('disabled');
  }
  updateCartState(amt);
}
//TODO: FIGURE OUT REMOVING DISABLED

amtBtns.forEach(b => b.addEventListener('click', handleAmtBtnClick));

cartBtn.addEventListener('click', toggleCart);

checkoutBtn.addEventListener('click', toggleCart);

cartPanel.addEventListener('click', (e) => {
  e.currentTarget === e.target && toggleCart();
  e.target === document.querySelector('#trash') && updateCartState(0);
});