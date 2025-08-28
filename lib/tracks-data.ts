export interface Track {
  id: string
  name: string
  location: string
  elevation: string
  duration: string
  price: string
  basePrice: number
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Extreme"
  season: string
  groupSize: string
  description: string
  highlights: string[]
  detailedDescription: string
  itinerary: Array<{
    day: string
    activity: string
    location: string
  }>
  pricing: {
    basePrice: number
    includes: string[]
    excludes: string[]
    additionalCosts: Array<{
      item: string
      cost: string
    }>
  }
  requirements: {
    experience: string[]
    training: string[]
    equipment: string[]
  }
  risks: string[]
  successRate: string
  bestMonths: string[]
  temperature: {
    summit: string
    basecamp: string
  }
}

export const tracksData: Record<string, Track> = {
  "everest-north": {
    id: "everest-north",
    name: "Mount Everest - North Ridge",
    location: "Tibet, China",
    elevation: "8,848m",
    duration: "65 days",
    price: "$85,000",
    basePrice: 85000,
    difficulty: "Extreme",
    season: "Apr - May",
    groupSize: "6-8 climbers",
    description: "The classic North Ridge route with military precision logistics and world-record holding guides.",
    highlights: ["Less crowded than South Col", "Historical significance", "Technical climbing challenges"],
    detailedDescription:
      "Mount Everest via the North Ridge represents the ultimate mountaineering challenge, approached with military precision and led by world record holders. This route offers a more technical and less crowded alternative to the South Col, with stunning views and historical significance dating back to the early British expeditions.",
    itinerary: [
      { day: "Days 1-5", activity: "Arrival in Kathmandu, fly to Lhasa, acclimatization", location: "Lhasa (3,650m)" },
      {
        day: "Days 6-12",
        activity: "Drive to Base Camp, establish camp, initial acclimatization",
        location: "Base Camp (5,150m)",
      },
      { day: "Days 13-25", activity: "Acclimatization rotations to Advanced Base Camp", location: "ABC (6,400m)" },
      { day: "Days 26-35", activity: "Establish higher camps, technical training", location: "Camp 1 (7,000m)" },
      { day: "Days 36-50", activity: "Weather window preparation, final acclimatization", location: "Various camps" },
      { day: "Days 51-60", activity: "Summit push window", location: "Summit (8,848m)" },
      { day: "Days 61-65", activity: "Descent, pack up, return to Kathmandu", location: "Return journey" },
    ],
    pricing: {
      basePrice: 85000,
      includes: [
        "All permits and fees",
        "Professional guide team (1:2 ratio)",
        "Base Camp and Advanced Base Camp setup",
        "All meals during expedition",
        "Group climbing equipment",
        "Satellite communication",
        "Medical support and evacuation insurance",
        "Airport transfers in Nepal/Tibet",
      ],
      excludes: [
        "International flights",
        "Personal climbing equipment",
        "Travel insurance",
        "Visa fees",
        "Personal expenses",
        "Tips for staff",
      ],
      additionalCosts: [
        { item: "Single tent supplement", cost: "$2,500" },
        { item: "Personal Sherpa", cost: "$8,000" },
        { item: "Oxygen (4 bottles)", cost: "$3,200" },
        { item: "Satellite phone rental", cost: "$800" },
      ],
    },
    requirements: {
      experience: [
        "Previous 7000m+ peak experience required",
        "Technical rock and ice climbing skills",
        "Multi-day expedition experience",
        "Wilderness first aid certification",
        "Excellent physical fitness",
      ],
      training: [
        "6-12 months structured training program",
        "Cardiovascular endurance base",
        "Strength training focus on legs/core",
        "High altitude acclimatization",
        "Technical skills practice",
      ],
      equipment: [
        "High-altitude mountaineering boots",
        "Down suit rated to -40°C",
        "Technical climbing harness",
        "Mountaineering helmet",
        "Complete layering system",
        "Personal climbing hardware",
      ],
    },
    risks: [
      "Extreme altitude and weather conditions",
      "Technical climbing sections",
      "Avalanche and rockfall danger",
      "Extended expedition duration",
      "Remote location with limited rescue options",
    ],
    successRate: "65%",
    bestMonths: ["April", "May"],
    temperature: {
      summit: "-15°C to -60°C",
      basecamp: "-5°C to -25°C",
    },
  },

  "k2-abruzzi": {
    id: "k2-abruzzi",
    name: "K2 - Abruzzi Spur",
    location: "Pakistan",
    elevation: "8,611m",
    duration: "60 days",
    price: "$75,000",
    basePrice: 75000,
    difficulty: "Extreme",
    season: "Jun - Aug",
    groupSize: "4-6 climbers",
    description: "The savage mountain demands respect. Elite leadership for the ultimate mountaineering challenge.",
    highlights: ["Most technical 8000m peak", "Elite guide ratio", "Military-grade safety protocols"],
    detailedDescription:
      "K2, the Savage Mountain, represents the pinnacle of technical mountaineering. More challenging than Everest, this expedition requires absolute commitment and is led by our most experienced military veteran guides with proven K2 summit experience.",
    itinerary: [
      { day: "Days 1-3", activity: "Arrive Islamabad, fly to Skardu, preparations", location: "Skardu (2,230m)" },
      { day: "Days 4-12", activity: "Trek to Base Camp via Baltoro Glacier", location: "Base Camp (5,150m)" },
      { day: "Days 13-25", activity: "Acclimatization rotations, establish camps", location: "Camp 1 (6,000m)" },
      { day: "Days 26-40", activity: "Technical training, higher camp establishment", location: "Camp 2 (6,700m)" },
      { day: "Days 41-50", activity: "Weather window preparation, final rotations", location: "Camp 3 (7,350m)" },
      { day: "Days 51-55", activity: "Summit push window", location: "Summit (8,611m)" },
      { day: "Days 56-60", activity: "Descent and return to Islamabad", location: "Return journey" },
    ],
    pricing: {
      basePrice: 75000,
      includes: [
        "All permits and fees",
        "Elite guide team (1:1 ratio available)",
        "Base Camp setup and management",
        "All expedition meals",
        "Technical climbing equipment",
        "Satellite communication",
        "Comprehensive insurance coverage",
        "Porter support to Base Camp",
      ],
      excludes: [
        "International flights",
        "Personal technical equipment",
        "Travel insurance",
        "Pakistan visa",
        "Personal expenses",
        "Guide and staff tips",
      ],
      additionalCosts: [
        { item: "1:1 Guide ratio", cost: "$15,000" },
        { item: "Personal high-altitude porter", cost: "$5,000" },
        { item: "Extra oxygen supply", cost: "$2,800" },
        { item: "Helicopter evacuation insurance", cost: "$1,200" },
      ],
    },
    requirements: {
      experience: [
        "Multiple 8000m summits required",
        "Advanced technical climbing skills",
        "Previous Pakistan expedition experience preferred",
        "Wilderness medical training",
        "Proven high-altitude performance",
      ],
      training: [
        "12+ months intensive preparation",
        "Technical rock/ice climbing proficiency",
        "Extreme endurance conditioning",
        "High-altitude simulation training",
        "Mental resilience preparation",
      ],
      equipment: [
        "Technical mountaineering boots",
        "Expedition-grade down suit",
        "Advanced climbing hardware",
        "High-altitude tent system",
        "Complete safety equipment",
        "Personal rescue gear",
      ],
    },
    risks: [
      "Extremely technical climbing terrain",
      "Unpredictable weather patterns",
      "Serac and avalanche danger",
      "Limited rescue capabilities",
      "High objective danger zones",
    ],
    successRate: "25%",
    bestMonths: ["July", "August"],
    temperature: {
      summit: "-20°C to -50°C",
      basecamp: "0°C to -20°C",
    },
  },

  "cho-oyu": {
    id: "cho-oyu",
    name: "Cho Oyu - Northwest Ridge",
    location: "Tibet/Nepal Border",
    elevation: "8,188m",
    duration: "45 days",
    price: "$45,000",
    basePrice: 45000,
    difficulty: "Advanced",
    season: "Sep - Oct",
    groupSize: "8-10 climbers",
    description: "Perfect preparation for Everest. Technical skills development with experienced military veterans.",
    highlights: ["Excellent acclimatization", "Less technical than Everest", "High success rate"],
    detailedDescription:
      "Cho Oyu, the 'Turquoise Goddess', offers the perfect stepping stone to 8000m climbing. This expedition provides excellent training for Everest while being less technically demanding, making it ideal for climbers advancing to the highest peaks.",
    itinerary: [
      { day: "Days 1-3", activity: "Arrive Kathmandu, preparations and briefings", location: "Kathmandu (1,400m)" },
      { day: "Days 4-8", activity: "Drive to Tibet, acclimatization in Tingri", location: "Tingri (4,300m)" },
      { day: "Days 9-15", activity: "Establish Base Camp, initial acclimatization", location: "Base Camp (5,700m)" },
      { day: "Days 16-30", activity: "Acclimatization rotations to higher camps", location: "Camp 1 (6,400m)" },
      { day: "Days 31-40", activity: "Final preparations and summit window", location: "Camp 2 (7,100m)" },
      { day: "Days 41-45", activity: "Summit push and return", location: "Summit (8,188m)" },
    ],
    pricing: {
      basePrice: 45000,
      includes: [
        "All permits and fees",
        "Professional guide team",
        "Base Camp facilities",
        "All expedition meals",
        "Group technical equipment",
        "Communication systems",
        "Medical support",
        "Ground transportation",
      ],
      excludes: [
        "International flights",
        "Personal equipment",
        "Travel insurance",
        "Visa fees",
        "Personal expenses",
        "Staff gratuities",
      ],
      additionalCosts: [
        { item: "Single accommodation", cost: "$1,500" },
        { item: "Personal Sherpa support", cost: "$4,000" },
        { item: "Additional oxygen", cost: "$1,800" },
        { item: "Gear rental package", cost: "$2,200" },
      ],
    },
    requirements: {
      experience: [
        "Previous 6000m+ experience required",
        "Basic technical climbing skills",
        "Multi-day trekking experience",
        "Good physical fitness",
        "Team expedition experience",
      ],
      training: [
        "4-6 months preparation program",
        "Endurance base building",
        "Strength training program",
        "Technical skills development",
        "Altitude simulation training",
      ],
      equipment: [
        "Mountaineering boots",
        "Down jacket and pants",
        "Climbing harness and helmet",
        "Complete layering system",
        "Personal climbing gear",
        "High-altitude sleeping system",
      ],
    },
    risks: [
      "High altitude effects",
      "Weather window limitations",
      "Crevasse danger on glacier",
      "Moderate technical sections",
      "Remote location challenges",
    ],
    successRate: "85%",
    bestMonths: ["September", "October"],
    temperature: {
      summit: "-10°C to -40°C",
      basecamp: "5°C to -15°C",
    },
  },

  manaslu: {
    id: "manaslu",
    name: "Manaslu - Northeast Face",
    location: "Nepal",
    elevation: "8,163m",
    duration: "42 days",
    price: "$42,000",
    basePrice: 42000,
    difficulty: "Advanced",
    season: "Sep - Nov",
    groupSize: "8-10 climbers",
    description: "The mountain of the spirit. Challenging yet achievable with proper military-style preparation.",
    highlights: ["Beautiful approach trek", "Less crowded", "Excellent training peak"],
    detailedDescription:
      "Manaslu, the 'Mountain of the Spirit', offers one of the most beautiful approaches in the Himalayas. This expedition combines technical challenge with stunning scenery, making it an ideal preparation for the highest 8000m peaks.",
    itinerary: [
      { day: "Days 1-2", activity: "Arrive Kathmandu, expedition preparations", location: "Kathmandu (1,400m)" },
      { day: "Days 3-10", activity: "Trek to Base Camp via Manaslu Circuit", location: "Base Camp (4,800m)" },
      { day: "Days 11-20", activity: "Acclimatization and camp establishment", location: "Camp 1 (5,700m)" },
      { day: "Days 21-30", activity: "Higher camp rotations and training", location: "Camp 2 (6,400m)" },
      { day: "Days 31-38", activity: "Summit window preparation", location: "Camp 3 (6,800m)" },
      { day: "Days 39-42", activity: "Summit push and descent", location: "Summit (8,163m)" },
    ],
    pricing: {
      basePrice: 42000,
      includes: [
        "All permits and fees",
        "Professional guide team",
        "Base Camp setup",
        "All expedition meals",
        "Group climbing equipment",
        "Communication systems",
        "Medical support",
        "Approach trek support",
      ],
      excludes: [
        "International flights",
        "Personal equipment",
        "Travel insurance",
        "Nepal visa",
        "Personal expenses",
        "Staff tips",
      ],
      additionalCosts: [
        { item: "Single tent upgrade", cost: "$1,200" },
        { item: "Personal Sherpa", cost: "$3,500" },
        { item: "Oxygen bottles (2)", cost: "$1,400" },
        { item: "Equipment rental", cost: "$1,800" },
      ],
    },
    requirements: {
      experience: [
        "Previous 6000m+ experience",
        "Technical climbing skills",
        "Multi-day expedition experience",
        "Good physical condition",
        "High-altitude experience",
      ],
      training: [
        "4-6 months preparation",
        "Endurance training program",
        "Strength and conditioning",
        "Technical skills practice",
        "Mental preparation",
      ],
      equipment: [
        "High-altitude boots",
        "Down suit system",
        "Technical climbing gear",
        "Complete layering system",
        "Personal safety equipment",
        "High-altitude sleeping gear",
      ],
    },
    risks: [
      "Avalanche danger zones",
      "High altitude effects",
      "Weather dependency",
      "Technical climbing sections",
      "Remote rescue challenges",
    ],
    successRate: "75%",
    bestMonths: ["September", "October", "November"],
    temperature: {
      summit: "-15°C to -45°C",
      basecamp: "0°C to -20°C",
    },
  },

  annapurna: {
    id: "annapurna",
    name: "Annapurna I - South Face",
    location: "Nepal",
    elevation: "8,091m",
    duration: "55 days",
    price: "$65,000",
    basePrice: 65000,
    difficulty: "Extreme",
    season: "Apr - May",
    groupSize: "4-6 climbers",
    description: "The deadliest 8000m peak. Only for the most experienced with elite military-trained guides.",
    highlights: ["Most dangerous 8000m peak", "Elite guide requirement", "Ultimate challenge"],
    detailedDescription:
      "Annapurna I stands as the most dangerous of all 8000m peaks, with a fatality rate that demands absolute respect. This expedition is reserved for the most experienced climbers and is led exclusively by our elite military veteran guides with proven Annapurna experience.",
    itinerary: [
      { day: "Days 1-3", activity: "Arrive Kathmandu, final preparations", location: "Kathmandu (1,400m)" },
      { day: "Days 4-12", activity: "Trek to Base Camp via Annapurna Sanctuary", location: "Base Camp (4,130m)" },
      { day: "Days 13-25", activity: "Acclimatization and route preparation", location: "Camp 1 (5,100m)" },
      { day: "Days 26-40", activity: "Technical training and camp establishment", location: "Camp 2 (5,900m)" },
      { day: "Days 41-50", activity: "Higher camps and weather monitoring", location: "Camp 3 (6,500m)" },
      { day: "Days 51-55", activity: "Summit attempt and descent", location: "Summit (8,091m)" },
    ],
    pricing: {
      basePrice: 65000,
      includes: [
        "All permits and fees",
        "Elite guide team (1:1 ratio)",
        "Complete Base Camp setup",
        "All expedition meals",
        "Technical climbing equipment",
        "Advanced communication",
        "Comprehensive insurance",
        "Emergency evacuation coverage",
      ],
      excludes: [
        "International flights",
        "Personal technical gear",
        "Travel insurance",
        "Nepal visa",
        "Personal expenses",
        "Guide gratuities",
      ],
      additionalCosts: [
        { item: "Additional safety guide", cost: "$8,000" },
        { item: "Extra oxygen supply", cost: "$3,500" },
        { item: "Helicopter standby", cost: "$2,500" },
        { item: "Advanced medical kit", cost: "$1,000" },
      ],
    },
    requirements: {
      experience: [
        "Multiple 8000m summits required",
        "Advanced technical climbing",
        "Previous Himalayan experience",
        "Wilderness medical training",
        "Proven risk management skills",
      ],
      training: [
        "12+ months intensive preparation",
        "Advanced technical skills",
        "Extreme fitness conditioning",
        "Mental resilience training",
        "Emergency response training",
      ],
      equipment: [
        "Advanced mountaineering boots",
        "Technical down suit",
        "Complete safety systems",
        "Advanced climbing hardware",
        "Emergency communication",
        "Personal rescue equipment",
      ],
    },
    risks: [
      "Highest fatality rate of 8000m peaks",
      "Extreme avalanche danger",
      "Technical climbing challenges",
      "Unpredictable weather",
      "Limited rescue options",
    ],
    successRate: "32%",
    bestMonths: ["April", "May"],
    temperature: {
      summit: "-25°C to -50°C",
      basecamp: "5°C to -15°C",
    },
  },

  denali: {
    id: "denali",
    name: "Denali - West Buttress",
    location: "Alaska, USA",
    elevation: "6,190m",
    duration: "21 days",
    price: "$12,000",
    basePrice: 12000,
    difficulty: "Intermediate",
    season: "May - Jul",
    groupSize: "6-8 climbers",
    description: "North America's highest peak. Perfect cold weather training with military precision.",
    highlights: ["Extreme cold training", "Technical skills development", "Accessible location"],
    detailedDescription:
      "Denali offers the perfect training ground for extreme cold weather mountaineering. Located in Alaska, this expedition provides excellent preparation for higher altitude peaks while developing essential cold weather survival skills under military-style instruction.",
    itinerary: [
      { day: "Days 1-2", activity: "Arrive Anchorage, fly to Talkeetna, preparations", location: "Talkeetna (107m)" },
      { day: "Day 3", activity: "Fly to Kahiltna Glacier Base Camp", location: "Base Camp (2,200m)" },
      { day: "Days 4-8", activity: "Acclimatization and cache building", location: "Camp 1 (2,400m)" },
      { day: "Days 9-12", activity: "Move to higher camps, technical training", location: "Camp 2 (3,500m)" },
      { day: "Days 13-16", activity: "Establish high camp, weather monitoring", location: "High Camp (5,200m)" },
      { day: "Days 17-19", activity: "Summit attempt window", location: "Summit (6,190m)" },
      { day: "Days 20-21", activity: "Descent and fly out", location: "Return to Talkeetna" },
    ],
    pricing: {
      basePrice: 12000,
      includes: [
        "All permits and fees",
        "Professional guide team",
        "Base Camp setup",
        "All expedition meals",
        "Group technical equipment",
        "Communication systems",
        "Bush flight to glacier",
        "Cold weather training",
      ],
      excludes: [
        "Flights to Anchorage",
        "Personal cold weather gear",
        "Travel insurance",
        "Personal expenses",
        "Accommodation in Anchorage",
        "Staff gratuities",
      ],
      additionalCosts: [
        { item: "Single tent upgrade", cost: "$800" },
        { item: "Gear rental package", cost: "$1,500" },
        { item: "Extra food cache", cost: "$400" },
        { item: "Satellite communicator", cost: "$300" },
      ],
    },
    requirements: {
      experience: [
        "Previous mountaineering experience",
        "Cold weather camping",
        "Basic technical climbing",
        "Multi-day backpacking",
        "Good physical fitness",
      ],
      training: [
        "3-4 months preparation",
        "Cold weather conditioning",
        "Endurance training",
        "Technical skills practice",
        "Mental preparation",
      ],
      equipment: [
        "Extreme cold weather boots",
        "Down suit rated to -40°C",
        "Complete layering system",
        "Technical climbing gear",
        "Cold weather sleeping system",
        "Personal safety equipment",
      ],
    },
    risks: [
      "Extreme cold temperatures",
      "High altitude effects",
      "Crevasse danger",
      "Weather dependency",
      "Remote location challenges",
    ],
    successRate: "60%",
    bestMonths: ["May", "June", "July"],
    temperature: {
      summit: "-30°C to -50°C",
      basecamp: "-10°C to -30°C",
    },
  },
}

export const getAllTracks = (): Track[] => {
  return Object.values(tracksData)
}

export const getTrackById = (id: string): Track | undefined => {
  return tracksData[id]
}

export const getTracksByDifficulty = (difficulty: Track["difficulty"]): Track[] => {
  return getAllTracks().filter((track) => track.difficulty === difficulty)
}

export const getTracksByPriceRange = (minPrice: number, maxPrice: number): Track[] => {
  return getAllTracks().filter((track) => track.basePrice >= minPrice && track.basePrice <= maxPrice)
}

export const calculateTotalPrice = (trackId: string, additionalOptions: string[] = []): number => {
  const track = getTrackById(trackId)
  if (!track) return 0

  let total = track.basePrice

  additionalOptions.forEach((option) => {
    const additionalCost = track.pricing.additionalCosts.find((cost) => cost.item === option)
    if (additionalCost) {
      // Extract numeric value from cost string (e.g., "$2,500" -> 2500)
      const costValue = Number.parseInt(additionalCost.cost.replace(/[$,]/g, ""))
      total += costValue
    }
  })

  return total
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}
