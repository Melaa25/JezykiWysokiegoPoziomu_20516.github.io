const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/JezykiWysokiegoPoziomu_20516.github.io/' : '',
  basePath: isProd ? '/JezykiWysokiegoPoziomu_20516.github.io' : '',
  assetPrefix: '/JezykiWysokiegoPoziomu_20516.github.io',
  output: 'export'
};

export default nextConfig;