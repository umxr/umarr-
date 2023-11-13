import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import stylesheet from '~/globals.css';
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
];

export const loader = () => {
  return {
    ENV: {
      VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
    },
  };
};

export default function App() {
  const { ENV } = useLoaderData<typeof loader>();
  return (
    <html
      lang="en"
      className={clsx('text-black bg-white dark:text-white dark:bg-[#111010]')}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <Outlet />
        <Analytics />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
      </body>
    </html>
  );
}
