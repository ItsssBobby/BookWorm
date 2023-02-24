const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
    const image = document.querySelector('#img-url').value;

    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        image
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/allposts');
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
  