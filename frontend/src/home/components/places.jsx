/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import manali from "./images/manali.jpg"
const products = [
    {
      id: 1,
      name: 'Manali',
      href: '#',
      imageSrc:(require('./images/manali.jpg')),
      imageAlt: "Front of men's Basic Tee in black.",
      price: '78 tours',
      color: 'Driving through Beauty',
    },
    {
        id: 1,
        name: 'Jaipur',
        href: '#',
        imageSrc: (require('./images/jaipur.jpg')),
        imageAlt: "Front of men's Basic Tee in black.",
        price: '52 Tours',
        color: 'Explore The Pink City',
      },
      {
        id: 1,
        name: 'Kedarnath',
        href: '#',
        imageSrc: (require('./images/kedarnath.jpeg')),
        imageAlt: "Front of men's Basic Tee in black.",
        price: '35 Tours',
        color: 'Worship the holy place',
      },
      {
        id: 1,
        name: 'Nainital',
        href: '#',
        imageSrc: (require('./images/nainital.jpg')),
        imageAlt: "Front of men's Basic Tee in black.",
        price: '47 Tours',
        color: 'Experience the nature ',
      },
      
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Most Planed Tours</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  