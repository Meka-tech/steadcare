export const truncateStrng = (str, length) => {
  if (str.constructor === String && length > 0) {
    return str.slice(0, length) + "...";
  }
};

export const formatDate = (str) => {};

export const Capitalize = (str) => {
  const arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
};
