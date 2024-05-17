const currentDate = (date) => {
  return new Date().toISOString().split("T")[0];
};

export default currentDate;
