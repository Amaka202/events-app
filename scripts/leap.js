let share = document.getElementById("share-btn");

share.addEventListener('click', event => {
    if (navigator.share) {
      navigator.share({
        title: 'Vanhack Leap Events',
        url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      console.log("Not supported")
    }
  });