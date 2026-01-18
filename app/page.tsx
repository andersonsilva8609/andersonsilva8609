"use client"

import Link from "next/link"
import { Phone, MapPin, Clock, Wrench, Shield, Star, Hammer, Sparkles, Car } from "lucide-react" // Changed Vacuum-Cleaner to Sparkles
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import PhotoGallery from "@/components/portfolio/photo-gallery"
import Reviews from "@/components/reviews"
import Image from "next/image"
import QuoteDialog from "@/components/quote-dialog"
import { useState } from "react"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Home() {
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black">
        <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/funi-0H9cKrSF2FihSYD6X8t4cFNL5LEdRg.png"
                alt="Funilaria VandÃ£o 2"
                width={300}
                height={300}
                className="w-auto h-auto mb-8"
                priority
              />
            </Link>
          <nav className="hidden md:flex gap-6">
            <a
              href="#servicos"
              className="text-sm font-medium text-white hover:text-blue-400 scroll-smooth"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Serviços
            </a>
            <a
              href="#galeria"
              className="text-sm font-medium text-white hover:text-blue-400 scroll-smooth"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Galeria
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-white hover:text-blue-400 scroll-smooth"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contato
            </a>
          </nav>
          <Button variant="outline" className="bg-gray-200 text-black hover:bg-gray-300 border-gray-200" asChild>
            <Link href="tel:+5511975824790">
              <Phone className="mr-2 h-4 w-4" />
              Ligar Agora
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black">
          <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center">
           <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Original%20sem%20n%C3%BAmero-7sLmXz0UStPkde2aWN5Y6vtc14ZmSE.png"
                  alt="Funilaria VandÃ£o"
                  width={180}
                  height={80}
                  className="h-12 w-auto"
                />
              </Link>  
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Qualidade e Excelência em Funilaria
            </h1>
            <p className="max-w-[700px] text-gray-400 md:text-xl">
              Especialistas em reparação automotiva, pintura e funilaria. Mais de 20 anos de experiência devolvendo a
              originalidade do seu veículo.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button
                className="bg-blue-600 text-white hover:bg-blue-700"
                size="lg"
                onClick={() => setQuoteDialogOpen(true)}
              >
                Solicitar Orçamento
              </Button>
              <Button
                variant="outline"
                className="bg-gray-200 text-black hover:bg-gray-300 border-gray-200"
                size="lg"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("galeria")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Ver Trabalhos
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="bg-black py-16">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Nossos Serviços
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Oferecemos uma ampla gama de serviços para manter seu veículo em perfeito estado
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-black border border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Wrench className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-white">Funilaria</h3>
                      <p className="text-sm text-gray-400">
                        Reparação de lataria com técnicas modernas e acabamento impecável
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black border border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Shield className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-white">Pintura Automotiva</h3>
                      <p className="text-sm text-gray-400">
                        Pintura de alta qualidade com garantia de cor e acabamento
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black border border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Star className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-white">Polimento profissional</h3>
                      <p className="text-sm text-gray-400">Recuperação do brilho original da pintura do seu veículo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black border border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Car className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-white">Reparo em para-choque</h3>
                      <p className="text-sm text-gray-400">
                        Reparo ou substituição causado por batidas, quebras e/ou riscos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black border border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Hammer className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-white">Martelinho de ouro</h3>
                      <p className="text-sm text-gray-400">
                        Recupera sem danificar a pintura, mantendo a originalidade do veículo
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black border border-white/10">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <Sparkles className="h-8 w-8 text-blue-400" />
                    <div>
                      <h3 className="font-semibold text-white">Higienização interna</h3>
                      <p className="text-sm text-gray-400">
                        O procedimento realça a cor dos estofamentos, carpetes, teto, forros de porta e porta-malas
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeria" className="bg-black py-16">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Galeria de Trabalhos
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Confira alguns dos nossos trabalhos realizados
              </p>
            </div>
            <PhotoGallery />
          </div>
        </section>

        {/* Reviews Section */}
        <section id="avaliacoes" className="bg-black py-16 border-t border-white/10">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                O Que Nossos Clientes Dizem
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Veja as avaliações de quem já confiou no nosso trabalho
              </p>
            </div>
            <Reviews />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="bg-black py-16">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter text-white">Entre em Contato</h2>
                <p className="text-gray-400">
                  Estamos prontos para atender você e seu veículo com a qualidade que você merece.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <a href="tel:+5511975824790" className="text-gray-400 hover:text-white">
                      (11) 97582-4790
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-400">Av. Katsutoshi Naito, 1338 - Cidade Boa Vista, Suzano - SP</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-400">
                      Segunda à Sexta: 9h às 17h
                      <br />
                      Sábado: 8h às 13h
                    </span>
                  </div>
                </div>
                <div className="rounded-lg border border-white/10 bg-black p-8">
                  <iframe
                    title="Localização"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7858847605867!2d-46.3080682!3d-23.504220500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7ba4eee9124b%3A0xef6b4b71a97d3b9!2sFunilaria%20Vand%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1740232238259!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="container py-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo-20original-20sem-20n-c3-bamero.png"
                  alt="Funilaria Vandão"
                  width={180}
                  height={80}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="mt-4 text-sm text-gray-400">Qualidade e excelência em funilaria e pintura automotiva.</p>
            </div>
            <div className="grid gap-2 text-sm">
              <p className="font-semibold text-white">Horário de Funcionamento</p>
              <p className="text-gray-400">Segunda à Sexta: 9h às 17h</p>
              <p className="text-gray-400">Sábado: 8h às 13h</p>
              <p className="text-gray-400">Domingo: Fechado</p>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Funilaria Vandão. Todos os direitos reservados.
          </div>
        </div>
      </footer>
      <WhatsAppButton />
      <QuoteDialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen} />
    </div>
  )
}
