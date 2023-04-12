const showDetails = async (id) => {
  const detailsData = await fetch("jobFeature.json");
  const details = await detailsData.json();
  details.map((detail) => {
    if (detail.id === id) {
    }
  });
};

export default showDetails;
