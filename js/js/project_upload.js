const fileInput = document.querySelector('.upload-form');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append('file', file);

    fetch('upload-url', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        
        console.error(error);
    });
});