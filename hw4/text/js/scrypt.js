let block = document.getElementById('text');
document.getElementById('replace').addEventListener('click', () => {
  // block.textContent = block.textContent.replace(/'/g, '"');             //заменяет все одинарные кавычки
  block.textContent = block.textContent.replace(/\B'|'\B/g, '"'); //заменяет оинарные кавычки пропуская тип aren't

});