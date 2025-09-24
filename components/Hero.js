import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../public/logo.png';


export default function Hero() {
return (
<motion.div
className="text-center py-16"
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
>
<Image src={logo} alt="Harexis Logo" width={300} height={200} className="mx-auto" />
<h1 className="text-4xl font-bold mt-6">Hold 3 or 1-of-1 — Earn XRP</h1>
<p className="mt-2 text-gray-400">1000 Supply • Passive Income • XRPL NFTs</p>
</motion.div>
);
}

