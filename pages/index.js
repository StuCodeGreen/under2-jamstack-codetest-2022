import Head from 'next/head'

import { FeaturedBenefits } from '../components/sections/FeaturedBenefits'
import { FeaturedPartners } from '../components/sections/FeaturedPartners/FeaturedPartners'
import { GlobalFooter } from '../components/sections/GlobalFooter'
import { GlobalNavigation } from '../components/sections/GlobalNavigation'
import { HomeHero } from '../components/sections/HomeHero'
import { LatestArticles } from '../components/sections/LatestArticles'
import { Newsletter } from '../components/sections/Newsletter'

import featuredPartnersJSON from "../content/featured-partners.json"
import latestArticlesJSON from "../content/latest-articles.json"

export default function Home() {
  return (
    <>
      <Head>
        <title>Mula | The reporting tools taking the fintech world by storm</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam…" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GlobalNavigation />
      <div className="grow">
        <HomeHero />
        <FeaturedBenefits padding="mdTopOnly"  />
        <FeaturedPartners partners={featuredPartnersJSON} />
        <LatestArticles articles={latestArticlesJSON} />
        <Newsletter articles={latestArticlesJSON} />
      </div>
      <GlobalFooter />
    </>
  )
}
