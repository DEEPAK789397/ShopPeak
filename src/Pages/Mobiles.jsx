
import React from 'react'
import { useSelector } from 'react-redux'

const Mobiles = () => {
    const selector = useSelector(state => state.products.items)

    const FilterProducts = selector.filter((product) => {
        return product.mainCategory === "Mobiles"
    })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

            {FilterProducts.map((product) => (
                <div
                    key={product.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                >
                    <div className="h-52 bg-slate-100 flex items-center justify-center p-4">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <div className="p-4">
                        <h2 className="text-base font-semibold text-slate-800 line-clamp-1">
                            {product.title}
                        </h2>

                        <p className="text-sm text-slate-500 mt-2 line-clamp-2">
                            {product.description}
                        </p>

                        <p className="text-lg font-bold text-purple-700 mt-3">
                            ₹{product.price}
                        </p>

                        <p className="text-sm text-yellow-500 mt-1">
                            ⭐ {product.rating}
                        </p>

                        <button className="w-full mt-4 bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Mobiles
