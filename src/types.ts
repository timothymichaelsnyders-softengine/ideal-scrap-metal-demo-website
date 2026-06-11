export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefit: string;
  imageUrl: string;
  metals: string[];
}

export interface UseCaseItem {
  id: string;
  industry: string;
  painPoint: string;
  solution: string;
  benefit: string;
  iconName: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface QuoteRequest {
  name: string;
  contact: string;
  metalType: string;
  estimatedVolume: string;
  location: string;
  message: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  companyName: string;
  role: string;
  feedback: string;
  rating: number;
}
