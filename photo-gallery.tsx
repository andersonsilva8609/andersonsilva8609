"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PhotoGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const photos = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-xi6W4A1Z4wpWEd0Ad1co87vWCHmkUF.jpeg",
      alt: "Dano na lateral traseira do Honda CR-V prata - Antes do reparo",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-PBF5NABadGPb6XrJHEsvdNv3YmhS7s.jpeg",
      alt: "Dano na lateral traseira do Honda CR-V prata - Ângulo diferente",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.jpg-3fK2kpqHAH7OKiu23sdLhMURiM50VB.jpeg",
      alt: "Mercedes-Benz CLA 200 branco - Antes do polimento",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.jpg-bQzahgRtIXk9Ib4uCO9qfPb5gVZkgz.jpeg",
      alt: "Mercedes-Benz CLA 200 branco - Após polimento e acabamento",
    },
    {
      id: 5,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.jpg-fU3LcKrCLSq1kwNNRfoCRMkp44Tpxs.jpeg",
      alt: "Volkswagen Gol clássico prata com rodas personalizadas - Restauração completa",
    },
    {
      id: 6,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-UFyNzdG1JRsJ86mVwXMYjTpimljpOl.jpeg",
      alt: "Detalhe da lateral do Volkswagen Gol mostrando a qualidade da pintura",
    },
  ]

  const handlePrevious = () => {
    setSelectedImageIndex((current) => (current !== null ? (current > 0 ? current - 1 : photos.length - 1) : null))
  }

  const handleNext = () => {
    setSelectedImageIndex((current) => (current !== null ? (current < photos.length - 1 ? current + 1 : 0) : null))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      handlePrevious()
    } else if (e.key === "ArrowRight") {
      handleNext()
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImageIndex(index)}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={600}
              height={400}
              className="aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      <Dialog open={selectedImageIndex !== null} onOpenChange={() => setSelectedImageIndex(null)}>
        <DialogContent className="max-w-3xl p-0 bg-black/95 border-none" onKeyDown={handleKeyDown}>
          {selectedImageIndex !== null && (
            <div className="relative">
              <Image
                src={photos[selectedImageIndex].src || "/placeholder.svg"}
                alt={photos[selectedImageIndex].alt}
                width={1200}
                height={800}
                className="w-full rounded-lg object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/50 border-white/10 text-white hover:bg-black/75 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePrevious()
                  }}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Imagem anterior</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-black/50 border-white/10 text-white hover:bg-black/75 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNext()
                  }}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Próxima imagem</span>
                </Button>
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-sm">
                  {selectedImageIndex + 1} de {photos.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
