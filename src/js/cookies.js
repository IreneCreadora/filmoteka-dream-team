import Cookies from 'js-cookie';

export const COOKIE_NAME = 'cookie';
export const expires = new Date(new Date().getTime() + 15 * 60 * 1000);

export function createMarkupCookies() {
  return `<div class="cookies js-cookies">
  <div class="cookies__header">
    <h3 class="cookies__title">Cookies Policy</h3>
  </div>
  <div class="cookies__body">
    <p class="cookies__text">
      We use cookies for improving user experience, analytics and marketing.
      <a class="cookies__link" href="#">Privacy Policy</a>
    </p>
    <button class=" cookies__btn js-cookies-accept">Accept!</button>
  </div>
</div>`;
}

export function cookies() {
  if (!Cookies.get(COOKIE_NAME)) {
    document
      .querySelector('body')
      .insertAdjacentHTML('beforeend', createMarkupCookies());

    const cookieAlert = document.querySelector('.js-cookies');

    const cookieBtn = document.querySelector('.js-cookies-accept');

    setTimeout(() => cookieAlert.classList.add('is-shown'), 1000);

    cookieBtn.addEventListener('click', onAcceptBtnClick);

    function onAcceptBtnClick(e) {
      cookieAlert.classList.remove('is-shown');
      setTimeout(() => cookieAlert.remove(), 1000);
      Cookies.set(COOKIE_NAME, true, { expires: expires });
    }
  }
}

cookies();
