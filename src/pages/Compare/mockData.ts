export interface ToolComparison {
  name: string
  tagline: string
  description: string
  badgeText: string
  badgeColor: string
  iconText: string
  iconBg: string
  iconTextColor: string
  iconBorderColor: string
  tags: string[]
  score: number
}

export interface PersonaRecommendation {
  id: string
  title: string
  description: string
  icon: string
  iconColor: string
  recommendedTool: string
  toolColor: string
}

export interface MetricComparison {
  id: string
  title: string
  leaderText: string
  leaderColor: string
  toolAScore: number
  toolBScore: number
}

export interface FeatureShowdown {
  id: string
  title: string
  icon: string
  winner: string
  winnerTool: string
  winnerColor: string
  description: string
  toolABenefits?: string[]
  toolBDownsides?: string[]
}

export interface RealWorkflow {
  id: string
  title: string
  winner: string
  winnerColor: string
  description: string
  imageUrl: string
  blueprintSlug: string
}

export interface ComparisonData {
  slug: string
  title: string
  subtitle: string
  toolA: ToolComparison
  toolB: ToolComparison
  personas: PersonaRecommendation[]
  metrics: MetricComparison[]
  overallQuote: string
  showdown: FeatureShowdown[]
  workflows: RealWorkflow[]
  verdict: {
    title: string
    subtitle: string
    toolAConditions: string[]
    toolBConditions: string[]
  }
  learningCurve: {
    toolACurve: string
    toolBCurve: string
  }
  masteryBlueprints: Array<{
    id: string
    title: string
    description: string
    actionText: string
    actionIcon: string
    slug: string
  }>
}

