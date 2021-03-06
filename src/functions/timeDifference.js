const timeDifference = (actual, time) => {
  const diff = actual - time;
  const seconds = diff / 1000;
  if (seconds < 60) return `${seconds.toFixed()}s ago.`;
  if (seconds < 3600) return `${(seconds / 60).toFixed()}m ago.`;
  if (seconds < 86400) return `${(seconds / 3600).toFixed()}h ago.`;
  if (seconds < 604800) return `${(seconds / 86400).toFixed()}d ago.`;
  return `${(seconds / 604800).toFixed()}w ago.`;
};

export default timeDifference;
