import Head from 'next/head';
import Image from 'next/image';
import XrpTicker from '../components/XrpTicker';

export default function Home() {
  return (
    <>
      <Head>
        <title>Harexis — Earn XRP by Holding</title>
      </Head>

      <main className="relative text-white min-h-screen bg-black font-sans">
        {/* Live XRP Price */}
        <div className="absolute top-4 right-6 text-green-400 text-sm z-50">
          <XrpTicker />
        </div>

        {/* Hero Section */}
        <section
          className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
          style={{
            backgroundImage: "url('/backgrounds/1.png')",
          }}
        >
          <Image src="/logo.png" alt="Harexis Logo" width={200} height={80} />
          <h1 className="text-3xl md:text-5xl font-bold mt-6">
           
Luxury Ops. Passive Pay.
  <span className="text-yellow-400">Earn XRP</span>
          </h1>
          <p className="mt-2 text-gray-300">
            1000 Supply • Passive Income • XRPL NFTs
          </p>
        </section>

        {/* Passive XRP Rewards Section */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Passive XRP Rewards</h2>
          <ul className="space-y-2 text-lg">
            <li>✅ Hold 3+ Harexis → Earn 2 XRP per snapshot</li>
            <li>✅ Hold a 1-of-1 Harexis → Earn 5 XRP per snapshot</li>
          </ul>
          <p className="mt-2 text-gray-400 text-sm">
            Rewards are distributed from mint and royalty revenue montly... no staking needed.
          </p>
        </section>

        {/* About Harexis Section */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">What is Harexis?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Harexis is an exclusive 1,000 supply NFT collection on the XRP Ledger, blending underground luxury, street fashion, and passive XRP income into one unique digital ecosystem.
            <br /><br />
            Every rabbit is part of a silent digital vault crew. Laser grids, neon tags, space suits no war, no fantasy, just encrypted operations and passive flow.
          </p>
        </section>

        {/* Why It Stands Out */}
        <section className="py-12 px-4 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Why Harexis Stands Out</h2>
          <ul className="list-disc list-inside text-lg text-gray-300 space-y-2">
            <li>🚨 Limited to 1,000 NFTs no inflation, no dilution</li>
            <li>🧥 Streetwear-style fashion meets NFT avatars</li>
            <li>🔐 Vault-core & heist aesthetics</li>
            <li>📈 Live XRP price integrated</li>
            <li>🎨 1-of-1s included  rare, custom rabbits</li>
          </ul>
        </section>

        {/* Showcase Section */}
        <section className="py-12 px-4 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <img
              key={n}
              src={`/${n}.png`}
              alt={`Harexis ${n}`}
              className="rounded-xl shadow-lg transition transform hover:scale-105 duration-300"
            />
          ))}
        </section>

        {/* Connect Section */}
        <section className="py-12 px-4 text-center text-gray-300">
          <h2 className="text-2xl font-semibold mb-4">Connect With the Operation</h2>
          <div className="space-y-2 text-lg">
            <p>🐦 X: <a href="https://x.com/HarexisXRP" target="_blank" className="text-blue-400 underline">@HarexisXRP</a></p>
            <p>💬 Discord: <em> Soon</em></p>
            <p>🛒 Marketplace: <em>Coming Soon on xrp.cafe</em></p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Harexis. All rights reserved.
        </footer>
      </main>
    </>
  );
}