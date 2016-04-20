export default function(type, id, action) {
  let request = new XMLHttpRequest();

  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      action(request.responseText);
    }
  }

  request.open('GET', type + '/' + id + '.md', true);
  request.send();
};
