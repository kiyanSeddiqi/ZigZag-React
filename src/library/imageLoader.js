const modules = import.meta.glob("../assets/images/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: {
    w: "200;240;256;320;400;800",
    format: "webp",
    as: "srcset",
  },
  import: "default",
});

export const optimizedImgs = {};

for (const path in modules) {
  const file = path.split("/").pop();
  const name = file.split(".")[0];
  optimizedImgs[name] = modules[path];
}
