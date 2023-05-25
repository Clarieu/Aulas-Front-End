// Array com os dados dos posts
const posts = [
  {
    media: 'image',
    source: 'imagem1.jpg',
    title: 'Post 1',
    description: 'Descrição do post 1'
  },
  {
    media: 'image',
    source: 'imagem2.jpg',
    title: 'Post 2',
    description: 'Descrição do post 2'
  },
  {
    media: 'image',
    source: 'imagem3.jpg',
    title: 'Post 3',
    description: 'Descrição do post 3'
  },
  {
    media: 'video',
    source: 'video1.mp4',
    title: 'Vídeo 1',
    description: 'Descrição do vídeo 1'
  },
  {
    media: 'video',
    source: 'video2.mp4',
    title: 'Vídeo 2',
    description: 'Descrição do vídeo 2'
  },
  {
    media: 'video',
    source: 'video3.mp4',
    title: 'Vídeo 3',
    description: 'Descrição do vídeo 3'
  }
];

// Função para exibir os posts no mini blog
function showPosts() {
  const postContainer = document.querySelector('.post-container');

  // Limpar o conteúdo do container antes de exibir os posts
  postContainer.innerHTML = '';

  // Iterar sobre os posts e criar os elementos HTML correspondentes
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const mediaElement = document.createElement('div');
    mediaElement.classList.add('post-media');

    let mediaContent;
    if (post.media === 'image') {
      mediaContent = document.createElement('img');
    } else if (post.media === 'video') {
      mediaContent = document.createElement('video');
      mediaContent.setAttribute('controls', true);
    }

    mediaContent.src = post.source;
    mediaContent.alt = post.title;

    mediaElement.appendChild(mediaContent);

    const titleElement = document.createElement('h2');
    titleElement.classList.add('post-title');
    titleElement.textContent = post.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('post-description');
    descriptionElement.textContent = post.description;

    postElement.appendChild(mediaElement);
    postElement.appendChild(titleElement);
    postElement.appendChild(descriptionElement);

    postContainer.appendChild(postElement);
  });
}

// Chamar a função para exibir os posts ao carregar a página
window.addEventListener('DOMContentLoaded', showPosts);
