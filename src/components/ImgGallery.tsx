import { useState } from 'react';
import ImgModal from './ImgModal';
import GalleryGrid from './GalleryGrid';

interface ImgGalleryProps {
  galleryImages: { img: string; alt: string }[];
}

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextSlide = (galleryImagesLength: number) => {
    setCurrentIndex((currentIndex) => (currentIndex + 1) % galleryImagesLength);
  };

  const prevSlide = (galleryImagesLength: number) => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? galleryImagesLength - 1 : currentIndex - 1
    );
  };

  return { isOpen, currentIndex, openModal, closeModal, nextSlide, prevSlide };
};

const ImgGallery = ({ galleryImages }: ImgGalleryProps) => {
  const { isOpen, currentIndex, openModal, closeModal, nextSlide, prevSlide } =
    useModal();

  return (
    <div>
      <ImgModal
        isOpen={isOpen}
        currentIndex={currentIndex}
        galleryImages={galleryImages}
        closeModal={closeModal}
        nextSlide={() => nextSlide(galleryImages.length)}
        prevSlide={() => prevSlide(galleryImages.length)}
      />

      <GalleryGrid galleryImages={galleryImages} openModal={openModal} />
    </div>
  );
};
export default ImgGallery;
