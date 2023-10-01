import RomaniaMap from "@components/Map";
import SearchForm from "@components/SearchForm";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <h1 className="head_text text-center">
        Instant <div className="inline-block orange_gradient">Weather</div>
      </h1>

      <div className="flex justify-between max-lg:flex-col">
        <SearchForm />
        <RomaniaMap />
      </div>
    </main>
  )
}
