

    // Обработчик кнопки "Лайк"
    document.getElementById('likeButton').addEventListener('click', function() {
      likeCount++;
      likeCountDisplay.textContent = 'Likes: ' + likeCount;
    });

    // Вызов API Unsplash для получения случайной фотографии

    fetch('https://api.unsplash.com/photos/random/?client_id=Jfmw0xKTW56pWee38I8ArXLHPTFPGtM1je04-zmVd-A')
      .then(response => response.json())
      .then(data => {
        document.getElementById('photo').src = data.urls.regular;
        document.getElementById('photographer').textContent = 'Photographer: ' + data.user.name;
      });

    // Счетчик лайков

    let likeCount = 0;
    const likeCountDisplay = document.getElementById('likeCount');