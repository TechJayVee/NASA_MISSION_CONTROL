const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  launchDate: new Date("November 10, 2030"),
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existLaunchWithId(launchId) {
  return launches.has(launchId);
}
function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      customer: ["Zero to Mastery", "NASA"],
      upcoming: true,
      success: true,
      flightNumber: latestFlightNumber,
    })
  );
}
function abortLaunchById(launchId) {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
}
module.exports = {
  existLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  abortLaunchById,
};
