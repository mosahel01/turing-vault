function estimateResponseTime(
  promptLength: number = 100,
  modelType: string = "text",
) {
  switch (modelType) {
    case "text":
      return `${modelType}: 2 + (0.01 * ${promptLength})`;
    case "image":
      return `${modelType}: 5 + (0.02 * ${promptLength})`;
    case "code":
      return `${modelType}: 3 + (0.05 * ${promptLength})`;
    default:
      return 0;
  }
}

console.log(estimateResponseTime(300, "image"));
