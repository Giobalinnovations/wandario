import DestinationContentSkeleton from '@/components/skeletons/destination-content-skeleton';
import { getDestinationById } from '@/server/db/destination';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import DestinationDetails from '@/components/destination-details';

export const generateMetadata = async (props: {
  params: Promise<{ destId: string }>;
}) => {
  const params = await props.params;
  const destination = await getDestinationById(params.destId);
  if (!destination) {
    return { title: 'Destination Not Found' };
  }
  return {
    title: destination?.metaTitle ?? '',
    description: destination?.metaDescription ?? '',
    keywords: destination?.metaKeywords ?? '',
    metadataBase: new URL('https://www.wandario.com'),
    alternates: {
      canonical: `/destinations/${destination.slug}`,
    },
  };
};

export default async function DestinationDetailsPage(props: {
  params: Promise<{ destId: string }>;
}) {
  const params = await props.params;
  const destination = await getDestinationById(params.destId);

  if (!destination) {
    notFound();
  }

  return (
    <Suspense fallback={<DestinationContentSkeleton />}>
      <DestinationDetails destination={destination} />
    </Suspense>
  );
}
