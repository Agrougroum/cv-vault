import { Experience } from "@shared/models/experience.interface";

export const experienceData: Experience[] = [
    {
        period: '2021 — PRESENT',
        title: 'Tech Lead / Scrum Master (Passage, B2C)',
        company: 'Air France / KLM',
        urlLink: 'https://www.klaviyo.com/',
        location: {
            label: 'Sophia Antipolis, Valbonne, Provence Alpes Cote d’Azure, France',
            code: 'US'
        },
        mainDescription: `Development of the B2C website (airfrance.fr / klm.nl) : Homepage, Deals, Travel-Guide.

Cutting-edge Front-end project in terms of technological trends and development best practices: tracking the latest trends and versions, comprehensive test coverage (unit, e2e), Daily Releases, CI/CD, accessibility, SEO, monitoring, extensive collaboration, and synergy between teams.

Roles and tasks performed:`,
        bulletPoints: ['Front-end development: Angular', 'Back-end development: Apollo GraphQL', 'Unit testing (Jest / Spectator) & End-to-end testing (Playwright)'],
        technologies: ['Angular 16+', 'Angular Material', 'yarn', 'nx', 'GraphQL', 'SSR', 'Cypress', 'Playwright', 'Jest']
    },
    {
        period: '2018 — 2021',
        title: 'Full Stack Developer Angular / Java (Cargo, B2B)',
        company: 'Air France / KLM',
        urlLink: 'https://www.klm.nl/en',
        location: {
            label: 'Sophia Antipolis, Valbonne, Provence Alpes Cote d’Azure, France',
            code: 'US'
        },
        mainDescription: `Full Stack Developer: Development of AF-KLM cargo website (www.afklcargo.com/mycargo, 700 000 users)`,
        bulletPoints: ['Complete migration from AngularJs to Angular+ (application conception lead)', 'Creation of a reusable components library (Design System Amelia, npm)', 'Back end Development / APIs creation : Java 11, Spring, SpringBoot'],
        technologies: ['Angular 16+', 'Angular Material', 'yarn', 'nx', 'GraphQL', 'SSR', 'Cypress', 'Playwright', 'Jest']
    }
]