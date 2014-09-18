export default {
  fixture: function (html) {
    var fixture = document.getElementById('fixture');

    if (!fixture) {
      fixture = document.createElement('div');
      fixture.id = 'fixture';
      document.body.appendChild(fixture);
    }

    if (arguments.length) {
      fixture.innerHTML = '';

      if (typeof html === 'string') {
        fixture.innerHTML = html;
      } else if (typeof html === 'object') {
        fixture.appendChild(html);
      }
    }

    return fixture;
  }
};
