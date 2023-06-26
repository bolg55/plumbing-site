import siteData from './siteData.json';
import { slugify } from '../utils';

interface Post {
  title: string;
  description: string;
  publishedDate: Date;
  image: {
    src: string;
    alt: string;
  };
  author: string;
  slug: string;
}

const jsonLDGenerator = ({
  type,
  post,
  url,
}: {
  type: string;
  post: Post;
  url: string;
}) => {
  if (type === 'post') {
    const { title, description, publishedDate, image, author } = post;
    return `<script type="application/ld+json">
    {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "${url}"
            },
            "headline": "${title}",
            "description": "${description}",
            "image": "${image.src}",
            "author": {
                "@type": "Person",
                "name": "${author}"
            },

            }
            "datePublished": "${publishedDate}",

        }
        </script>`;
  }
  return `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Plumber" ,
        "name": "Cooper & Adlys Plumbing & Heating Ltd.",
        "url": "${import.meta.env.SITE}",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "25 Grosbeak Road",
            "addressLocality": "Elmira",
            "addressRegion": "ON",
            "postalCode": "N3B 1V8",
            "addressCountry": "CA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.5896",
            "longitude": "-80.5747"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-226-220-2782",
            "contactType": "Customer service"
        }
    }
    </script>`;
};

export default jsonLDGenerator;
