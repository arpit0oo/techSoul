export interface SoftwareData {
  id: string
  name: string
  subtitle: string
  tagline: string
  logoUrl: string
  score: number
  verified: boolean
  offer: {
    price: string
    period: string
    badge: string
    note: string
  }
  specs: {
    bestFor: string
    platform: string
    difficulty: string
    category: string
  }
  includedFeatures: string[]
  attributes: Array<{
    icon: string
    label: string
    color: string
  }>
  perfectFor: Array<{
    title: string
    description: string
  }>
  notIdealFor: Array<{
    title: string
    description: string
  }>
  features: Array<{
    title: string
    description: string
    icon: string
    color: string
  }>
  screenshots: Array<{
    url: string
    alt: string
  }>
  review: {
    pros: string[]
    cons: string[]
    verdict: string
  }
  scores: Array<{
    label: string
    score: number
    percentage: number
  }>
  alternatives: Array<{
    id: string
    name: string
    description: string
    logoUrl: string
    compareSlug: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const mockPhotoshopData: SoftwareData = {
  id: 'adobe-photoshop',
  name: 'Adobe Photoshop',
  subtitle: 'Photoshop',
  tagline:
    'Professional photo editing, compositing, and digital art software trusted by millions of creators to turn their imagination into reality.',
  logoUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAtEHGcLs3Q8GYTRqRtFPhwI6BqgAGxBwvfKP4RNyBkWS2cujx3Oxv6t-IGSq5h2pBZGposNiTgzLmInuUCKQhBFBNiisiTDFeb9WhqmQyXTswie-HrZrkFjgsy74hCc94SNm7XeCtbuRX3tbfZMX_fLE_uH6E2AR9ZbfKdimVB92RsNe5ThokkPdIIW92_bbIfIMbO-fXZgpeczeVFadezJbnvqmcwRABUjcCy9iflUOv1Ykl0h0oYNQ',
  score: 9.2,
  verified: true,
  offer: {
    price: '₹250',
    period: 'Lifetime',
    badge: 'BEST VALUE',
    note: 'Official offer through Tech Soul. Terms may apply.',
  },
  specs: {
    bestFor: 'Graphic Designers',
    platform: 'Win/macOS',
    difficulty: 'Multi-Tier',
    category: 'Raster Editor',
  },
  includedFeatures: [
    'Installation Guide',
    'Beginner Quick Start Guide',
    'Best Keyboard Shortcuts',
    'Curated Learning Resources',
    'Future Resource Updates',
  ],
  attributes: [
    { icon: 'verified', label: 'Official Source', color: 'text-[#7C3AED]' },
    { icon: 'update', label: 'Regular Updates', color: 'text-[#4cd7f6]' },
    { icon: 'school', label: 'Beginner Friendly', color: 'text-emerald-400' },
    { icon: 'laptop_windows', label: 'Windows Compatible', color: 'text-blue-400' },
  ],
  perfectFor: [
    { title: 'Students', description: 'Learning industry standards for career growth.' },
    { title: 'Freelancers', description: 'Providing professional-grade assets to clients.' },
    { title: 'Photo Editors', description: 'Precision retouching and complex compositing.' },
  ],
  notIdealFor: [
    { title: 'CAD', description: 'Not built for technical architectural drafting.' },
    { title: '3D Modeling', description: "While some tools exist, it's not a Blender replacement." },
  ],
  features: [
    {
      title: 'Industry Standard',
      description: 'The global benchmark for pixel-perfect precision and workflow compatibility.',
      icon: 'workspace_premium',
      color: 'bg-[#7C3AED]/20 text-[#d2bbff]',
    },
    {
      title: 'AI Powered',
      description: 'Generative Fill and Firefly AI integrated directly into your creative canvas.',
      icon: 'auto_awesome',
      color: 'bg-[#4cd7f6]/20 text-[#4cd7f6]',
    },
    {
      title: 'Massive Ecosystem',
      description: 'Thousands of brushes, plugins, and actions created by a global community.',
      icon: 'extension',
      color: 'bg-[#eaddff]/20 text-[#d2bbff]',
    },
    {
      title: 'Pro Workflow',
      description: 'Seamless integration with After Effects, Illustrator, and Premiere Pro.',
      icon: 'hub',
      color: 'bg-white/10 text-white',
    },
  ],
  screenshots: [
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv0k8McYDofKRbXLy0qkQoOSfoQH9qM7wc1MH7NSI-TBBWfpQ4SZdcju6lTEP9L3X4_AqHlYUQDTgqZxxUjvUDx_B_WV6qfoidV3JI8KhWiRiIgTwSJbTvva4yB6rdc8NpeQoDR6Ndepe0b9uBUXVptKpMI72PZQUkjUWiWpoiS1zNpC5LlnFZNxaPkpP_Iht9rGmvf2Qo1txh7elITSeXBesmUTL7gWhUHKTbSn5Gvpalyp1I4J_2Tg',
      alt: 'Adobe Photoshop cinematic workspace manipulation screenshot',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3X1X8bGXnVdint25YD3KRx2MdZxjbUHq8z_Hvk2gWGz2nMcMOni6VNXTOzpcB-cVGUkvQM9FIDYS_uHj6tfJ4I9_HVwxSJ7AmvSQuhp_XOPm03ud2w0uzvuTpFolP3PLNScnLrdpdpmWpm8HrXd8qxJCNHp8GZhcK9pgi9IbR3vzHnK6rYHrf7jALBUQBospP71glzI0SgEBJE2wEKqlm3CdgMM_ZcnHB9kjh9daadawS0HWtfkdl1w',
      alt: 'Adobe Photoshop AI Generative Fill in action',
    },
    {
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoD-Vccz7BWV0f5__Pdt0gLWxjPmkA-vW1KNFU1Drmgx7v_oqTqGHjVgxWdxMfW3d08-oQC9skFZC4Sx2tHWfhNbtRD1Ep8PJfmdBod7tGuCB0ZBaXwSsVDhTsBBm_ng93f7WoVA8UYlKu-RLI8U-Zz7ZHGxFuczMlD1lM4PFMHMGbVAuboCjDZMNI9bmyfFUEYDmrK2q1AEfJb4BgJjR6T9T8IPhSECWTqpNhqVwzMQZNfWEznMimuQ',
      alt: 'Photoshop toolbar and brush engine settings preview',
    },
  ],
  review: {
    pros: [
      'Unmatched tool depth and control',
      'Revolutionary AI-driven features',
      'Perfect integration with Creative Cloud',
      'Industry-standard file formats (.PSD)',
    ],
    cons: [
      'Steep learning curve for beginners',
      'Subscription-only pricing model',
      'Resource-intensive on older hardware',
    ],
    verdict:
      "Photoshop remains the undisputed king of raster editing. While the subscription model and complexity can be daunting, the addition of Firefly AI has made it more accessible than ever. It's an essential investment for any serious digital creator.",
  },
  scores: [
    { label: 'Ease of Learning', score: 7.5, percentage: 75 },
    { label: 'Performance', score: 9.0, percentage: 90 },
    { label: 'Value', score: 8.5, percentage: 85 },
    { label: 'Community', score: 10, percentage: 100 },
    { label: 'AI Features', score: 9.5, percentage: 95 },
    { label: 'Industry Adoption', score: 10, percentage: 100 },
  ],
  alternatives: [
    {
      id: 'affinity-photo',
      name: 'Affinity Photo',
      description: 'A powerful one-time purchase alternative for professionals.',
      logoUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCnET5pjR-MRZPpIiBFC84hIe69acJbaQ5sTBGEnYTzx1lCeXE2KXiYEMChGiylb8wGayrkLyF2VlvBYPioeXNlCZuFzwZFoSLsXEBWW-JPvHYLLWjFfYAlami1clmUoOnWTQLbKC4pfU9UB0eFlMYUIOHHdAuJKMepT2vjhC4fFJd0XvehE66n161wxauSNvyfiq0zcbF2exkCqlYyaU8Y5pKdFVLNiQiuJ4gIhyhKzbh9Py_fK41jvw',
      compareSlug: 'photoshop-vs-coreldraw',
    },
    {
      id: 'photopea',
      name: 'Photopea',
      description: 'Browser-based, free tool with a nearly identical interface.',
      logoUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCZD3RbktgsyGQrOHu7gBkkMI379aZsLp8Q2biba26ZcIJNd24fJENQMBQKxRyqDnmJSoF1nIQ-qbYcvSvFualbRoTyF7yBj5a3aNMSnwSimIEHqWe-KCNFZuQK4vAm1bFFpz25NGJUFEYDG8jNyxn6f42T1qBfmfQTDNlS88YkjHWQsT6fZHEjXZJcbXPSXrt1qNTbDV6-pCGxljW9DBFdWDXeWIi5gTc_IYMHrPDiSTA-G4twMlZmtA',
      compareSlug: 'photoshop-vs-coreldraw',
    },
    {
      id: 'canva',
      name: 'Canva',
      description: 'Best for non-designers needing quick, template assets.',
      logoUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCxHCI8NOomgycIfKi3AXD3nEYhmKu5il0dgGDRAHmRHbDO99Wz8mInLAPxBV2v5BIlij1cYG0VB690TPcMcZhEr34bqqVUPF7s92u1vMxgNz3mofHKS5HNNOOmFdDjPmkfp2HsoCddJJ_X9RR1Q-kyksuPM7_mKDtmSf7RBLCa8re80CDFOggRdVKSRnw4lmiS9SAFQ8to7Y7XrtPGn5kc-oYU97iwmHXeb-__Inyx701umquSVe6mQg',
      compareSlug: 'photoshop-vs-coreldraw',
    },
  ],
  faqs: [
    {
      question: 'Is Photoshop free for students?',
      answer:
        'Adobe offers a significant discount for students through the Creative Cloud All Apps plan, though it is not completely free.',
    },
    {
      question: 'Can I buy Photoshop as a one-time purchase?',
      answer:
        'No, Adobe moved to a subscription-based model (Creative Cloud) years ago. You can subscribe to the Photography plan or the individual app plan.',
    },
    {
      question: 'Does Photoshop support iPad?',
      answer:
        'Yes, Photoshop on iPad is included with most subscriptions and allows for mobile editing with Apple Pencil support.',
    },
  ],
}
