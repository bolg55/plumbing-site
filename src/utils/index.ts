import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
};

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const formatBlogPosts = (
  posts: any[],
  {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    sortByDate = true,
    limit,
  }: {
    filterOutDrafts?: boolean;
    filterOutFuturePosts?: boolean;
    sortByDate?: boolean;
    limit?: number;
  } = {}
) => {
  const filteredPosts = posts.reduce((acc, post) => {
    const { publishedDate, isDraft } = post.data;

    if (filterOutDrafts && isDraft) return acc;

    if (filterOutFuturePosts && new Date(publishedDate) > new Date())
      return acc;

    // add post to the list
    acc.push(post);

    return acc;
  }, []);

  // sort posts by date or randomize
  if (sortByDate) {
    filteredPosts.sort(
      (
        a: { data: { publishedDate: string | number | Date } },
        b: { data: { publishedDate: string | number | Date } }
      ) => {
        const aDate = new Date(a.data.publishedDate);
        const bDate = new Date(b.data.publishedDate);

        return bDate.getTime() - aDate.getTime();
      }
    );
  } else {
    filteredPosts.sort(() => Math.random() - 0.5);
  }

  // limit the number of posts
  if (typeof limit === 'number') {
    return filteredPosts.slice(0, limit);
  }

  return filteredPosts;
};

export const remarkReadingTime = () => {
  return function (tree: unknown, { data }: any) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
};
