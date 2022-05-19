function count(num) {
  console.log(num);
  if (num.slice(0, 3) === '+91') {
    num = num.slice(3);
  }else
  if (num.slice(0, 2) === '91') {
    num = num.slice(2);
  } else if (num.slice(0, 1) === '0') {
    num = num.slice(1);
  } 
  else if (num.slice(0, 3) === '264') {
    num = num.slice(3);
  }else {
    num = num;
  }

  console.log(num.length);

  return num.length;
}
module.exports = count;
