const mockUrls = [
    // 'https://utfs.io/f/3eaae30c-7faf-4a79-8291-575a2f32ee96-isksyw.21.20.png',
    // 'https://utfs.io/f/dc81acd6-f606-4ae8-ae53-713893a6e1c2-1m27qa.png',
    // 'https://utfs.io/f/7a71368a-27ac-4008-be7a-bc2fa9cc8a60-isksyv.46.51.png',
    'https://utfs.io/f/57b157b8-5a5d-446e-8897-cdab4af9a3c2-o3pz2i.png',
    'https://utfs.io/f/57b157b8-5a5d-446e-8897-cdab4af9a3c2-o3pz2i.png',
    'https://utfs.io/f/57b157b8-5a5d-446e-8897-cdab4af9a3c2-o3pz2i.png',
    'https://utfs.io/f/57b157b8-5a5d-446e-8897-cdab4af9a3c2-o3pz2i.png',
];

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
          ))}
      </div>
    </main>
  );
}
