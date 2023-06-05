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

            },
            "datePublished": "${publishedDate}",

        }
        </script>`;
  }
  return `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "${siteData.title}",
        "url": "${import.meta.env.SITE}"
    },
    </script>`;
};

export default jsonLDGenerator;
