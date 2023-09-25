import '@root/global.scss';

import FooterTiny from '@root/components/FooterTiny';
import Hero from '@root/components/Hero';
import ResponsiveNavbar from '@root/components/ResponsiveNavbar';
import SectionEventPage from '@root/components/SectionEventPage';
import {
  FILECOIN_DEV_SUMMIT_2023_HERO_CONTENT,
  FILECOIN_DEV_SUMMIT_2023_PAGE_CONTENT,
  FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT,
  FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT,
  FOOTER_FILECOIN_DEV_SUMMIT_CONTENT,
} from '@root/content/filecoin-dev-summit';
import { FILECOIN_DEV_SUMMIT_ICELAND_PAGE_CONTENT } from '@root/content/iceland-page-content';

export async function generateMetadata({ params, searchParams }) {
  const title = 'FIL Dev Summit 2023: Iceland';
  const description =
    'FIL Dev Summit is a gathering of developers, builders, and engaged community members who want to contribute to the core protocol and network evolution of Filecoin (think IPFS Thing, but bigger!).';
  const url = 'https://fildev.io';

  return {
    title,
    description,
    url,
    openGraph: {
      title,
      description,
      url,
      // SUMMARY_LARGE_IMAGE: 1500x785
      images: ['https://i.ibb.co/XXgFfk0/twitter.png'],
    },
    twitter: {
      title,
      description,
      url,
      handle: '@filecoin',
      cardType: 'summary_large_image',
    },
  };
}

export default async function Page(props) {
  const blocks = FILECOIN_DEV_SUMMIT_ICELAND_PAGE_CONTENT;
  const footerContent = FOOTER_FILECOIN_DEV_SUMMIT_CONTENT;

  const navContent = FILECOIN_DEV_SUMMIT_NAVIGATION_CONTENT;
  const pageStyle = FILECOIN_DEV_SUMMIT_PAGE_STYLE_CONTENT;

  return (
    <div style={{ background: pageStyle.backgroundColor, color: pageStyle.textColor }}>
      <ResponsiveNavbar navContent={navContent} />

      <div style={{ paddingTop: '3rem' }}>
        <SectionEventPage blocks={blocks} pageStyle={pageStyle} />
      </div>

      <FooterTiny {...footerContent} />
    </div>
  );
}
