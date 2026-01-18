"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface Review {
  id: number
  name: string
  rating: number
  text: string
  date: string
  avatar?: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Carlos Eduardo",
    rating: 5,
    text: "Excelente trabalho! Levei meu carro com vários amassados e voltou como novo. Recomendo demais a Funilaria Vandão!",
    date: "2 semanas atrás",
  },
  {
    id: 2,
    name: "Maria Silva",
    rating: 5,
    text: "Profissionais muito competentes e atenciosos. O serviço de pintura ficou perfeito, melhor do que eu esperava.",
    date: "1 mês atrás",
  },
  {
    id: 3,
    name: "João Pedro Santos",
    rating: 5,
    text: "Serviço impecável! O Vandão é muito honesto e o preço foi justo. Meu carro ficou como saiu da concessionária.",
    date: "3 semanas atrás",
  },
  {
    id: 4,
    name: "Ana Beatriz",
    rating: 5,
    text: "Atendimento de primeira qualidade. Fizeram o orçamento rápido e entregaram no prazo combinado. Super recomendo!",
    date: "1 mês atrás",
  },
  {
    id: 5,
    name: "Roberto Almeida",
    rating: 5,
    text: "Já é a terceira vez que levo meu carro lá e sempre fico satisfeito. Trabalho de qualidade e preço honesto.",
    date: "2 meses atrás",
  },
  {
    id: 6,
    name: "Fernanda Costa",
    rating: 5,
    text: "O polimento ficou incrível! Meu carro estava muito judiado e agora parece novo. Muito obrigada pelo excelente trabalho!",
    date: "3 semanas atrás",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-600 text-gray-600"}`}
        />
      ))}
    </div>
  )
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export default function Reviews() {
  return (
    <div className="space-y-8">
      {/* Google Rating Summary */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center gap-2">
          <Image
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            width={92}
            height={30}
            className="h-6 w-auto"
          />
          <span className="text-gray-400">Avaliações</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold text-white">5.0</span>
          <div className="flex flex-col">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-400">Baseado em {reviews.length} avaliações</span>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Card key={review.id} className="bg-zinc-900 border border-white/10 hover:border-white/20 transition-colors">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold text-sm">
                    {getInitials(review.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <Image
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
              <StarRating rating={review.rating} />
              <p className="text-gray-300 text-sm leading-relaxed">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA to Google Reviews */}
      <div className="text-center">
        <a
          href="https://www.google.com/search?q=Funilaria+Vand%C3%A3o&rlz=1C1ONGR_pt-BRBR1060BR1060&oq=Funilaria+Vand%C3%A3o&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg8MgYIAhBFGDwyBggDEEUYPdIBCDQyNTJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x94ce7ba4eee9124b:0xef6b4b71a97d3b9,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>Ver todas as avaliações no Google</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}
