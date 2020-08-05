export const bypassBorders = (top: number, height: number) => {
  if (top <= height + 10) {
    return {
      top: top + height
    };
  } else {
    return {
      top: top - height
    };
  }
};
