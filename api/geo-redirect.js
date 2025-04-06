export const config = {
  runtime: "edge", // Fixed typo in "runtime"
};

export default async function handler(req) {
  const country = req.geo?.country || "US";

  const redirectMap = {
    US: "/us.html",
    BD: "/bd.html",
    SE: "/se.html",
  };

  const target = redirectMap[country] || "/us.html";

  // Create a full URL by combining the request URL's origin with the target path
  const url = new URL(target, req.url);

  return Response.redirect(url.toString(), 307);
}
