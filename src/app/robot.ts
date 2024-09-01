import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {

    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/#contact", "/#about", "/#projects"],
            disallow: [],
        },
        sitemap: `${siteConfig.url}/sitemap.xml`,
    }
}