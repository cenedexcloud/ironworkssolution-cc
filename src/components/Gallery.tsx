"use client"

interface GalleryItem {
  id: number
  image: string
  title: string
  category: string
  rotate?: boolean
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/uploads/1000002790.jpg",
    title: "Interior Geometric Railing",
    category: "Style"
  },
  {
    id: 2,
    image: "/uploads/1000002852.jpg",
    title: "Outdoor Spiral Staircase - In Progress",
    category: "Material"
  },
  {
    id: 3,
    image: "/uploads/1000002498.jpg",
    title: "Outdoor Spiral Staircase Installation",
    category: "City"
  },
  {
    id: 4,
    image: "/uploads/1000002796.jpg",
    title: "Modern Interior Staircase",
    category: "Style"
  },
  {
    id: 5,
    image: "/uploads/1000013695.jpg",
    title: "Decorative Balcony Railing",
    category: "Style",
    rotate: true
  },
  {
    id: 6,
    image: "/uploads/1000000182.jpg",
    title: "Interior Staircase with Wood Finish",
    category: "Material"
  },
  {
    id: 7,
    image: "/uploads/1000006660.jpg",
    title: "Modern Residential Exterior",
    category: "City",
    rotate: true
  },
  {
    id: 8,
    image: "/uploads/1000013698.jpg",
    title: "Contemporary Staircase Design",
    category: "Style",
    rotate: true
  },
  {
    id: 9,
    image: "/uploads/1000001491.jpg",
    title: "Patio Balcony with Plants",
    category: "City"
  },
  {
    id: 10,
    image: "/uploads/1000002197.jpg",
    title: "Architectural Metal Staircase",
    category: "Material",
    rotate: true
  },
  {
    id: 11,
    image: "/uploads/1000000637.jpg",
    title: "Modern Driveway Gate Design",
    category: "City",
    rotate: true
  }
]

export default function Gallery() {
  return (
    <section className="py-24 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f8f6f3] mb-4">
            See Our Work
          </h2>
          <div className="w-24 h-1 bg-[#C41E3A] mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  imageOrientation: 'from-image',
                  transform: item.rotate ? 'rotate(90deg)' : 'none'
                }}
              />

              {/* Light Glint Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{ transform: 'translateX(-100%) rotate(45deg)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
