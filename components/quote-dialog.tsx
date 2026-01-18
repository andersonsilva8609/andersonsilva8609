"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import QuoteForm from "./quote-form"

interface QuoteDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function QuoteDialog({ open, onOpenChange }: QuoteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-black border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Solicitar Orçamento</DialogTitle>
        </DialogHeader>
        <QuoteForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  )
}
