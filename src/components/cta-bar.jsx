import { CALL_TO_ACTION } from '~/constants/call-to-action'

function CTACard({ icon: Icon = 'svg', title, description }) {
  return (
    <div className="py-8 xl:flex-none xl:py-0">
      <div className=" text-white flex items-center max-w-xs px-4 mx-auto xl:max-w-none xl:px-8">
        <Icon
          className="w-10 h-10 grayscale"
          height={21}
          width={21}
        />
        <div className="flex flex-col-reverse flex-auto ml-4">
          <h3 className="text-xl font-bold">
            {description}
          </h3>
          <p className="p-0 m-0 font-medium text-yellow-300 text-md">
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function CTABar() {
    return (
        <section>
          <div className="items-center justify-center mx-auto divide-y mb-36 divide-white/10 max-w-7xl xl:flex xl:justify-center xl:divide-y-0 xl:divide-x xl:py-8">
            {CALL_TO_ACTION.map((cta) => (
              <CTACard key={cta.title} {...cta} />
            ))}
          </div>
        </section>
    )
}