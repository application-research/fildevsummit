import DefaultMetaTags from '@components/DefaultMetaTags';
import PlausibleScript from '@root/components/PlausibleScript';

export default async function Head({ params }) {
  const title = 'Filecoin Dev Summit';
  const description = 'Filecoin Dev Summit 2023 - Singapore and Iceland ';
  const url = 'https://filecoindevsummit.io';

  // SUMMARY_LARGE_IMAGE: 1500x785
  return (
    <>
      <title>{title}</title>
      <DefaultMetaTags />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="" />
      <PlausibleScript />
    </>
  );
}
