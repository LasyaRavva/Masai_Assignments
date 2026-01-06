import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter, Button } from '../ui/index.js'

export function ImageSlideshow() {
  const images = [
    'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Image Slideshow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative bg-slate-100 rounded-lg overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-4 justify-between">
          <Button onClick={goToPrevious} variant="outline">
            ← Previous
          </Button>
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-slate-800' : 'bg-slate-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <Button onClick={goToNext} variant="outline">
            Next →
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
