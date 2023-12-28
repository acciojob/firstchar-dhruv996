document.addEventListener('DOMContentLoaded', function () {
  // Example usage
  const result1 = firstChar(' Rosa Parks ');
  document.getElementById('result').innerText = `Result for ' Rosa Parks ': '${result1}'`;

  const result2 = firstChar(' Hello World ');
  document.getElementById('result').innerText += `\nResult for ' Hello World ': '${result2}'`;

  const result3 = firstChar(' ');
  document.getElementById('result').innerText += `\nResult for ' ': '${result3}'`;

  const result4 = firstChar('');
  document.getElementById('result').innerText += `\nResult for '': '${result4}'`;
});

function firstChar(str) {
  for (const char of str) {
    if (char !== ' ') {
      return char;
    }
  }
  return '';
}

