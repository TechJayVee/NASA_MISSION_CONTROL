const {
  getAllLaunches,
  addNewLaunch,
  existLaunchWithId,
  abortLaunchById,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpaddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.target ||
    !launch.launchDate
  ) {
    return res.status(400).json({
      error: "Missing Required Launch Property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid Launch Date",
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const launchId = Number(req.params.id);

  if (!existLaunchWithId(launchId)) {
    //if launch doesnt exist return 404
    return res.status(400).json({
      error: "Launch Not Found!",
    });
  }
  //if launch does exist return 200
  const aborted = abortLaunchById(launchId);
  return res.status(200).json(aborted);
}
module.exports = {
  httpGetAllLaunches,
  httpaddNewLaunch,
  httpAbortLaunch,
};
