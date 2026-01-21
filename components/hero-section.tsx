"use client"

import { ArrowRight, Bot, Sparkles, Play, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,120,80,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,120,80,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Large gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px] animate-float-slow animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full mb-8 animate-fade-up group hover:border-primary/30 transition-colors cursor-default">
            <div className="relative">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/30 blur-md" />
            </div>
            <span className="text-sm text-foreground/80">Startup Tunisienne</span>
            <span className="w-1 h-1 bg-primary rounded-full" />
            <span className="text-sm text-primary font-medium">Innovation IA</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 animate-fade-up animation-delay-100">
            <span className="block text-foreground">Le digital et l&apos;IA</span>
            <span className="block text-gradient-shine mt-2">au service de ton business</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-up animation-delay-200 leading-relaxed">
            VAZY aide les cafés, restaurants et petits commerces à{" "}
            <span className="text-foreground font-medium">grandir</span> grâce au digital et à{" "}
            <span className="text-primary font-medium">l&apos;intelligence artificielle</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            <Button
              asChild
              size="lg"
              className="relative text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow group"
            >
              <Link href="#contact" className="flex items-center gap-3">
                <span>Démarrer mon projet</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 glass border-primary/20 hover:border-primary/40 hover:bg-primary/5 group bg-transparent"
            >
              <Link href="#services" className="flex items-center gap-3">
                <Play className="w-5 h-5 text-primary" />
                <span>Découvrir nos services</span>
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-20 max-w-3xl mx-auto animate-fade-up animation-delay-400">
            {[
              { value: "50+", label: "Clients satisfaits", icon: Star },
              { value: "100%", label: "Solutions sur mesure", icon: Sparkles },
              { value: "24/7", label: "Support IA", icon: Bot },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="relative p-6 glass-card rounded-2xl group hover:border-primary/30 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-2xl transition-colors duration-300" />
                <div className="relative">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-3 opacity-60" />
                  <p className="text-3xl sm:text-4xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-20 right-10 hidden xl:block animate-float">
          <div className="w-24 h-24 glass-card rounded-3xl flex items-center justify-center glow-primary">
            <Bot className="w-12 h-12 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-40 left-10 hidden xl:block animate-float animation-delay-300">
          <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-primary/70" />
          </div>
        </div>
        <div className="absolute top-1/3 left-20 hidden xl:block animate-float-slow animation-delay-500">
          <div className="w-3 h-3 bg-primary/60 rounded-full" />
        </div>
        <div className="absolute top-1/2 right-32 hidden xl:block animate-float-slow animation-delay-200">
          <div className="w-2 h-2 bg-primary/40 rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 glass rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
