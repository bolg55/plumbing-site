import ComingSoon from './ComingSoon';

interface GalleryGridProps {
  galleryImages: { img: string; alt: string }[];
  openModal: (index: number) => void;
}

const GalleryGrid = ({ galleryImages, openModal }: GalleryGridProps) => {
  if (!galleryImages || galleryImages.length === 0) return <ComingSoon />;
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-32 mt-16 max-w-7xl mx-auto px-2'>
      {galleryImages.map(({ img, alt }, index) => (
        <div
          className='aspect-h-4 aspect-w-4 overflow-hidden'
          key={index}
          onClick={() => openModal(index)}
        >
          <img
            className='rounded shadow hover:scale-110 transform transition duration-500 ease-in-out cursor-pointer object-cover object-center'
            src={img}
            alt={alt}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
