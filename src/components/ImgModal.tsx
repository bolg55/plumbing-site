import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

interface ImgModalProps {
  isOpen: boolean;
  currentIndex: number;
  galleryImages: { img: string; alt: string }[];
  closeModal: () => void;
  nextSlide: () => void;
  prevSlide: () => void;
}

const ImgModal = ({
  isOpen,
  currentIndex,
  galleryImages,
  closeModal,
  nextSlide,
  prevSlide,
}: ImgModalProps) => {
  if (!isOpen) return null;

  return (
    <div className='fixed z-50 inset-0 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block'>
        <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
          <div
            onClick={closeModal}
            className='absolute inset-0 bg-gray-900 opacity-90  hover:cursor-pointer'
          />
        </div>

        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>

        <div
          className='inline-block align-bottom bg-medium-gray/20  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'
        >
          <div className='bg-medium-gray/20  items-start flex-row-reverse justify-between align-middle px-4 py-3 sm:px-6 flex'>
            <button type='button' onClick={closeModal}>
              <XMarkIcon className='h-6 w-6 text-almost-white hover:text-almost-white/80' />
            </button>

            <div className='flex items-center justify-center space-x-8 align-middle '>
              <button
                type='button'
                className='flex order-1 text-almost-white hover:text-almost-white/80'
                onClick={prevSlide}
              >
                <ChevronLeftIcon className='h-6 w-6' />
                Previous
              </button>
              <button
                type='button'
                className='flex order-2 text-almost-white hover:text-almost-white/80'
                onClick={nextSlide}
              >
                Next <ChevronRightIcon className='h-6 w-6' />
              </button>
            </div>
          </div>
          <div className='px-2 py-2'>
            <div className='sm:flex sm:items-start'>
              <div className=' text-center sm:mt-0 sm:text-left'>
                <div className='mt-2'>
                  <img
                    className='rounded shadow hover:scale-105 transform transition duration-500 ease-in-out cursor-pointer min-h-full'
                    src={galleryImages[currentIndex].img}
                    alt={galleryImages[currentIndex].alt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImgModal;
