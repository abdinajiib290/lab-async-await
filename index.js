// Write your code here!
async function getPosts() {
  try {
    // Fetch data from API using async/await
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    // Display posts after fetching
    displayPosts(posts);
  } catch (error) {
    console.log("Error fetching posts:", error);
  }
}

// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach((post) => {
    // Create elements
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Add content
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append elements
    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Call function
getPosts();