export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const country = req.headers?.get("x-vercel-ip-country");

  console.log("Requested country: ", country);

  const redirectMap = {
    US: "/us.html",
    BD: "/bd.html",
    SE: "/se.html",
  };

  const target = redirectMap[country] || "/us.html";
  const url = new URL(target, req.url);

  return Response.redirect(url.toString(), 307);
}
