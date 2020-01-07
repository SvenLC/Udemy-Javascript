const ids = new Set(['Hi', 'From', 'Set!']);
ids.add(2);
if (ids.has('Hi')) {
  ids.delete('Hi');
}

for (const entry of ids.entries()) {
  console.log(entry[0]);
}
