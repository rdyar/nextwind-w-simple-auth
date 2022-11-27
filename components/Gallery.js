import { useState } from 'react'

const images = [
  {
    src: 'https://placekitten.com/g/700/400',
    alt: "Who deosn't like kittens?",
    description: 'Kittens via placekitten.com.',
  },
  {
    src: 'https://placekitten.com/g/705/400',
    alt: "Who deosn't like kittens?",
    description: '2 Kittens via placekitten.com.',
  },
  {
    src: 'https://placekitten.com/g/710/400',
    alt: "Who deosn't like kittens?",
    description: '3 Kittens via placekitten.com.',
  },
]

const Gallery = () => {
  const [image, setImage] = useState(0)
  const handlePrevious = () => {
    console.log('image :>> ', image)
    image === 0 ? setImage(images.length - 1) : setImage(image - 1)
    console.log('image :>> ', image)
  }
  const handleNext = () => {
    console.log('image :>> ', image)
    image === images.length - 1 ? setImage(0) : setImage(image + 1)
    console.log('image :>> ', image)
  }
  return (
    <div className="mt-12">
      <div className="mx-auto">
        <img
          src={images[image].src}
          className="mx-auto"
          alt={images[image].alt}
        />
        <p className="mx-auto max-w-[700px] pt-2 text-center">
          {images[image].description}
        </p>
      </div>
      <div className="mx-auto mt-8 flex max-w-sm justify-between ">
        <button className="btn-secondary" onClick={handlePrevious}>
          {' '}
          ❮ Previous{' '}
        </button>
        <span className="grow px-12 pt-2 text-center">{`${image + 1} of ${
          images.length
        }`}</span>
        <button className="btn-secondary" onClick={handleNext}>
          {' '}
          Next ❯{' '}
        </button>
      </div>
    </div>
  )
}

export default Gallery
