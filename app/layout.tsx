import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { DiscordIcon } from 'nextra/icons'
 
export const metadata = {
  title: 'Fonders Documentation',
  description: 'Documentation for using our APIs',

}
 
const banner = <Banner storageKey="key-some">Translation API has been released 🎉🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>Fonders</b>}
    logoLink="https://fonders.org/pfp.png"
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
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
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