import { getPopularPeople } from "@/utils/api";
import PersonCard from "@/components/Person"; // Menggunakan komponen Person yang dibuat sebelumnya

export default async function PeoplePage() {
  const people = await getPopularPeople();

  return (
    <main className="min-h-screen bg-white text-slate-900 py-10 px-6 md:px-12">
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-3xl font-bold mb-6">Popular People</h1>
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {people.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </section>
      </div>
    </main>
  );
}