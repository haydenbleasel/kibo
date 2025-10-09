export const processFolderName = (name: string) =>
  name
    .split("-")
    .map((word) => (word === "ai" ? "AI" : word))
    .map((word) => (word === "kbd" ? "kbd" : word))
    .map((word) => (word === "otp" ? "OTP" : word))
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
