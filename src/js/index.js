function copyCode(button) {
    const codeContainer = button.closest('.code-container');
    const code = codeContainer.querySelector('code').innerText;
    const clipboardIcon = button.querySelector('#copy');
    const successIcon = button.querySelector('#sucess');
    const failedIcon = button.querySelector('#failed');

    navigator.clipboard.writeText(code).then(() => {
      clipboardIcon.style.display = 'none';
      successIcon.style.display = 'block';
      
      setTimeout(() => {
        successIcon.style.display = 'none';
        clipboardIcon.style.display = 'block';
      }, 2000);
    }).catch(err => {  
      clipboardIcon.style.display = 'none';
      failedIcon.style.display = 'block';
      
      setTimeout(() => {
        failedIcon.style.display = 'none';
        clipboardIcon.style.display = 'block';
      }, 2000);
    });
}