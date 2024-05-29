import { Countdown } from "@/components/countdown";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 bottom-0 right-0 z-50 flex flex-col justify-center items-center gap-5">
        <Image src="/next.svg" alt="Sarah G" width={200} height={200} />
        <p className="text-center text-white text-6xl font-headline mt-4 mb-4">
          December 13, 2024
        </p>
        <div className="flex">
          <div className="h-full w-28 bg-gradient-to-l from-[rgba(255,255,255,0.8)] to-transparent"></div>
          <div className="bg-white bg-opacity-80">
            <Countdown />
          </div>
          <div className="h-full w-28 bg-gradient-to-r from-[rgba(255,255,255,0.8)] to-transparent"></div>
        </div>

        <p className="text-white text-4xl font-headline mt-5 text-center">
          Hacienda Sotuta de Peón
          <br />
          <span className="text-2xl">near Mérida, México</span>
        </p>
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0 z-20 bg-black bg-opacity-20"></div>
      <div className="absolute top-0 left-0 bottom-0 right-0 z-10 bg-sg-orange bg-opacity-20"></div>
      <div className="absolute top-0 left-0 bottom-0 right-0 z-0">
        <video
          controls={false}
          autoPlay={true}
          loop={true}
          poster="/preview-first-frame.jpg"
          className="object-cover object-center h-full w-full"
        >
          <source src="/sarah-g-preview-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
