document.addEventListener('click', (e) => {
  const itemId = e.target.id;
  const allPosts = Array.from(document.querySelectorAll('.l-postList_item'));

  if (itemId === 'html' || itemId === 'css' || itemId === 'js') {  
    allPosts.forEach(item => item.classList.add('isHidden'));

    const item = Array.from(document.querySelectorAll(`.${itemId}`));
    item.forEach(item => item.classList.remove('isHidden'));
  }

  if (itemId === 'all') {
    allPosts.forEach(item => item.classList.remove('isHidden'));
  }
});