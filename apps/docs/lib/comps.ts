export const processFolderName = (name: string) => {
  if (name === "ai") {
    return "AI";
  }

  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
