

interface ImgGalleryProps {
  galleryImages: string[];
}

const ImgGallery = ({ galleryImages }: ImgGalleryProps) => {
  return (
   galleryImages.map(({img,alt}) => (
    <img src={img} alt={alt} />
  )
  )
  )
}
export default ImgGallery