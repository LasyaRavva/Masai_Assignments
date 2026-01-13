import boxen from 'boxen';

const message = 'I am using my first external module!';
const title = 'Hurray!!!';
const subtitle ="unicorns love rainbows"

console.log('\n--- Classic Style ---');
console.log(boxen(message, {
  title: title,
  titleAlignment: 'center',
  padding: 1,
  borderStyle: 'round'
}));

console.log('\n--- SingleDouble Style ---');
console.log(boxen(message, {
  title: title,
  titleAlignment: 'center',
  padding: 1,
  borderStyle: 'doubleSingle'
}));

console.log('\n--- Round Style ---');
console.log(boxen(subtitle, {
  title: title,
  titleAlignment: 'center',
  padding: 1,
  borderStyle: 'round'
}));

console.log('\n--- With Background Color ---');
console.log(boxen(subtitle, {
  title: title,
  titleAlignment: 'center',
  padding: 1,
  borderStyle: 'round',
  backgroundColor: 'cyan'
}));
