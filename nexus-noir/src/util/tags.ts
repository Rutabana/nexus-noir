export enum areas {
    Fitness = "fitness",
    Creativity = "creativity",
    Reading = "reading",
    Coding = "coding",
    Life = "life",
    Career = "career",
}

export const tags = {
    AWS: {
      area: areas.Coding,
      label: 'AWS',
      color: '#F7A81B',
    },
    WebDevelopment: {
      area: areas.Coding,
      label: 'Web Development',
      color: '#3490DC',
    },
    Politics: {
      area: areas.Life,
      label: 'Politics',
      color: '#EF4444',
    },
    History: {
      area: areas.Life,
      label: 'History',
      color: '#4B5563',
    },
    Theology: {
      area: areas.Life,
      label: 'Theology',
      color: '#F59E0B',
    },
    WeightLoss: {
      area: areas.Fitness,
      label: 'Weight Loss',
      color: '#10B981',
    },
    StrengthTraining: {
      area: areas.Fitness,
      label: 'Strength Training',
      color: '#9333EA',
    },
    JobHunt: {
      area: areas.Career,
      label: 'Job Hunt',
      color: '#2563EB',
    },
    Networking: {
      area: areas.Career,
      label: 'Networking',
      color: '#14B8A6',
    },
    DistributedSystems: {
      area: areas.Coding,
      label: 'Distributed Systems',
      color: '#7C3AED',
    },
    PersonalProjects: {
      area: areas.Coding,
      label: 'Personal Projects',
      color: '#F97316',
    },
  };