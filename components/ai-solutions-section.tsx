"use client"

import { Brain, MessageSquareText, TrendingUp, ShoppingCart, Cpu, ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const aiSolutions = [
  {
    icon: ShoppingCart,
    title: "Agent IA Commandes",
    description: "Automatisez la prise de commandes via WhatsApp, Facebook ou votre site web.",
    features: ["Multilingue AR/FR/EN", "Disponible 24/7", "Intégration POS"],
    gradient: "from-primary via-orange-400 to-amber-400",
  },
  {
    icon: MessageSquareText,
    title: "Assistant Client IA",
    description: "Un assistant virtuel qui répond instantanément aux questions de vos clients.",
    features: ["Réponses instantanées", "FAQ automatique", "Transfert humain"],
    gradient: "from-cyan-400 via-blue-400 to-indigo-400",
  },
  {
    icon: TrendingUp,
    title: "IA Marketing",
    description: "Campagnes marketing personnalisées et programmes de fidélité intelligents.",
    features: ["Upselling automatique", "Promotions ciblées", "Analytics avancés"],
    gradient: "from-green-400 via-emerald-400 to-teal-400",
  },
]

export function AISolutionsSection() {
  return (
    <section id="solutions-ia" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] animate-float-slow animation-delay-500" />
      </div>

      {/* Rotating decoration */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 border border-primary/20 rounded-full animate-rotate-slow" />
          <div
            className="absolute inset-2 border border-primary/10 rounded-full animate-rotate-slow"
            style={{ animationDirection: "reverse" }}
          />
          <div className="absolute inset-4 border border-dashed border-primary/20 rounded-full animate-rotate-slow" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-5 py-3 glass rounded-full mb-8">
            <div className="relative">
              <Brain className="w-5 h-5 text-primary" />
              <div className="absolute inset-0 bg-primary/30 blur-lg animate-pulse" />
            </div>
            <span className="text-sm font-medium text-gradient">Intelligence Artificielle</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            L&apos;IA au cœur de <span className="text-gradient">votre business</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Nos agents IA révolutionnent la gestion de votre entreprise. Automatisation, personnalisation et efficacité
            garanties.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {aiSolutions.map((solution, index) => (
            <div key={solution.title} className="group relative">
              {/* Card glow effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${solution.gradient} rounded-[28px] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
              />

              <div className="relative glass-card rounded-3xl p-8 h-full hover:border-primary/30 transition-all duration-300">
                {/* Animated icon container */}
                <div className="relative mb-8">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-300`}
                  />
                  <div className="relative w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{solution.description}</p>

                {/* Features with check icons */}
                <ul className="space-y-3">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="relative glass-card rounded-3xl p-10 overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 animate-gradient" />

            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 blur-2xl animate-pulse" />
                  <div className="relative w-20 h-20 glass rounded-2xl flex items-center justify-center glow-primary">
                    <Cpu className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Prêt à automatiser votre business ?</h3>
                  <p className="text-muted-foreground">Nos experts IA vous accompagnent dans votre transformation.</p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary group shrink-0"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Démarrer maintenant
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
