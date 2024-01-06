export type ConstantExperience = {
    [key: string]: Experience
}

export interface Experience {
    startDate: string
    endDate: string
    title: string
    company?: string
    subTitle: string
    projects: Project[]
}

export interface Project extends Object {
    startDate?: string
    endDate?: string
    title: string
    subTitle?: string
    overview: string
    role: string
    technologies: string[]
    link?: string
}
