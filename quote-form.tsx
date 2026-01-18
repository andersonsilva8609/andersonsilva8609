"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Camera, Loader2 } from "lucide-react"

export default function QuoteForm() {
  const [description, setDescription] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Máscara para telefone
  const handlePhoneChange = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    let formatted = numbers
    if (numbers.length > 0) {
      formatted = `(${numbers.slice(0, 2)}`
      if (numbers.length > 2) {
        formatted += `) ${numbers.slice(2, 7)}`
        if (numbers.length > 7) {
          formatted += `-${numbers.slice(7, 11)}`
        }
      }
    }
    setPhone(formatted)
  }

  // Validação e manipulação de arquivos
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const validFiles: File[] = []
      Array.from(files).forEach((file) => {
        // Verifica se o arquivo é menor que 2MB
        if (file.size <= 2 * 1024 * 1024) {
          validFiles.push(file)
        } else {
          alert(`O arquivo ${file.name} excede o limite de 2MB`)
        }
      })
      setSelectedFiles(validFiles)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simula envio do formulário
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      alert("Orçamento enviado com sucesso!")
      // Limpa o formulário
      e.currentTarget.reset()
      setDescription("")
      setPhone("")
      setSelectedFiles([])
    } catch (error) {
      alert("Erro ao enviar orçamento. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          name="name"
          placeholder="Digite seu nome completo"
          required
          className="bg-black border-white/10 text-white placeholder:text-gray-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefone (WhatsApp)</Label>
        <Input
          id="phone"
          name="phone"
          placeholder="(00) 00000-0000"
          value={phone}
          onChange={(e) => handlePhoneChange(e.target.value)}
          required
          maxLength={15}
          className="bg-black border-white/10 text-white placeholder:text-gray-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="car">Marca e Modelo do Carro</Label>
        <Input
          id="car"
          name="car"
          placeholder="Ex: Fiat Palio 2015"
          required
          className="bg-black border-white/10 text-white placeholder:text-gray-500"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="description">Descrição do Reparo</Label>
          <span className="text-sm text-gray-400">{description.length}/150</span>
        </div>
        <Textarea
          id="description"
          name="description"
          placeholder="Descreva o serviço necessário"
          value={description}
          onChange={(e) => setDescription(e.target.value.slice(0, 150))}
          required
          className="bg-black border-white/10 text-white placeholder:text-gray-500 min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label>Fotos do Veículo</Label>
        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            className="bg-black border-white/10 text-white hover:bg-gray-900"
            onClick={() => fileInputRef.current?.click()}
          >
            <Camera className="mr-2 h-4 w-4" />
            Anexar Fotos
          </Button>
          {selectedFiles.length > 0 && (
            <span className="text-sm text-gray-400">
              {selectedFiles.length} {selectedFiles.length === 1 ? "arquivo selecionado" : "arquivos selecionados"}
            </span>
          )}
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
        <p className="text-sm text-gray-400">Máximo 2MB por arquivo</p>
      </div>

      <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Solicitar Orçamento"
        )}
      </Button>
    </form>
  )
}
