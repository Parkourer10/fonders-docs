import nextra from 'nextra'

const withNextra = nextra({
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/get-started',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/get-started',
        permanent: true,
      }
    ]
  }
})