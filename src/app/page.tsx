"use client";

import { Modal } from "@/components/Modal";
import { PhotoItem } from "@/components/PhotoItem";
import { photoList } from "@/data/photoList";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState("");
  const openModal = (id: number) => {
    const photo = photoList.find((item) => item.id === id);
    if (photo) {
      setImageOfModal(photo.url);
      setShowModal(true);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <main className="mx-2 ">
        <div>
          <h1 className="text-center text-3xl font-bold my-10 text-white">
            Wallpaper
          </h1>
          <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-5">
            {photoList.map((img) => (
              <PhotoItem
                key={img.id}
                photo={img}
                onClick={() => openModal(img.id)}
              />
            ))}
          </section>
          {showModal && <Modal img={imageOfModal} closeModal={closeModal} />}
        </div>
      </main>
    </>
  );
}
