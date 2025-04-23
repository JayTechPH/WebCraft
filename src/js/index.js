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

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setTheme(theme) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `../src/css/${theme}.css`;
  const head = document.head;
  head.insertBefore(link, head.firstChild);
  setCookie('theme', theme);
}

function switchTheme() {
  let theme = getCookie('theme');
  if (theme === 'dark') {
    setTheme('light');
  } else {
    setTheme('dark');
  }
  location.reload();
}


document.addEventListener('DOMContentLoaded', function () {
  let theme = getCookie('theme');
  if (!theme) {
    theme = 'dark';
    setTheme(theme);
  } else {
    setTheme(theme);
  }

  const dark = document.getElementById('dark');
  const light = document.getElementById('light');
  if (theme === 'dark') {
    dark.style.display = 'none';
    light.style.display = 'block';
  } else {
    dark.style.display = 'block';
    light.style.display = 'none';
  }
});