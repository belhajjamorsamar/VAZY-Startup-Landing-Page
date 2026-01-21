"use client"

import { Globe, QrCode, Bot, Zap, Smartphone, MessageSquare, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Sites Web Modernes",
    description: "Sites responsives et optimisés pour cafés, restaurants et commerces locaux.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: QrCode,
    title: "Menus Digitaux",
    description: "Menus interactifs accessibles par QR code avec mise à jour en temps réel.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Bot,
    title: "Agents IA",
    description: "Chatbots intelligents pour automatiser les réponses et gérer les réservations.",
    color: "from-primary/20 to-orange-500/20",
  },
  {
    icon: Zap,
    title: "Automatisation",
    description: "Automatisez vos processus métier : commandes, notifications et marketing.",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Solutions mobiles sur mesure pour fidélisation et commandes en ligne.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business",
    description: "Intégration WhatsApp avec bot IA pour gérer automatiquement vos demandes.",
    color: "from-green-500/20 to-teal-500/20",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Nos Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Des solutions digitales <span className="text-gradient">complètes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            De la création de site web à l&apos;intégration d&apos;agents IA, nous accompagnons votre transformation
            digitale de A à Z.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative glass-card rounded-3xl p-8 hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden ${
                index === 0 || index === 3 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Gradient background on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:glow-primary transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-primary" />
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
