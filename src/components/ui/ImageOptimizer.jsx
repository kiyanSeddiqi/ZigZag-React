function ImageOptimizer({
  image,
  alt = "",
  className = "",
  sizes = "100vw",
  loading = "lazy",
  priority = false,
  ...props
}) {
  if (!image) return null;

  let src;
  let srcSet;

  if (typeof image === "string") {
    src = image.split(",")[0].split(" ")[0];
    srcSet = image;
  } else {
    src = image?.src;
    srcSet = image?.srcSet ?? image?.srcset;
  }

  if (!src) return null;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      decoding={priority ? "sync" : "async"}
      fetchPriority={priority ? "high" : "auto"}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
}

export default ImageOptimizer;
