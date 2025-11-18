/**
 * Helper utilities for i18n with variable injection
 * Automatically replaces placeholders like {{siteUrl}}, {{name}}, etc.
 */

export interface TranslationVariables {
  siteUrl?: string;
  name?: string;
  title?: string;
  subtitle?: string;
  [key: string]: string | undefined;
}

/**
 * Recursively processes translation objects and replaces placeholders
 */
export function injectVariables(
  obj: unknown,
  variables: TranslationVariables
): unknown {
  if (typeof obj === 'string') {
    return replaceVariables(obj, variables);
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => injectVariables(item, variables));
  }

  if (obj && typeof obj === 'object') {
    const result: Record<string, unknown> = {};
    for (const key in obj) {
      result[key] = injectVariables((obj as Record<string, unknown>)[key], variables);
    }
    return result;
  }

  return obj;
}

/**
 * Replaces {{variable}} placeholders in a string
 */
export function replaceVariables(
  text: string,
  variables: TranslationVariables
): string {
  const replaced = text.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    return variables[key] ?? match;
  });
  // Convert \n to actual newlines
  return replaced.replace(/\\n/g, '\n');
}

/**
 * Extracts variables from the data section and environment
 */
export function getTranslationVariables(
  messages: Record<string, unknown>,
  locale: string
): TranslationVariables {
  const data = (messages?.data as Record<string, unknown>) || {};
  
  // Map experience items
  const experienceItems = data.experienceItems as Array<{
    position: string;
    company: string;
    period: string;
  }> || [];
  
  const dynamicExperience = experienceItems
    .map((e) => `${e.position} at ${e.company} (${e.period})`)
    .join("\n");

  // Map skills categories
  const skillsCategories = data.skillsCategories as Array<{
    name: string;
    items: string[];
  }> || [];
  
  const dynamicSkills = skillsCategories
    .map((c) => `${c.name}: ${c.items.join(", ")}`)
    .join("\n");

  // Map project items
  const projectsItems = data.projectsItems as Array<{
    title: string;
    description: string;
    tech: string[];
    link: string;
  }> || [];
  
  const dynamicProjects = projectsItems
    .map((p) => `${p.title} - ${p.description} [${p.tech.join(", ")}]\nLink: ${p.link}`)
    .join("\n");
  
  return {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    ...(data as Record<string, string>),
    dynamicExperience,
    dynamicSkills,
    dynamicProjects,
    locale,
  };
}
