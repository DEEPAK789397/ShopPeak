
import Benefits from "../Components/Benefits"
import Categories from "../Components/Categories"
import Hero from "../Components/Hero"
import Promobanner from "../Components/Promobanner"
import TrendingProduct from "../Components/TrendingProduct"

function Home() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Hero />
            <Benefits />
            <Categories />
            <TrendingProduct />
            <Promobanner />

        </div>
    )
}

export default Home
