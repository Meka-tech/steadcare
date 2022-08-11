export const truncateStrng = (str, length) => {
  if (str.constructor === String && length > 0) {
    return str.slice(0, length) + "...";
  }
};

export const formatDate = (str) => {};
