let share = document.getElementById("share-btn");

share.addEventListener('click', () => shareFiles())
   
function shareFiles() {
  if (navigator.share){
    navigator.share({
      title: "VanHack Events",
      text: "Hey Friend, I am attending this awesome Vanhack event, check it out!",
      url: "https://events-app-milestone.netlify.app/",
    })
    .then(() => console.log("successful"))
    .catch((error) => console.log("error sharing"))
  }else{
    console.log("Web Share API is not supported in your browser.")
  }
}

//  {
//       navigator.share({
//         title: 'Vanhack Leap Events',
//         url: 'https://codepen.io/ayoisaiah/pen/YbNazJ'
//       }).then(() => {
//         console.log('Thanks for sharing!');
//       })
//       .catch(console.error);
//     } else {
//       console.log("Not supported")
//     }
//   });