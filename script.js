let button = document.getElementById('btn');

button.addEventListener('click', function () {
  const gram = parseInt(document.getElementById('grams').value);
  const type = document.getElementById('type').value;

  if (gram === '' || isNaN(gram)) {
    document.getElementById('gram').focus();
    document.getElementById('error').innerHTML = 'Please provide a valid gram';
    document.getElementById('output').innerHTML = '';
  } else {
    document.getElementById('error').innerHTML = '';
    switch (type) {
      case 'Ounces':
        convert_ounces(gram);
        break;
      case 'Pounds':
        convert_pounds(gram);
        break;
      case 'Kilograms':
        convert_kilogram(gram);
        break;

      default:
        alert('error');
    }

    function convert_ounces(grams) {
      let rate = 0.035274,
        ounces;
      ounces = gram * rate;
      document.getElementById('output').innerHTML =
        gram + ' grams = ' + ounces.toFixed(3) + 'ounces.';
    }

    function convert_pounds(grams) {
      let rate = 0.0022,
        pounds;
      pounds = gram * rate;
      document.getElementById('output').innerHTML =
        gram + ' grams = ' + pounds.toFixed(3) + 'pounds.';
    }

    function convert_kilogram(grams) {
      let rate = 0.001,
        kilogram;
      kilogram = gram * rate;
      document.getElementById('output').innerHTML =
        gram + ' grams = ' + kilogram.toFixed(3) + 'kg.';
    }
  }
});
