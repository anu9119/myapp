export default async function sitemap() {
    return [
        {
            url: "https://dataelevation.dev",
            lastModified: new Date(),
            priority: 1.0
        },
        {
            url: "https://dataelevation.dev/#about",
            lastModified: new Date(),
            priority: 0.8
        },
        {
            url: "https://dataelevation.dev/#projects",
            lastModified: new Date(),
            priority: 0.8
        },
        {
            url: "https://dataelevation.dev/#contact",
            lastModified: new Date(),
            priority: 0.8
        }
    ]
}