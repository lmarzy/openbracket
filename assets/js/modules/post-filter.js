document.addEventListener('click', (e) => {
  const itemId = e.target.parentElement.parentElement.id;
  if (itemId === 'html' || itemId === 'css' || itemId === 'js') {
    const allPosts = Array.from(document.querySelectorAll('.l-postList_item'));
    allPosts.forEach(item => item.classList.add('isHidden'));

    const item = Array.from(document.querySelectorAll(`.${itemId}`));
    item.forEach(item => item.classList.remove('isHidden'));
  }
});