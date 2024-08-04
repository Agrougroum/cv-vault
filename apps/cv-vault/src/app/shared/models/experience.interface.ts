export interface ExperienceLocation {
    label: string;
    code: string;
}

export interface Experience {
    period: string;
    title: string;
    company: string;
    urlLink: string;
    location: ExperienceLocation;
    mainDescription: string;
    bulletPoints: string[];
    technologies: string[];
}