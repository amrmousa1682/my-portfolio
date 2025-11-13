import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
      }
    ],
    dangerouslyAllowSVG: true,
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);