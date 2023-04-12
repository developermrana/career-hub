const showDetails = async (id) => {
  let detailsData = await fetch("jobFeature.json");
  let details = await detailsData.json();
  const detail = details.map((detail) => detail);
  let detailDatas = detail.find((detaildata) => detaildata.id === id);
  return detailDatas;
};

export default showDetails;
