document.addEventListener('click', (e) => {
  const itemId = e.target.id;
  const els = document.querySelectorAll('.js-postCount');
  const el = document.getElementById(itemId);
  const allPosts = Array.from(document.querySelectorAll('.l-postList_item'));

  const hightLightSelected = () => {
    els.forEach(item => item.classList.remove('isActive'));
    el.classList.add('isActive');
  };

  if (itemId === 'html' || itemId === 'css' || itemId === 'js' || itemId === 'misc') {  
    allPosts.forEach(item => item.classList.add('isHidden'));
    
    const item = Array.from(document.querySelectorAll(`.${itemId}`));
    item.forEach(item => item.classList.remove('isHidden'));

    hightLightSelected();
  }

  if (itemId === 'all') {
    allPosts.forEach(item => item.classList.remove('isHidden'));

    hightLightSelected();
  }
});