"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { portfolioImages } from "./data"

export default function PhotoGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const handlePrevious = () => {
    setSelectedImageIndex((current) =>
      current !== null ? (current > 0 ? current - 1 : portfolioImages.length - 1) : null,
    )
  }

  const handleNext = () => {
    setSelectedImageIndex((current) =>
      current !== null ? (current < portfolioImages.length - 1 ? current + 1 : 0) : null,
    )
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
        {portfolioImages.map((photo, index) => (
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
                src={portfolioImages[selectedImageIndex].src || "/placeholder.svg"}
                alt={portfolioImages[selectedImageIndex].alt}
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
                  {selectedImageIndex + 1} de {portfolioImages.length}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
