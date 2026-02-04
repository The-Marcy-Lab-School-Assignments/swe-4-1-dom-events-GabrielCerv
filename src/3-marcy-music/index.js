const playlists = [
  {
    title: 'Chill Vibes',
    image: './img/playlist-chill.jpg',
    description: 'A playlist for chill vibes',
  },
  {
    title: 'Focus',
    image: './img/playlist-focus.jpg',
    description: 'A playlist for focus',
  },
  {
    title: 'Late Night',
    image: './img/playlist-late-night.jpg',
    description: 'A playlist for late night',
  },
  {
    title: 'Love Songs',
    image: './img/playlist-love.jpg',
    description: 'A playlist for love songs',
  },
  {
    title: 'Oldies',
    image: './img/playlist-oldies.jpg',
    description: 'A playlist for oldies',
  },
  {
    title: 'Sad',
    image: './img/playlist-sad.jpg',
    description: 'A playlist for sad songs',
  },
];

// Add your code here...
// document.createElement
//   < li class="playlist-card" data - title="Chill Vibes" >
//   <img src="./img/playlist-chill.jpg"  alt="Chill Vibes playlist cover" />
//   <p>Chill Vibes</p>
// </li >



const playlistsGrid = document.getElementById('playlists-grid');
const nowPlayingTitle = document.getElementById('now-playing-title');

playlists.forEach(playlist => {
  const li = document.createElement('li')
  li.classList.add('playlist-card')
  li.dataset.title = playlist.title

  const img = document.createElement('img')
  img.src = playlist.image
  img.alt = `${playlist.title} playlist cover`

  const p = document.createElement('p')
  p.textContent = playlist.title

  li.append(img, p)
  playlistsGrid.appendChild(li)
})

playlistsGrid.addEventListener('click', event => {
  const card = event.target.closest('.playlist-card')
  if (!card) return

  const previousSelected = document.querySelector('.playlist-card.selected')
  if (previousSelected) {
    previousSelected.classList.remove('selected')
  }

  card.classList.add('selected')

  nowPlayingTitle.textContent = card.dataset.title
})