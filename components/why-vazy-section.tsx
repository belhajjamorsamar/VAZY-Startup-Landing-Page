"use client"

import { Lightbulb, Rocket, Heart, Shield, Quote } from "lucide-react"

const reasons = [
  {
    icon: Lightbulb,
    title: "Simplicité",
    description: "Des solutions pensées pour être faciles à utiliser, même sans compétences techniques.",
    stat: "100%",
    statLabel: "Intuitive",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Technologies de pointe et IA de dernière génération pour propulser votre business.",
    stat: "2024",
    statLabel: "Tech Stack",
  },
  {
    icon: Heart,
    title: "Proximité",
    description: "Une équipe tunisienne qui comprend vos besoins locaux et votre marché.",
    stat: "100%",
    statLabel: "Local",
  },
  {
    icon: Shield,
    title: "IA Accessible",
    description: "L'intelligence artificielle n'est plus réservée aux grandes entreprises.",
    stat: "50+",
    statLabel: "Clients",
  },
]

export function WhyVazySection() {
  return (
    <section id="pourquoi-vazy" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Pourquoi VAZY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Votre partenaire digital <span className="text-gradient">de confiance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Fondée par Samar Bel Hajj Amor, VAZY est née de la volonté de démocratiser le digital et l&apos;IA pour les
            entrepreneurs tunisiens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group relative glass-card rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:glow-primary transition-all duration-300">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gradient">{reason.stat}</p>
                      <p className="text-xs text-muted-foreground">{reason.statLabel}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 relative">
          <div className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

            <div className="relative">
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              <blockquote className="text-2xl sm:text-3xl md:text-4xl text-foreground font-medium leading-relaxed mb-8">
                <span className="text-gradient">&quot;VAZY aide les petits business à grandir</span> grâce au digital et
                à l&apos;intelligence artificielle.&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-primary font-bold text-lg">
                  S
                </div>
                <div className="text-left">
                  <p className="text-foreground font-semibold">Samar Bel Hajj Amor</p>
                  <p className="text-sm text-primary">Fondatrice de VAZY</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
