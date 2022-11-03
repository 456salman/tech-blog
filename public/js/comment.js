const commentFormHandler = async (event) => {
    event.preventDefault();
  // Get values of name and budget limit and trim to remove unused spaces
    const comment = document.querySelector('#comment').value.trim();
    // if there is no input in name or budget limit then a warrning will a
    if(!comment){ 
      const commentWar = document.getElementById('commentL');
        commentWar.style.display = 'block'
    }
    else if (comment) {
      const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ name, budget_limit }),
        headers: { 'Content-Type': 'application/json' },
      });
  // If required fields are ok then reroute to dashboard
      if (response.ok) {
        document.location.replace('/dash');
        // otherwise it will fail to save budget and alert
      } else {
        
      }
    }
  };

  // Call build-form handler
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