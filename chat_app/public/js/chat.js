const socket = io();

// socket.on('countUpdated', (count) => {
//   console.log('The count has been updated', count);
// })

// document.querySelector('#increment')
//   .addEventListener('click', () => {
//     console.log('clicked');
//     socket.emit('increment');
//  })

document.querySelector('#message_form')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    socket.emit('sendMessage', message);
});

document.querySelector('#send_location')
  .addEventListener('click', () => {
    if (!navigator.geolocation) {
      return alert('Geolocation is not supported by your browser.');
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const coords = {
        latitute: position.coords.latitude,
        longitute: position.coords.longitude
      }

      
    })


})



