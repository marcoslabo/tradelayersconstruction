import './globals.css';

export const metadata = {
  title: 'TradeLayer Construction | Premium Fencing in Austin, TX',
  description: 'Your neighbors will ask who built that fence. Premium fencing installed in days, not weeks. Licensed & insured. Free quotes. Serving Austin and Central Texas.',
  keywords: 'fence installation Austin, fencing company Austin TX, wood fence, iron fence, vinyl fence, fence contractor, TradeLayer Construction',
  openGraph: {
    title: 'TradeLayer Construction | Premium Fencing in Austin, TX',
    description: 'Premium fencing installed in days, not weeks. Zero hassle. Free quotes.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
