const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    console.log('event_action');
    if(btn.textContent === 'ダークモードにする'){
        btn.textContent = 'ライトモードにする';
       } else {
        btn.textContent = 'ダークモードにする';
      }
});

