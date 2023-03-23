/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "shop-phinf.pstatic.net",
      "image.istarbucks.co.kr",
      "cdn.sisamagazine.co.kr",
      "blog.kakaocdn.net",
      "cdn.ggilbo.com",
      "i.ibb.co",
    ],
  },
};

module.exports = nextConfig;
