import { db } from "~/server/db";

const mockUrls = [
    // 'https://utfs.io/f/3eaae30c-7faf-4a79-8291-575a2f32ee96-isksyw.21.20.png',
    // 'https://utfs.io/f/dc81acd6-f606-4ae8-ae53-713893a6e1c2-1m27qa.png',
    // 'https://utfs.io/f/7a71368a-27ac-4008-be7a-bc2fa9cc8a60-isksyv.46.51.png',
    // 'https://utfs.io/f/57b157b8-5a5d-446e-8897-cdab4af9a3c2-o3pz2i.png',

    // 'https://utfs.io/f/57b157b8-5a5d-446e-8897-cdab4af9a3c2-o3pz2i.png',
    // 'https://utfs.io/f/57b157b8-5a5d-446e-8897-cdab4af9a3c2-o3pz2i.png',
    // 'https://utfs.io/f/57b157b8-5a5d-446e-8897-cdab4af9a3c2-o3pz2i.png',
    // 'https://utfs.io/f/57b157b8-5a5d-446e-8897-cdab4af9a3c2-o3pz2i.png',

    'https://placehold.co/320x200',
    'https://placehold.co/320x200',
    'https://placehold.co/320x200',
    'https://placehold.co/320x200',
];

const mockImages = [...mockUrls, ...mockUrls, ...mockUrls, ].map((url, index) => ({
  id: index+1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map(post => (
            <div key={post.id}>{post.name}</div>
          ))
        }
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.url} alt="" />
          </div>
          ))}
      </div>
    </main>
  );
}
