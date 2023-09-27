import RomaniaMap from "@components/Map";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <h1 className="head_text text-center">
        Instant <div className="inline-block orange_gradient">Weather</div>
      </h1>

      <RomaniaMap />
    </main>
  )
}
