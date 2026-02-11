export type Project = {
  slug: string;
  title: string;
  role: string;
  journey: string;                    // e.g., "0 → 1 → Scale"
  description: string;
  
  impact: {
    metrics: [
      { label: string; value: string },
      { label: string; value: string },
      { label: string; value: string },
      { label: string; value: string }
    ];
    platforms?: {
      name: string;
      href: string;
    }[];
    status: string;
  };
  
  deliverables: {
    title: string;
    description: string;
  }[];
  
  cta: {
    text: string;
    href: string;
  };
};

