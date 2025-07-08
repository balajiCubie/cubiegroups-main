import { investorsData } from '@/app/data/investorsData';

export async function generateStaticParams() {
  return investorsData.map((investor) => ({
    slug: investor.slug,
  }));
}

export default function InvestorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
