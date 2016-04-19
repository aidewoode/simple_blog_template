import moment from 'moment';

export default function(vue) {
  vue.filter('formattedDate', (value) => {
    let date = new Date(value);

    return moment(date).format('ll');
  });
}
