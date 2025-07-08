import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getPostsByAuthor } from '../../../data/blogData';
import BlogCard from '../../../components/shared/BlogCard';
import AuthorBio from '../../../components/blog/AuthorBio';

interface AuthorPageProps {
  params: {
    name: string;
  };
}

export async function generateStaticParams() {
  const authors = new Set(blogPosts.map(post => post.author.name));
  return Array.from(authors).map(name => ({
    name: encodeURIComponent(name),
  }));
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const authorName = decodeURIComponent(params.name);
  const posts = getPostsByAuthor(authorName);

  if (posts.length === 0) {
    return {
      title: 'Author Not Found',
      description: 'The author you are looking for does not exist or has no posts.',
    };
  }

  const author = posts[0].author; // Get author details from the first post

  return {
    title: `${author.name}'s Posts | Blog`,
    description: author.bio || `Posts by ${author.name}`,
  };
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const authorName = decodeURIComponent(params.name);
  const posts = getPostsByAuthor(authorName);

  if (posts.length === 0) {
    notFound();
  }

  const author = posts[0].author; // Author details are consistent across their posts

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-gray-900 transition-colors duration-300">
      <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors duration-300">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Blog
      </Link>

      <AuthorBio author={author} postsByAuthorCount={posts.length} />

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          All Posts by {author.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
