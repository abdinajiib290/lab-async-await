// Write your code here!

// Fetch and Display Random Posts

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Shuffle posts to make them random
    const shuffledPosts = posts.sort(() => 0.5 - Math.random());

    // Take only first 10 posts (optional)
    const randomPosts = shuffledPosts.slice(0, 10);

    // Display posts
    displayPosts(randomPosts);

  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  // Clear previous posts
  postList.innerHTML = '';

  posts.forEach(post => {
    // Create elements
    const li = document.createElement('li');
    const title = document.createElement('h1');
    const body = document.createElement('p');

    // Add content
    title.textContent = post.title;
    body.textContent = post.body;

    // Append elements
    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

// Call function
fetchPosts();