/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['www.paypalobjects.com', "res.cloudinary.com"],
  },
}

module.exports ={
  
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  async headers() {
    return [
      {
        source: '/api/students/login',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:  'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value:  'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          },
        ],
      },
      {
        source: '/api/students',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:  'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value:  'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          },
        ],
      },
      {
        source: '/api/students/id',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:  'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value:  'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          },
        ],
      },
      {
        source: '/api/feedbacks',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:  'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value:  'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          },
        ],
      },
      {
        source: '/api/feedbacks/id',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:  'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value:  'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          },
        ],
      },
    ]
  }
}