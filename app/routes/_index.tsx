import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

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

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const PROJECTS: {
  title: string;
  description: string;
  href: string;
}[] = [
  {
    title: 'Puma',
    description: 'Next.js, GraphQL, Sanity, Cloudinary',
    href: 'https://uk.puma.com/uk/en',
  },
  {
    title: 'Naturkompaniet',
    description: 'Next.js, Sanity',
    href: 'https://www.naturkompaniet.no/no/',
  },
  {
    title: 'Wine for good',
    description: 'Shopify, Theme Development',
    href: 'https://wineforgood.ie/',
  },
  {
    title: 'Absolute drinks',
    description: 'Shopify, Theme Development',
    href: 'https://absolutedrinks.net/',
  },
  {
    title: 'Apopo',
    description: 'Pimcore, Symfony',
    href: 'https://www.apopo.org/',
  },
  {
    href: 'https://atticwomenswear.com/',
    title: 'Attic Womenswear',
    description: 'Shopify, Theme Development',
  },
  {
    href: 'https://cannycoffee.com/',
    title: 'Canny Coffee',
    description: 'Shopify, Theme Development',
  },
  {
    href: 'http://deendevelopers.com/',
    title: 'Deen Developers',
    description: 'Next.js',
  },
  {
    href: 'https://www.gatherdigital.co.uk/',
    title: 'Gather Digital',
    description: 'Pimcore, Symfony',
  },
  {
    href: 'https://us.hotelchocolat.com/',
    title: 'Hotel Chocolat',
    description: 'Shopify, Theme Development',
  },
  {
    href: 'https://www.icelolly.com/',
    title: 'Icelolly',
    description: 'Custom Framework, React, Node.js',
  },
  {
    href: 'https://intouchnetworks.com/en-gb',
    title: 'Intouch Networks',
    description: 'Nuxt.js, Wordpress',
  },
  {
    href: 'https://www.na-software.co.uk/',
    title: 'NA Software',
    description: 'Wordpress',
  },
  {
    href: 'https://www.obrienswine.ie/',
    title: "O'Briens Wine",
    description: 'Shopify, Custom Theme Development',
  },
  {
    href: 'https://www.pinseeker.co.uk/',
    title: 'Pinseeker',
    description: 'Pimcore, Symfony',
  },
  {
    href: 'https://quran.cafe/',
    title: 'Quran Cafe',
    description: 'Next.js, Supabase',
  },
  {
    href: 'https://gb.slendertone.com/',
    title: 'Slendertone',
    description: 'Shopify, Custom Theme Development',
  },
  {
    href: 'https://uk.trtltravel.com/',
    title: 'Trtl Travel',
    description: 'Shopify, Custom Theme Development',
  },
  {
    href: 'https://apps.apple.com/gb/app/elm-app/id1565557127/',
    title: 'East London Mosque',
    description: 'React Native, Expo, Firebase',
  },
];

export default function Index() {
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      <section>
        <h1 className="font-semibold text-2xl mb-4 tracking-tighter">
          hey, I&apos;m umar 👋
        </h1>
        <p className="mb-8">
          I&apos;m a software engineer and community founder. I currently work
          as an engineer at NearForm (formerly Formidable), Where i help our
          clients build modern web applications and websites.
        </p>
        <h2 className="font-semibold text-2xl mb-4 tracking-tighter underline underline-offset-2">
          projects.
        </h2>
        <ul className="mb-8">
          {PROJECTS.map((project) => {
            return (
              <li key={project.title}>
                <Link
                  className="flex flex-col space-y-1 mb-4"
                  to={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full flex flex-col">
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-xl">
                      {project.title}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <h2 className="font-semibold text-2xl mb-4 tracking-tighter underline underline-offset-2">
          let&apos;s connect.
        </h2>
        <ul className="flex flex-col md:flex-row space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <a
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.deendevelopers.com/"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">deen developers</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/umarrgora"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">twitter</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/umar-gora-34a810a7/"
            >
              <ArrowIcon />
              <p className="h-7 ml-2">linkedin</p>
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
