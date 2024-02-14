const importAll = (r) => {
    let images = {};
    r.keys().forEach((key) => {
      const imageName = key.replace("./", "");
      const image = r(key).default;
      images[imageName] = image;
    });
    return images;
};
export default importAll;