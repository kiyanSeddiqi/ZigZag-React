const bannerModules = import.meta.glob("../assets/images/banners/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  query: {
    w: "800;1200;1600;2000",
    format: "webp",
    as: "srcset",
  },
  import: "default",
});

export const bannerImages = {};

for (const path in bannerModules) {
  const file = path.split("/").pop();
  const name = file.split(".")[0];
  bannerImages[name] = bannerModules[path];
}
