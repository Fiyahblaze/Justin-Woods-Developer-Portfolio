function HeroShowcase() {
  return (
    <div className="relative isolate mx-auto aspect-square w-full max-w-xl">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-8 -z-10 rounded-full bg-cyan-400/15 blur-3xl"
      />

      <a
        href="#project-toolshare"
        aria-label="View ToolShare project details"
        className="absolute left-[10%] top-[5%] z-10 block w-[78%] -rotate-6 overflow-hidden rounded-xl border border-cyan-700 bg-[#071b29] shadow-[0_0_30px_#0891b233] transition-colors hover:border-teal-300"
      >
        <img
          src="/images/toolshare.png"
          alt="ToolShare project concept illustration"
          width={1536}
          height={1024}
          className="block aspect-[3/2] w-full object-cover"
        />
      </a>

      <a
        href="#project-ip-tracker"
        aria-label="View IP Address Tracker project details"
        className="absolute bottom-[8%] left-[1%] z-20 block w-[60%] rotate-2 overflow-hidden rounded-xl border border-cyan-600 bg-[#071b29] shadow-[0_0_24px_#06b6d433] transition-colors hover:border-teal-300"
      >
        <img
          src="/images/ip-tracker.png"
          alt="IP Address Tracker project concept illustration"
          width={1536}
          height={1024}
          className="block aspect-[3/2] w-full object-cover"
        />
      </a>

      <a
        href="#project-zenith"
        aria-label="View Zenith Product API project details"
        className="absolute bottom-[17%] right-[1%] z-30 block w-[49%] -rotate-3 overflow-hidden rounded-xl border border-cyan-700 bg-[#061722] shadow-[0_0_24px_#0891b233] transition-colors hover:border-teal-300"
      >
        <img
          src="/images/zenith-api.png"
          alt="Zenith Product API project concept illustration"
          width={1536}
          height={1024}
          className="block aspect-[3/2] w-full object-cover"
        />
      </a>
    </div>
  )
}

export default HeroShowcase