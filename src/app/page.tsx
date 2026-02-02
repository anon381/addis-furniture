export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-center">
        <div className="space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-600">
            Addis Furniture
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Modern furniture for warm, livable spaces.
          </h1>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Discover curated pieces designed for comfort, durability, and style. From
            sofas and dining sets to bedroom essentials, we help you create a home
            that feels uniquely yours.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button className="inline-flex items-center justify-center rounded-full bg-amber-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-amber-700 transition-colors">
              Browse collections
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-800 hover:bg-slate-100 transition-colors">
              Visit showroom
            </button>
          </div>
        </div>

        <div className="relative h-64 md:h-80 rounded-3xl bg-gradient-to-tr from-amber-100 via-slate-50 to-slate-200 overflow-hidden border border-slate-200">
          <div className="absolute inset-6 rounded-2xl bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] flex flex-col justify-between p-6">
            <div>
              <p className="text-xs font-medium text-slate-500 mb-2">
                Featured set
              </p>
              <h2 className="text-lg font-semibold text-slate-900">
                Abeba Living Room Set
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Includes 3-seater sofa, lounge chair, and coffee table in oak finish.
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Ships in 5–7 days</span>
              <span className="font-semibold text-amber-700">Starting from ETB 32,500</span>
            </div>
          </div>
        </div>
      </div>

      <section
        id="collections"
        className="mt-16 grid gap-6 md:grid-cols-3 text-xs text-slate-600"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h3 className="font-semibold text-slate-900 mb-1 text-sm">
            Living room
          </h3>
          <p>Sectionals, sofas, coffee tables, and accent chairs.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h3 className="font-semibold text-slate-900 mb-1 text-sm">
            Dining
          </h3>
          <p>Extendable tables, dining chairs, and storage pieces.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <h3 className="font-semibold text-slate-900 mb-1 text-sm">
            Bedroom
          </h3>
          <p>Beds, nightstands, and wardrobes for restful spaces.</p>
        </div>
      </section>
    </section>
  );
}
