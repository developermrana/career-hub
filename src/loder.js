let data;
const showDetails = async (id) => {
  const detailsData = await fetch("jobFeature.json");
  const details = await detailsData.json();
  details.map((detail) => {
    if (detail.id === id) {
      return;
    }
  });
};

console.log(data);

export { showDetails };
