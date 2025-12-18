const products = [
  { id: '1', title: 'Acme Keyboard', handle: 'acme-mechanical-keyboard', price: '150.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/keyboard.png?v=1690003507', alt: 'Acme Keyboard' },
  { id: '2', title: 'Acme T-Shirt', handle: 'acme-t-shirt', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-color-black.png?v=1690003675', alt: 'Acme T-Shirt' },
  { id: '3', title: 'Acme Hoodie', handle: 'acme-hoodie', price: '50.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hoodie-1.png?v=1690003482', alt: 'Acme Hoodie' },
  { id: '4', title: 'Acme Circles T-Shirt', handle: 'acme-geometric-circles-t-shirt', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965', alt: 'Acme Circles T-Shirt' },
  { id: '5', title: 'Acme Prism T-Shirt', handle: 'acme-rainbow-prism-t-shirt', price: '25.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-spiral-1.png?v=1690003571', alt: 'Acme Prism T-Shirt' },
  { id: '6', title: 'Acme Cowboy Hat', handle: 'acme-cowboy-hat', price: '160.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-black-1.png?v=1690208765', alt: 'Acme Cowboy Hat' },
  { id: '7', title: 'Acme Slip-On Shoes', handle: 'acme-slip-on-shoes', price: '45.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/shoes-1.png?v=1690004109', alt: 'Acme Slip-On Shoes' },
  { id: '8', title: 'Acme Rainbow Sticker', handle: 'acme-rainbow-sticker', price: '4.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker-rainbow.png?v=1690003602', alt: 'Acme Rainbow Sticker' },
  { id: '9', title: 'Acme Cap', handle: 'acme-cap', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hat-1.png?v=1690002833', alt: 'Acme Cap' },
  { id: '10', title: 'Acme Dog Sweater', handle: 'acme-dog-sweater', price: '20.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/dog-sweater-1.png?v=1690003132', alt: 'Acme Dog Sweater' },
  { id: '11', title: 'Acme Cup', handle: 'acme-cup', price: '15.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cup-black.png?v=1690003088', alt: 'Acme Cup' },
  { id: '12', title: 'Acme Bomber Jacket', handle: 'acme-bomber-jacket', price: '50.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bomber-jacket-army.png?v=1690002722', alt: 'Acme Bomber Jacket' },
  { id: '13', title: 'Acme Baby Cap', handle: 'acme-baby-cap', price: '10.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-cap-black.png?v=1690002570', alt: 'Acme Baby Cap' },
  { id: '14', title: 'Acme Baby Onesie', handle: 'acme-baby-onesie', price: '10.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-beige-1.png?v=1690002632', alt: 'Acme Baby Onesie' },
  { id: '15', title: 'Acme Sticker', handle: 'acme-sticker', price: '4.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker.png?v=1690003619', alt: 'Acme Sticker' },
  { id: '16', title: 'Acme Mug', handle: 'acme-mug', price: '15.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/mug-1.png?v=1690003527', alt: 'Acme Mug' },
  { id: '17', title: 'Acme Drawstring Bag', handle: 'acme-drawstring-bag', price: '12.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304', alt: 'Acme Drawstring Bag' },
  { id: '18', title: 'Acme Pacifier', handle: 'acme-pacifier', price: '10.00', image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/pacifier-1.png?v=1690003544', alt: 'Acme Pacifier' }
];

const collections = ['All', 'Bags', 'Drinkware', 'Electronics', 'Footware', 'Headwear', 'Hoodies', 'Jackets', 'Kids', 'Pets', 'Shirts', 'Stickers'];
const sortOptions = ['Relevance', 'Trending', 'Latest arrivals', 'Price: Low to high', 'Price: High to low'];

export default function AllProducts() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">

      <nav className="flex items-center justify-between p-4 lg:px-6 border-b border-neutral-800">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-2" href="/">
            <div className="flex items-center justify-center bg-white h-10 w-10 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" aria-label="Acme Store logo" viewBox="0 0 32 28" className="h-4 w-4 fill-black">
                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
              </svg>
            </div>
            <span className="text-sm font-bold uppercase tracking-wide">Acme Store</span>
          </a>
          
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a className="text-neutral-400 hover:text-white transition-colors" href="/all">All</a></li>
            <li><a className="text-neutral-400 hover:text-white transition-colors" href="/shirts">Shirts</a></li>
            <li><a className="text-neutral-400 hover:text-white transition-colors" href="/stickers">Stickers</a></li>
          </ul>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:block relative">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="w-80 bg-neutral-800 border border-neutral-700 rounded px-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-600" 
            />
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <button className="relative flex items-center justify-center w-10 h-10 border border-neutral-700 rounded hover:border-neutral-600 transition-colors" aria-label="Shopping cart">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </nav>


      <main className="max-w-7xl mx-auto flex gap-8 p-4">

        <aside className="hidden md:block w-40 flex-shrink-0">
          <h3 className="text-xs text-neutral-500 mb-3">Collections</h3>
          <ul className="space-y-2">
            {collections.map((baraanuud) => (
              <li key={baraanuud}>
                <button
                  className="text-sm text-left w-full hover:text-white transition-colors text-neutral-400"
                >
                  {baraanuud}
                </button>
              </li>
            ))}
          </ul>
        </aside>


        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((baraa) => (
              <a
                
                className="group block relative bg-black border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors"
              >
                <div className="aspect-square flex items-center justify-center p-8">
                  <img 
                    alt={baraa.alt}
                    src={baraa.image}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between bg-black/80 backdrop-blur-sm border border-neutral-800 rounded-full px-4 py-2">
                    <h3 className="text-sm font-medium truncate mr-2">{baraa.title}</h3>
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      ${baraa.price} USD
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>


        <aside className="hidden md:block w-40 flex-shrink-0">
          <h3 className="text-xs text-neutral-500 mb-3">Sort by</h3>
          <ul className="space-y-2">
            {sortOptions.map((songolt) => (
              <li key={songolt}>
                <button
                  className="text-sm text-left w-full hover:text-white transition-colors text-neutral-400"
                >
                  {songolt}
                </button>
              </li>
            ))}
          </ul>
        </aside>
      </main>


      <footer className="text-sm text-neutral-400">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-700 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0">
          <div>
            <a className="flex items-center gap-2 text-white md:pt-1" href="/">
              <div className="flex flex-none items-center justify-center border border-neutral-700 bg-black h-[30px] w-[30px] rounded-lg">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  aria-label="Acme Store logo" 
                  viewBox="0 0 32 28" 
                  className="h-[10px] w-[10px] fill-white"
                >
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                </svg>
              </div>
              <span className="uppercase">Acme Store</span>
            </a>
          </div>
          
          <nav>
            <ul>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:text-neutral-300 md:inline-block md:text-sm text-neutral-300" href="/home">
                  Home
                </a>
              </li>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:underline md:inline-block md:text-sm" href="/about">
                  About
                </a>
              </li>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:underline md:inline-block md:text-sm" href="/terms">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:underline md:inline-block md:text-sm" href="/shipping">
                  Shipping &amp; Return Policy
                </a>
              </li>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:underline md:inline-block md:text-sm" href="/privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="block p-2 text-lg underline-offset-4 hover:underline md:inline-block md:text-sm" href="/faq">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="md:ml-auto">
            <a 
              className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-700 bg-black text-xs text-white" 
              aria-label="Deploy on Vercel" 
              href="https://vercel.com/templates/next.js/nextjs-commerce"
            >
              <span className="px-3">▲</span>
              <hr className="h-full border-r border-neutral-700" />
              <span className="px-3">Deploy</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 py-6 text-sm">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
            <p>© 2023-2025 ACME, Inc. All rights reserved.</p>
            <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
            <p>
              <a href="https://github.com/vercel/commerce">View the source</a>
            </p>
            <p className="md:ml-auto">
              <a href="https://vercel.com" className="text-white">
                Created by ▲ Vercel
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}