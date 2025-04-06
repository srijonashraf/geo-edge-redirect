export const config = {
  runtine: "edge",
};

export default async function handler(req) {
  const country = req.geo?.country || "US";

  const redirectMap = {
    US: "/us.html",
    BD: "/bd.html",
    SE: "/se.html",
  };

  const target = redirectMap[country] || "/us.html";

  return Response.redirect(target, 307);
}
