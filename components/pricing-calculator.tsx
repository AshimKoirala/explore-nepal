"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, DollarSign } from "lucide-react"
import { type Track, calculateTotalPrice, formatPrice } from "@/lib/tracks-data"

interface PricingCalculatorProps {
  track: Track
}

export function PricingCalculator({ track }: PricingCalculatorProps) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleOptionChange = (option: string, checked: boolean) => {
    if (checked) {
      setSelectedOptions([...selectedOptions, option])
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== option))
    }
  }

  const totalPrice = calculateTotalPrice(track.id, selectedOptions)
  const additionalCost = totalPrice - track.basePrice

  return (
    <Card className="bg-[#3a3a3a] border-[#ff6b35]/20 p-6">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Calculator className="w-6 h-6 mr-2 text-[#ff6b35]" />
        Pricing Calculator
      </h3>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center p-4 bg-[#2d2d2d] rounded-lg">
          <span className="text-white font-semibold">Base Price</span>
          <span className="text-[#ff6b35] font-bold text-xl">{formatPrice(track.basePrice)}</span>
        </div>

        <div className="space-y-3">
          <h4 className="text-white font-semibold">Additional Options:</h4>
          {track.pricing.additionalCosts.map((option, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-[#2d2d2d] rounded">
              <Checkbox
                id={option.item}
                checked={selectedOptions.includes(option.item)}
                onCheckedChange={(checked) => handleOptionChange(option.item, checked as boolean)}
                className="border-[#ff6b35] data-[state=checked]:bg-[#ff6b35]"
              />
              <label htmlFor={option.item} className="flex-1 text-[#e5e7eb] cursor-pointer">
                {option.item}
              </label>
              <span className="text-[#ff6b35] font-semibold">{option.cost}</span>
            </div>
          ))}
        </div>

        {additionalCost > 0 && (
          <div className="flex justify-between items-center p-4 bg-[#2d2d2d] rounded-lg border border-[#ff6b35]/30">
            <span className="text-white font-semibold">Additional Options</span>
            <span className="text-[#ff6b35] font-bold">+{formatPrice(additionalCost)}</span>
          </div>
        )}

        <div className="flex justify-between items-center p-4 bg-[#ff6b35]/10 border border-[#ff6b35] rounded-lg">
          <span className="text-white font-bold text-lg">Total Price</span>
          <span className="text-[#ff6b35] font-black text-2xl">{formatPrice(totalPrice)}</span>
        </div>
      </div>

      <div className="space-y-3">
        <Button className="w-full bg-[#ff6b35] hover:bg-[#ff8c42] text-white font-bold py-3">
          <DollarSign className="w-4 h-4 mr-2" />
          GET DETAILED QUOTE
        </Button>
        <Button
          variant="outline"
          className="w-full border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white font-bold bg-transparent"
        >
          SAVE CALCULATION
        </Button>
      </div>

      <div className="mt-6 p-4 bg-[#2d2d2d] rounded-lg">
        <p className="text-[#e5e7eb] text-sm">
          <strong>Note:</strong> Prices are per person and subject to change based on group size, season, and specific
          requirements. Final pricing will be confirmed during consultation.
        </p>
      </div>
    </Card>
  )
}
