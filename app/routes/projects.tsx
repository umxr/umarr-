import type { MetaFunction } from '@remix-run/node';
import { Connect, Navbar, Projects } from '~/components';

export const meta: MetaFunction = () => {
  return [
    { title: 'Umar Gora' },
    { name: 'description', content: 'Founder, engineer and traveller' },
    {
      name: 'og:name',
      content: 'Umar Gora',
    },
    {
      name: 'og:description',
      content: 'Founder, engineer and traveller',
    },
    {
      name: 'og:url',
      content: 'https://umar.codes',
    },
    {
      name: 'og:site_name',
      content: 'Umar Gora',
    },
    {
      name: 'og:locale',
      content: 'en_GB',
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Umar Gora',
    },
    {
      name: 'twitter:description',
      content: 'Founder, engineer and traveller',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'googlebot',
      content:
        'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1',
    },
  ];
};

export default function Page() {
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <Navbar />
      <section>
        <h1 className="font-semibold text-2xl mb-4 tracking-tighter underline underline-offset-2">
          projects.
        </h1>
        <Projects />
        <Connect />
      </section>
    </main>
  );
}
