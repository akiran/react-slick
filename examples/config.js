export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://s3.amazonaws.com/static.neostack.com/img/react-slick"
    : "/img/react-slick";
