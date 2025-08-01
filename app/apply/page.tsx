"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, Shield, FileText, Camera, CreditCard, MapPin, Clock, DollarSign, ArrowRight, CheckCircle2, User, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
    // Asset Information
    assetCategory: "",
    assetBrand: "",
    assetModel: "",
    assetCondition: "",
    estimatedValue: "",
    assetDescription: "",
    
    // Legal Acknowledgments
    saleAcknowledgment: false,
    noLiabilityAcknowledgment: false,
    marketRiskAcknowledgment: false,
    kycConsent: false,
    termsAgreement: false
  })

  const fundingByCategory = [
    {
      category: "Luxury Watches",
      maxFunding: "$25,000",
      buybackAmount: "$27,500",
      examples: "Rolex, Patek Philippe, Audemars Piguet",
      icon: "⌚"
    },
    {
      category: "Fine Jewelry", 
      maxFunding: "$15,000",
      buybackAmount: "$16,500",
      examples: "Diamonds, precious metals, designer pieces",
      icon: "💎"
    },
    {
      category: "Designer Handbags",
      maxFunding: "$10,000", 
      buybackAmount: "$11,000",
      examples: "Hermès, Chanel, Louis Vuitton, Gucci",
      icon: "👜"
    },
    {
      category: "Premium Electronics",
      maxFunding: "$5,000",
      buybackAmount: "$5,500", 
      examples: "Latest phones, laptops, cameras",
      icon: "📱"
    },
    {
      category: "Musical Instruments",
      maxFunding: "$8,000",
      buybackAmount: "$8,800",
      examples: "Guitars, violins, professional equipment", 
      icon: "🎸"
    },
    {
      category: "Photography Equipment",
      maxFunding: "$7,500",
      buybackAmount: "$8,250",
      examples: "Canon, Nikon, Leica, professional lenses",
      icon: "📷"
    }
  ]

  const eligibleStates = [
    { code: "TX", name: "Texas", status: "Active" },
    { code: "FL", name: "Florida", status: "Active" },
    { code: "GA", name: "Georgia", status: "Active" },
    { code: "AZ", name: "Arizona", status: "Active" },
    { code: "UT", name: "Utah", status: "Active" },
    { code: "AL", name: "Alabama", status: "Active" },
    { code: "SC", name: "South Carolina", status: "Active" },
    { code: "CO", name: "Colorado", status: "Limited" },
    { code: "NV", name: "Nevada", status: "Limited" }
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(3)
  }

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Asset Sale Application</h1>
            <p className="text-xl text-gray-600 mb-4">
              Get an instant quote for your luxury asset
            </p>
            <div className="flex justify-center gap-3">
              <Badge className="bg-green-600 text-white px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Licensed & Insured
              </Badge>
              <Badge variant="outline" className="border-blue-500 text-blue-700 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                24hr Processing
              </Badge>
            </div>
          </div>

          {/* Step 1: Basic Information Form */}
          <form onSubmit={handleStep1Submit} className="space-y-8">
            {/* Personal Information */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <CardTitle className="flex items-center text-white">
                  <User className="w-6 h-6 mr-3" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Select onValueChange={(value) => handleInputChange('state', value)} required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {eligibleStates.map((state) => (
                          <SelectItem key={state.code} value={state.code}>
                            {state.name} ({state.code})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Asset Information */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <CardTitle className="flex items-center text-white">
                  <DollarSign className="w-6 h-6 mr-3" />
                  Asset Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="assetCategory">Asset Category *</Label>
                  <Select onValueChange={(value) => handleInputChange('assetCategory', value)} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select asset category" />
                    </SelectTrigger>
                    <SelectContent>
                      {fundingByCategory.map((category) => (
                        <SelectItem key={category.category} value={category.category}>
                          {category.icon} {category.category} (up to {category.maxFunding})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="assetBrand">Brand/Manufacturer *</Label>
                    <Input
                      id="assetBrand"
                      required
                      value={formData.assetBrand}
                      onChange={(e) => handleInputChange('assetBrand', e.target.value)}
                      className="mt-2"
                      placeholder="e.g. Rolex, Canon, Hermès"
                    />
                  </div>
                  <div>
                    <Label htmlFor="assetModel">Model/Name *</Label>
                    <Input
                      id="assetModel"
                      required
                      value={formData.assetModel}
                      onChange={(e) => handleInputChange('assetModel', e.target.value)}
                      className="mt-2"
                      placeholder="e.g. Submariner, 5D Mark IV, Birkin"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="assetCondition">Condition *</Label>
                    <Select onValueChange={(value) => handleInputChange('assetCondition', value)} required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New/Mint</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="very-good">Very Good</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="estimatedValue">Estimated Value *</Label>
                    <Input
                      id="estimatedValue"
                      required
                      value={formData.estimatedValue}
                      onChange={(e) => handleInputChange('estimatedValue', e.target.value)}
                      className="mt-2"
                      placeholder="$0"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="assetDescription">Detailed Description</Label>
                  <Textarea
                    id="assetDescription"
                    value={formData.assetDescription}
                    onChange={(e) => handleInputChange('assetDescription', e.target.value)}
                    className="mt-2"
                    rows={4}
                    placeholder="Include any relevant details like serial numbers, purchase date, included accessories, etc."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-12 py-6 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Continue to Legal Review
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Next: Review legal terms and complete application
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }

  if (step === 2) {
    const selectedCategory = fundingByCategory.find(cat => cat.category === formData.assetCategory)
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto py-16 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Legal Terms & Disclaimers</h1>
            <p className="text-xl text-gray-600 mb-4">
              Please review and acknowledge the following legal terms
            </p>
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-green-800 font-semibold">
                Asset: {formData.assetBrand} {formData.assetModel}
              </p>
              <p className="text-green-700 text-sm">
                Max Funding: {selectedCategory?.maxFunding} | Buyback: {selectedCategory?.buybackAmount}
              </p>
            </div>
          </div>

          <form onSubmit={handleFinalSubmit} className="space-y-8">
            {/* Legal Disclaimer */}
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">IMPORTANT: This is an Asset Sale, Not a Loan</h3>
                  <ul className="text-amber-800 space-y-1 list-disc list-inside text-sm">
                    <li>We purchase your asset with full title transfer</li>
                    <li>You receive immediate cash payment</li>
                    <li>Optional 90-day repurchase right (no obligation)</li>
                    <li>No credit checks, no personal liability</li>
                    <li>Available in select states only</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Legal Acknowledgments */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="text-white">Required Legal Acknowledgments</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-5 h-5" 
                      required 
                      checked={formData.saleAcknowledgment}
                      onChange={(e) => handleInputChange('saleAcknowledgment', e.target.checked)}
                    />
                    <label className="text-gray-700">
                      I acknowledge this is a <strong>sale transaction with optional repurchase rights</strong>, not a loan. 
                      I have no obligation to repurchase my asset.
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-5 h-5" 
                      required 
                      checked={formData.noLiabilityAcknowledgment}
                      onChange={(e) => handleInputChange('noLiabilityAcknowledgment', e.target.checked)}
                    />
                    <label className="text-gray-700">
                      I understand that <strong>failure to exercise the repurchase option creates no debt or liability</strong> 
                      and will not affect my credit score.
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-5 h-5" 
                      required 
                      checked={formData.marketRiskAcknowledgment}
                      onChange={(e) => handleInputChange('marketRiskAcknowledgment', e.target.checked)}
                    />
                    <label className="text-gray-700">
                      I acknowledge that Vaultly will assume <strong>full market risk</strong> for my asset after the 
                      repurchase deadline expires.
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-5 h-5" 
                      required 
                      checked={formData.kycConsent}
                      onChange={(e) => handleInputChange('kycConsent', e.target.checked)}
                    />
                    <label className="text-gray-700">
                      I consent to <strong>identity verification, OFAC screening</strong>, and reporting to law enforcement 
                      databases as required by law.
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-5 h-5" 
                      required 
                      checked={formData.termsAgreement}
                      onChange={(e) => handleInputChange('termsAgreement', e.target.checked)}
                    />
                    <label className="text-gray-700">
                      I have read and agree to the <Link href="/legal/terms" className="text-blue-600 underline">Terms and Conditions</Link> 
                      and <Link href="/legal/privacy" className="text-blue-600 underline">Privacy Policy</Link>.
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center space-y-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(1)}
                className="mr-4"
              >
                Back to Edit Information
              </Button>
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-12 py-6 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Submit Application
                <CheckCircle2 className="w-6 h-6 ml-3" />
              </Button>
              <p className="text-sm text-gray-500">
                By submitting, you agree to all terms and acknowledge this is a sale transaction
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }

  // Step 3: Success Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto py-24 max-w-2xl text-center">
        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Application Submitted Successfully!</h1>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="font-bold text-green-800 mb-4">Next Steps:</h3>
            <ul className="text-green-700 space-y-2 text-left">
              <li>• You'll receive an email confirmation within 5 minutes</li>
              <li>• Our team will contact you within 24 hours to schedule asset inspection</li>
              <li>• Identity verification (KYC) will be completed during your call</li>
              <li>• Purchase offer will be provided within 48 hours of inspection</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Application ID:</strong><br/>
              VLT-{Date.now().toString().slice(-8)}
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Asset:</strong><br/>
              {formData.assetBrand} {formData.assetModel}
            </div>
          </div>

          <div className="space-y-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-8 py-4"
            >
              <Link href="/">Return to Homepage</Link>
            </Button>
            
            <p className="text-gray-600">
              Questions? Call us at <strong>(555) 123-VAULT</strong> or email <strong>support@vaultly.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
