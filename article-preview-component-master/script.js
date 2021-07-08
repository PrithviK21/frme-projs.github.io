const sharebtn = document.querySelector(".share-btn");
const shareitems = document.querySelector('.share-items')
const author = document.querySelector('.author-container')
const x = '<div class="share-items">\
      <span>SHARE</span>\
      <img src="images/icon-facebook.svg" alt="">\
      <img src="images/icon-twitter.svg" alt="">\
      <img src="images/icon-pinterest.svg" alt="">\
      <button id="share-btn"><img src="images/icon-share.svg" alt="" ></button>\
    </div>'

sharebtn.addEventListener('click', function() {
    // author.innerHTML = x
    shareitems.classList.toggle('hide');
})