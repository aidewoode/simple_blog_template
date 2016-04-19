export default function(type, title, action) {
  let request = new XMLHttpRequest();

  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      action(request.responseText);
    }
  }

  request.open('GET', type + '/' + title + '.md', true);
  request.send();
};
