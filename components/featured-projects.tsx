"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ChevronDown } from "lucide-react"

export function FeaturedProjects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const projects = [
    {
      name: "Shamba Network",
      location: "Kenya",
      funding: "$110,000+",
      rounds: 4,
      description:
        "Building decentralized monitoring, reporting, and verification (dMRV) tools—turning satellite data and blockchain into financial lifelines for 500M smallholder farmers.",
      impact:
        "Could verify 50M+ tons of CO₂ sequestration annually, unlocking the $10B voluntary carbon market for smallholders.",
      tags: ["dMRV", "Carbon Markets", "Smallholder Farmers"],
    },
    {
      name: "Solar Foundation",
      location: "US/Africa",
      funding: "$58,775",
      rounds: 5,
      description:
        "Deploying solar microgrids and appliances across Nigeria, Tanzania, Uganda, and Kenya—turning sunlight into financial freedom while slashing emissions.",
      impact:
        "Built 10+ solar projects, distributed 400+ solar lanterns, offsetting 12+ tons of CO₂ yearly per project.",
      tags: ["Solar Energy", "Energy Access", "Off-Grid"],
    },
    {
      name: "GainForest",
      location: "Switzerland",
      funding: "$29,900+",
      rounds: 11,
      description:
        "Using AI and blockchain to turn Indigenous stewards into verified conservationists, protecting 80% of global biodiversity.",
      impact: "Built AI tools to digitize Indigenous ecological knowledge, now used in COP negotiations.",
      tags: ["AI", "Indigenous Rights", "Conservation"],
    },
    {
      name: "Atlantis",
      location: "India",
      funding: "$150,000+",
      rounds: 13,
      description:
        'Creating a peer-to-peer impact network—the "GitHub for climate impact" that tracks and incentivizes real-world actions.',
      impact: "Could connect 10M+ grassroots climate efforts to funding by 2030, bridging the $4T climate funding gap.",
      tags: ["Impact Tracking", "Web3", "Microloans"],
    },
    {
      name: "Kokonut Network",
      location: "Dominican Republic",
      funding: "$55,249",
      rounds: 7,
      description:
        "Combining syntropic agroforestry with decentralized governance to rebuild food forests and economies from the ground up.",
      impact: "Sequester 5x more carbon than monocultures, generating $3,200+/hectare annual income.",
      tags: ["Agroforestry", "ReFi", "Food Security"],
    },
    {
      name: "Blue Energy Reef",
      location: "Indonesia",
      funding: "$92,000",
      rounds: 1,
      description:
        "Merging Biorock reef restoration with ocean-powered renewable energy, creating resilient reefs that grow 10x faster.",
      impact: "Reefs sequester 900M tons of CO₂ yearly, buffer 95% of wave energy, support $30B in economic value.",
      tags: ["Ocean", "Coral Reefs", "Blue Energy"],
    },
    {
      name: "Astral Protocol",
      location: "UK",
      funding: "$45,000+",
      rounds: 10,
      description:
        "Pioneering the decentralized geospatial web—building privacy-focused alternatives to Google Maps with location data as a public good.",
      impact: "Helping verify reforestation projects and validate satellite data for climate scientists.",
      tags: ["Geospatial", "Privacy", "Climate Monitoring"],
    },
    {
      name: "Solarpunk Nomads",
      location: "Italy",
      funding: "$49,000",
      rounds: 8,
      description:
        "Turning climate adaptation into a mobile, joyful movement—proving that zero-emission living can be scalable and educational.",
      impact: "Built 4 zero-carbon vehicles, led 10+ workshops across 3 continents.",
      tags: ["Mobility", "Education", "Zero-Carbon"],
    },
    {
      name: "Project Name",
      location: "Location",
      funding: "$0",
      rounds: 0,
      description: "Project description coming soon.",
      impact: "Impact details to be added.",
      tags: ["Tag 1", "Tag 2"],
    },
    {
      name: "Project Name",
      location: "Location",
      funding: "$0",
      rounds: 0,
      description: "Project description coming soon.",
      impact: "Impact details to be added.",
      tags: ["Tag 1", "Tag 2"],
    },
    {
      name: "Project Name",
      location: "Location",
      funding: "$0",
      rounds: 0,
      description: "Project description coming soon.",
      impact: "Impact details to be added.",
      tags: ["Tag 1", "Tag 2"],
    },
    {
      name: "Project Name",
      location: "Location",
      funding: "$0",
      rounds: 0,
      description: "Project description coming soon.",
      impact: "Impact details to be added.",
      tags: ["Tag 1", "Tag 2"],
    },
  ]

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-card/50 to-background">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Spotlighting innovative initiatives rewriting our climate future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => {
            const isExpanded = expandedProject === index

            return (
              <Card
                key={index}
                className={`p-4 bg-card border-primary/10 hover:border-primary/30 transition-all cursor-pointer ${
                  isExpanded ? "md:col-span-2 lg:col-span-3" : ""
                }`}
                onClick={() => toggleProject(index)}
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-1 truncate">{project.name}</h3>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {isExpanded && (
                    <div className="space-y-4 pt-2 border-t border-primary/10 animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Funding: </span>
                          <span className="font-mono font-semibold text-primary">{project.funding}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Rounds: </span>
                          <span className="font-mono font-semibold">{project.rounds}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed text-balance">
                        {project.description}
                      </p>

                      <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <p className="text-xs text-foreground/80 leading-relaxed text-balance">
                          <span className="font-semibold text-primary">Impact: </span>
                          {project.impact}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
