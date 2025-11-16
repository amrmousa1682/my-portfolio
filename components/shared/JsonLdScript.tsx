import { getTranslations } from "next-intl/server";
import { generateScheamsFromTranslations } from "./metadata";

export default async function JsonLdScript() {
    const scheams = generateScheamsFromTranslations(await getTranslations("seo"));
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(scheams.personSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(scheams.websiteSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(scheams.breadcrumbSchema),
                }}
            />
        </>
    );
}