export const bypassBorders = bounds => {
  if (bounds.top <= bounds.height + 10) {
    return {
      top: bounds.top + bounds.height
    };
  } else {
    return {
      top: bounds.top - bounds.height
    };
  }
};
