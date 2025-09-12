/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ใช้อย่างใดอย่างหนึ่งพอ:
    // วิธีสั้น
    domains: ["myadsdevs.shop"],

    // หรือวิธีละเอียด (ไม่จำเป็นถ้าใช้ domains แล้ว)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myadsdevs.shop",
        pathname: "/sexshop168/**",
      },
    ],
  },
};

module.exports = nextConfig;
