"use client";

import { photoList } from "@/data/photoList";

export default function Home() {
  return (
    <>
      <main className="mx-2">
        <div>
          <h1 className="text-center text-3xl font-bold my-10">Wallpaper</h1>
          <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoList.map((img) => (
              <div><img src={img.url} alt={img.url} /></div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
