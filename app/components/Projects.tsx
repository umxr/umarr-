import { Link } from '@remix-run/react';

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

export const Projects = () => {
  return (
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
  );
};
