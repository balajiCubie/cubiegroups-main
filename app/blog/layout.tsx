export const metadata = {
  title: 'Blog | Cubie Group\'s',
  description: 'Read the latest articles on web development, design, and technology',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