export const mockCompareData: ComparisonData = {
  slug: 'photoshop-vs-coreldraw',
  title: 'Software Comparison',
  subtitle:
    "An in-depth analysis of the world's most powerful creative suites. Find your perfect workflow match.",
  toolA: {
    name: 'Photoshop',
    tagline: 'Industry Standard',
    description:
      'The undisputed king of pixel-perfect manipulation, AI-powered generation, and professional retouching workflows.',
    badgeText: 'Generative AI',
    badgeColor: 'bg-[#7C3AED]/10 text-[#d2bbff]',
    iconText: 'Ps',
    iconBg: 'bg-[#001E36]',
    iconTextColor: 'text-[#00A8FF]',
    iconBorderColor: 'border-[#00A8FF]/20',
    tags: ['Generative AI', 'Photo Editing'],
    score: 9.4,
  },
  toolB: {
    name: 'CorelDRAW',
    tagline: 'Vector Powerhouse',
    description:
      'A versatile suite optimized for large-scale printing, technical drawing, and complex vector illustrations with total control.',
    badgeText: 'Print Ready',
    badgeColor: 'bg-[#4cd7f6]/10 text-[#4cd7f6]',
    iconText: 'Cd',
    iconBg: 'bg-[#2B2B2B]',
    iconTextColor: 'text-[#64B448]',
    iconBorderColor: 'border-[#64B448]/20',
    tags: ['Print Ready', 'Vector Design'],
    score: 9.1,
  },
  personas: [
    {
      id: 'graphic-designer',
      title: 'Graphic Designer',
      description: 'Social media, web assets, and high-end visual compositing.',
      icon: 'brush',
      iconColor: 'text-[#7C3AED]',
      recommendedTool: 'Photoshop',
      toolColor: 'text-[#7C3AED]',
    },
    {
      id: 'printing-shop',
      title: 'Printing Shop',
      description: 'Large format banners, vehicle wraps, and prepress layouts.',
      icon: 'print',
      iconColor: 'text-[#4cd7f6]',
      recommendedTool: 'CorelDRAW',
      toolColor: 'text-[#4cd7f6]',
    },
    {
      id: 'logo-designer',
      title: 'Logo Designer',
      description: 'Scalable brand identities and technical precision iconography.',
      icon: 'ink_pen',
      iconColor: 'text-[#7C3AED]',
      recommendedTool: 'CorelDRAW',
      toolColor: 'text-[#4cd7f6]',
    },
    {
      id: 'photographer',
      title: 'Photographer',
      description: 'RAW processing, beauty retouching, and non-destructive edits.',
      icon: 'camera',
      iconColor: 'text-[#7C3AED]',
      recommendedTool: 'Photoshop',
      toolColor: 'text-[#7C3AED]',
    },
  ],
  metrics: [
    {
      id: 'learning',
      title: 'Ease of Learning',
      leaderText: 'Photoshop leads',
      leaderColor: 'text-[#7C3AED]',
      toolAScore: 85,
      toolBScore: 70,
    },
    {
      id: 'performance',
      title: 'Performance (Hardware Load)',
      leaderText: 'CorelDRAW is lighter',
      leaderColor: 'text-[#4cd7f6]',
      toolAScore: 65,
      toolBScore: 90,
    },
    {
      id: 'ai-features',
      title: 'AI Features',
      leaderText: 'Photoshop dominates',
      leaderColor: 'text-[#7C3AED]',
      toolAScore: 98,
      toolBScore: 40,
    },
  ],
  overallQuote:
    'While Photoshop wins on technological innovation and AI integration, CorelDRAW remains the superior choice for production environments and technical vector precision.',
  showdown: [
    {
      id: 'vector-design',
      title: 'Vector Design & Management',
      icon: 'polyline',
      winner: 'Winner: CorelDRAW',
      winnerTool: 'CorelDRAW',
      winnerColor: 'bg-[#4cd7f6]/10 text-[#4cd7f6]',
      description:
        'CorelDRAW is built as a vector-first application. Its multi-page layout capabilities, superior node editing tools, and precise dimensioning make it the clear winner for technical drawing and layout design.',
      toolABenefits: [
        'Professional multi-page support',
        'Advanced technical drawing tools',
        'Seamless CNC and Plotter integration',
      ],
      toolBDownsides: [
        'Raster-based architecture',
        'Basic vector tools only',
        'Harder to scale without pixelation',
      ],
    },
    {
      id: 'photo-ai',
      title: 'Photo Manipulation & AI',
      icon: 'auto_fix_high',
      winner: 'Winner: Photoshop',
      winnerTool: 'Photoshop',
      winnerColor: 'bg-[#7C3AED]/10 text-[#d2bbff]',
      description:
        "Photoshop's Generative Fill and Firefly AI integration are lightyears ahead. For content-aware filling, complex masking, and pixel manipulation, no other software comes close.",
    },
  ],
  workflows: [
    {
      id: 'creating-logos',
      title: 'Creating Logos',
      winner: 'Winner: Corel',
      winnerColor: 'bg-[#4cd7f6] text-[#003640]',
      description:
        "Corel's vector engine ensures every line is mathematically perfect and infinitely scalable.",
      imageUrl: '/images/logo_design_process.png',
      blueprintSlug: 'graphic-designer-blueprint',
    },
    {
      id: 'editing-photos',
      title: 'Editing Photos',
      winner: 'Winner: Photoshop',
      winnerColor: 'bg-[#7C3AED] text-white',
      description:
        'Non-destructive layers and neural filters make high-end retouching a breeze.',
      imageUrl: '/images/photo_editing_session.png',
      blueprintSlug: 'photo-editor-blueprint',
    },
    {
      id: 'printing-banners',
      title: 'Printing Banners',
      winner: 'Winner: Corel',
      winnerColor: 'bg-[#4cd7f6] text-[#003640]',
      description:
        'Native support for billboard-scale layouts and perfect CMYK color management.',
      imageUrl: '/images/printing_banner.png',
      blueprintSlug: 'printing-shop-blueprint',
    },
  ],
  verdict: {
    title: 'The Tech Soul Verdict',
    subtitle:
      'Both tools are masters of their domain. Your choice depends entirely on your output.',
    toolAConditions: [
      'You work primarily with pixels, photos, and digital art.',
      'You want the most advanced AI features on the market.',
      'You are integrated into the Adobe Creative Cloud ecosystem.',
    ],
    toolBConditions: [
      'You own a print shop or design for physical signage.',
      'You prefer a one-stop-shop for illustration and layout.',
      'You need specialized tools for technical drawing and CNC.',
    ],
  },
  learningCurve: {
    toolACurve:
      'Steeper initial curve due to layer logic and vast menu system. Mastery takes longer but rewards with infinite flexibility.',
    toolBCurve:
      'More intuitive for vector-focused tasks. The workspace is cleaner for beginners, with professional tools tucked away for later.',
  },
  masteryBlueprints: [
    {
      id: 'graphic-designer-bp',
      title: 'Graphic Designer Blueprint',
      description:
        'A curated path to becoming a professional digital artist using Photoshop & Illustrator.',
      actionText: 'Explore Course',
      actionIcon: 'arrow_forward',
      slug: 'graphic-designer',
    },
    {
      id: 'printing-shop-bp',
      title: 'Printing Shop Blueprint',
      description:
        'Master the business of large format printing and prepress with CorelDRAW.',
      actionText: 'Explore Course',
      actionIcon: 'arrow_forward',
      slug: 'printing-shop',
    },
    {
      id: 'workflow-guides-bp',
      title: 'Workflow Shortcut Guides',
      description:
        'Cheat sheets for the most common tasks in both software ecosystems.',
      actionText: 'Download PDF',
      actionIcon: 'download',
      slug: 'shortcut-guides',
    },
  ],
}
