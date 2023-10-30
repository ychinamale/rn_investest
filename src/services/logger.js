export function logger(key, data) {
  try {
    console.log(`${key}\n${JSON.stringify(data, null, 2)}`);
  } catch (err) {
    console.log(`${key}\n${data}`);
  }
}
