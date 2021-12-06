module.exports = function getMonth(value) {
  const dateObject = new Date(value);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return `${months[dateObject.getMonth()]}, ${dateObject.getFullYear()}`;
};
