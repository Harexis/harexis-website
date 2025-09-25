import Image from 'next/image';


const sampleNfts = [
'/1.png',
'/2.png',
'/3.png',
'/4.png',
];


export default function NftGallery() {
return (
<div className="p-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
{sampleNfts.map((src, i) => (
<div key={i} className="rounded overflow-hidden hover:scale-105 transition">
<Image src={src} width={400} height={400} alt={`Harexis #${i + 1}`} />
</div>
))}
</div>
);
}