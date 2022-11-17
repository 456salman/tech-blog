const commentFormHandler = async (event) => {
    event.preventDefault();
  // Get values of name and budget limit and trim to remove unused spaces
    const comment = document.querySelector('#comment').value.trim();
    const url = location.href.split("/")
    const post_id = url[url.length - 1]
    console.log(post_id)
    console.log(comment)
    // if there is no input in name or budget limit then a warrning will a
    if(!comment){ 
      const commentWar = document.getElementById('commentL');
        commentWar.style.display = 'block'
    }
    else if (comment) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ comment_text: comment, post_id}),
        headers: { 'Content-Type': 'application/json' },
      });
      const result = await response.json();
      console.log(result)
  // If required fields are ok then reroute to dashboard
      if (response.ok) {
        document.location.replace('/post/' + post_id);
        // otherwise it will fail to save budget and alert
      } else {
      alert("err")
      }
    }
  };
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);




















const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };