import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  title: 'Fonders Documentation',
  description: 'Documentation for using our APIs',

}
 
const banner = <Banner storageKey="key-some">Dashboard has been released 🎉🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>API Documentation</b>}
    logoLink="https://fonders.org"
    chatLink='https://discord.gg/wsvQwcJp'
    projectLink="https://github.com/Parkourer10"
  />
)
const footer = <Footer>{new Date().getFullYear()} © Fonders</Footer>

export default async function RootLayout({ children } : {children: React.ReactNode}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Parkourer10/fonders-docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}