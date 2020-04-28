export const content = [{ component: "test" }];

async function streamComponent(fn, i = 0) {
  if (i >= content.length) {
    return;
  }
  await fn(content[i]);
  setTimeout(() => streamComponent(fn, i + 1), 1500);
}

export default streamComponent;
