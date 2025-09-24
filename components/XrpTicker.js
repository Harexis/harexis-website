import { useEffect, useState } from 'react';

export default function XrpTicker() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    async function fetchPrice() {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=usd');
        if (!res.ok) throw new Error('Failed to fetch XRP price');
        const data = await res.json();
        setPrice(data.ripple.usd);
      } catch (error) {
        console.error('Error fetching XRP price:', error.message);
        setPrice('N/A'); // fallback value
      }
    }

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000); // refresh every 60 secs
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-6 text-green-400 font-mono text-sm z-50">
      XRP Price: {price === null ? 'Loading...' : price === 'N/A' ? 'Unavailable' : `$${price}`}
    </div>
  );
}
