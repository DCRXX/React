import { useState } from "react";

export type AccordionSection = {
    courses: boolean;
    services: boolean;
    Books: boolean;
    Goods: boolean;
};
export type AccordionSectionChild = {
    desing: boolean;
    development: boolean;
    analytics: boolean;
    marketing: boolean;
    cloud_storage: boolean;
    communication: boolean;
    data_analytics: boolean;
    soft_skills: boolean;
    business_and_startups: boolean;
    subrcriptions_and_licenses: boolean;
    mersch_and_branding: boolean;
};

export type AccordionBehavior = 'exclusive' | 'multiple';

export const useAccordionChild = (
    initialOpen: keyof AccordionSectionChild | null = null,
    behavior: AccordionBehavior = 'exclusive'
) => {

    const [openSectionsChild, setOpenSections] = useState<AccordionSectionChild>({
        desing: initialOpen === 'desing',
        development: initialOpen === 'development',
        analytics: initialOpen === 'analytics',
        marketing: initialOpen === 'marketing',
        cloud_storage: initialOpen === 'cloud_storage',
        communication: initialOpen === 'communication',
        data_analytics: initialOpen === 'data_analytics',
        soft_skills: initialOpen === 'soft_skills',
        business_and_startups: initialOpen === 'business_and_startups',
        subrcriptions_and_licenses: initialOpen === 'subrcriptions_and_licenses',
        mersch_and_branding: initialOpen === 'mersch_and_branding',
    });

    const toggleSectionChild = (sectionName: keyof AccordionSectionChild) => {
        setOpenSections(prev => {
            if (behavior === 'exclusive') {
                const newState: AccordionSectionChild = {
                    desing: false,
                    development: false,
                    analytics: false,
                    marketing: false,
                    cloud_storage: false,
                    communication: false,
                    data_analytics: false,
                    soft_skills: false,
                    business_and_startups: false,
                    subrcriptions_and_licenses: false,
                    mersch_and_branding: false,
                };
                newState[sectionName] = !prev[sectionName];
                return newState;
            }

            return {
                ...prev,
                [sectionName]: !prev[sectionName]

            };

        })
    };
    return {
        openSectionsChild,
        toggleSectionChild
    };

};

export const useAccordion = (
    initialOpen: keyof AccordionSection | null = null,
    behavior: AccordionBehavior = 'exclusive'
) => {

    const [openSections, setOpenSections] = useState<AccordionSection>({
        courses: initialOpen === 'courses',
        services: initialOpen === 'services',
        Books: initialOpen === 'Books',
        Goods: initialOpen === 'Goods',
    });

    const toggleSection = (sectionName: keyof AccordionSection) => {
        setOpenSections(prev => {
            if (behavior === 'exclusive') {
                const newState: AccordionSection = {
                    courses: false,
                    services: false,
                    Books: false,
                    Goods: false,
                };
                newState[sectionName] = !prev[sectionName];
                return newState;
            }

            return {
                ...prev,
                [sectionName]: !prev[sectionName]

            };

        })
    };
    return {
        openSections,
        toggleSection
    };

};

