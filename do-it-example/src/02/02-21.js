function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

let qs = 'banan=10&apple=20&orange=30';

function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split('&');

  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('=');
      return { key, value };
    })
    .reduce((result, item) => {
      result[item.key] = item.value;
      return result;
    }, {});
}

console.log(parse(qs));
