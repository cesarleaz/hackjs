import HeroSVG from '~/icons/hero.svg?react'
import InstagramSVG from '~/icons/instagram.svg?react'
import Typography from './typography'

function ButtonToChallenges() {
    return (
        <div className="col-span-2">
        <div class="relative flex group hover:scale-105 hover:-rotate-1 transition-all">
            <div
                class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-pink-500 to-orange-400 rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <a href="#retos"
                class="text-xl relative flex-1 flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-black/90 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">
                ¡Veamos los retos!
            </a>
        </div>
        </div>
    )
}

function ButtonToInstagram() {
    return (
        <a
        className="bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 text-white hover:bg-purple-700 hover:contrast-150 hover:scale-105 hover:-rotate-1 col-span-2 xl:col-span-1 flex md:text-xl items-center justify-center px-6 py-2 xl:py-4 font-bold transition-all rounded-lg gap-x-2"
        href="https://instagram.com/gabrie.dev"
        target="_blank"
        rel="noreferrer noopener"
      >
        <InstagramSVG
          className="w-6 h-6"
          />
        Sígueme en Instagram
      </a>
    )
}

export default function Hero() {
    return (
        <section className="flex items-center justify-center pb-16">
            <div>
            <Typography variant="title">
            Un espacio
            <br />
            lleno de retos de programación
            </Typography>
    <footer className="flex flex-col gap-4 p-10">
      <ButtonToInstagram />
      <ButtonToChallenges />
    </footer>
  </div>
  <div className="hidden w-1/2 sm:block">
   <HeroSVG />
  </div>
</section>
    )
}