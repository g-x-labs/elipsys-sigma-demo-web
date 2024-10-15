// INFO: Unused for now
export function formatEstimateTime(seconds: number): string {
  if (
    seconds === undefined ||
    seconds === null ||
    isNaN(seconds) ||
    seconds < 0
  ) {
    return "--";
  }

  if (seconds < 60) {
    return `~${seconds} secs`;
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  const formattedMins = mins.toString().padStart(2, "0");
  const formattedSecs = secs.toString().padStart(2, "0");

  return `~${formattedMins}:${formattedSecs} mins`;
}
