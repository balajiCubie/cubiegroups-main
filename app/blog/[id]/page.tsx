import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostById, getRelatedPosts, getSeriesPost, getPostsByAuthor, BlogPost } from '../../data/blogData';
import BlogCard from '../../components/shared/BlogCard';
import MarkdownRenderer from '../../components/shared/MarkdownRenderer';
import AuthorBio from '../../components/blog/AuthorBio'; // Import the new component

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostById(params.id);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostById(params.id);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.id);
  const postsByAuthor = getPostsByAuthor(post.author.name);

  // Read markdown content
  const markdownFilePath = path.join(process.cwd(), 'app', 'data', 'blog-posts', `${params.id}.md`);
  let markdownContent = '';
  try {
    markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');
  } catch (error) {
    console.error(`Error reading markdown file for ${params.id}:`, error);
    notFound();
  }

  // Process markdown to extract headings for TOC (ReactMarkdown will handle rendering)
  const headings: { text: string; slug: string; level: number }[] = [];
  // This regex is simplified and assumes clean markdown headings
  markdownContent.replace(/^(##|###)\s(.+)$/gm, (match, levelMarker, text) => {
    const level = levelMarker.length; // 2 for H2, 3 for H3
    const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    headings.push({ text, slug, level });
    return match; // Return original match as ReactMarkdown will process it
  });

  // Determine previous and next posts in series
  let prevPostInSeries: BlogPost | undefined;
  let nextPostInSeries: BlogPost | undefined;

  if (post.series) {
    prevPostInSeries = getSeriesPost(post.series.name, post.series.order - 1);
    nextPostInSeries = getSeriesPost(post.series.name, post.series.order + 1);
  }

  return (
    <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 dark:bg-gray-900 transition-colors duration-300">
      {/* Main content area */}
      <div className="lg:w-3/4 lg:pr-8">
        {/* Header section */}
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors duration-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">{post.title}</h1>

          <div className="flex items-center mb-8">
            <div className="relative h-10 w-10 rounded-full overflow-hidden mr-4">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-sm">
              <p className="text-gray-900 dark:text-white font-medium transition-colors duration-300">{post.author.name}</p>
              <p className="text-gray-500 dark:text-gray-400 transition-colors duration-300">{post.date} · {Math.ceil(markdownContent.split(/\s+/).length / 200)} min read</p>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div
          className="relative w-full h-[400px] rounded-lg overflow-hidden mb-12"
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article content */}
        <MarkdownRenderer content={markdownContent} />

        {/* Tags */}
        <div className="mt-12 mb-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share Options */}
        <div className="flex items-center justify-center space-x-4 py-8 border-t border-b border-gray-200 dark:border-gray-800 mb-16 transition-colors duration-300">
          <span className="text-gray-700 dark:text-gray-300 font-medium">Share this article:</span>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://yourwebsite.com/blog/${post.id}`)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
            aria-label="Share on Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c1.803.99 3.99 1.56 6.29 1.56 7.54 0 11.67-6.25 11.67-11.67 0-.178-.004-.356-.01-.534A8.36 8.36 0 0024 4.98c-.7.31-1.45.52-2.24.61.8-.48 1.4-1.24 1.7-2.14-.75.45-1.58.78-2.46.96-.7-.75-1.7-1.22-2.8-1.22-2.13 0-3.86 1.73-3.86 3.86 0 .3.03.6.08.88C9.1 10.04 5.7 8.2 3.4 5.3c-.3.5-.47 1.08-.47 1.7 0 1.34.68 2.53 1.72 3.22-.63-.02-1.22-.19-1.74-.48v.05c0 1.87 1.33 3.43 3.1 3.78-.32.08-.66.12-1.02.12-.25 0-.49-.02-.73-.07.49 1.53 1.9 2.64 3.57 2.67-1.32 1.03-2.98 1.65-4.8 1.65-.3 0-.6-.02-.89-.06 1.7 1.09 3.72 1.73 5.88 1.73"></path>
            </svg>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yourwebsite.com/blog/${post.id}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 dark:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="Share on Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 12h-2v-2h2v2zm0 4h-2v-2h2v2zm-2-10V6h2v2h-2zm8-2v14c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2zM6 4h12v14H6V4z"></path>
            </svg>
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://yourwebsite.com/blog/${post.id}`)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:text-blue-900 dark:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
            aria-label="Share on LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.956v5.657H9.596V9.092h3.416v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.785 13.019H3.55v-11.63h3.572v11.63zM22.227 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.456c.98 0 1.772-.773 1.772-1.729V1.729C24 .774 23.207 0 22.227 0z"></path>
            </svg>
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Check out this article: ${post.title} - https://yourwebsite.com/blog/${post.id}`)}`}
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
            aria-label="Share via Email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V18a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
        </a>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="border-t border-gray-200 dark:border-gray-800 pt-12 transition-colors duration-300">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <BlogCard
                key={relatedPost.id}
                id={relatedPost.id}
                title={relatedPost.title}
                excerpt={relatedPost.excerpt}
                coverImage={relatedPost.coverImage}
                date={relatedPost.date}
                author={relatedPost.author}
                index={index}
              />
            ))}
          </div>
        </div>
      )}

      {/* Author Bio Box */}
      <AuthorBio author={post.author} postsByAuthorCount={postsByAuthor.length} />

      {/* Series Navigation */}
      {post.series && (
        <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Part of the "{post.series.name}" Series
          </h2>
          <div className="flex justify-between items-center">
            {prevPostInSeries && (
              <Link href={`/blog/${prevPostInSeries.id}`} className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <span>Previous: {prevPostInSeries.title}</span>
              </Link>
            )}
            {nextPostInSeries && (
              <Link href={`/blog/${nextPostInSeries.id}`} className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 ml-auto">
                <span>Next: {nextPostInSeries.title}</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            )}
          </div>
        </div>
      )}
      </div>

      {/* Table of Contents Sidebar */}
      {headings.length > 0 && (
        <div className="lg:w-1/4 lg:pl-8 mt-12 lg:mt-0">
          <div className="sticky top-24 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h3>
            <nav>
              <ul className="space-y-2">
                {headings.map((heading) => (
                  <li key={heading.slug} className={heading.level === 3 ? 'ml-4' : ''}>
                    <a
                      href={`#${heading.slug}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm transition-colors duration-300"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
