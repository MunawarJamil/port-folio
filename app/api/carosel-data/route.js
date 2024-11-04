// app/api/carousel/route.js

export async function GET(request) {
  const carouselData = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quae dolores quos soluta deserunt  consectetur adipisicing elit. Animi, quae dolores quos soluta deserunt  dolorum fugiat molestias blanditiis? Dolorem, nobis recusandae ipsum assumenda omnis quia nostrum quam in obcaecati optio...",
      image: "/carosel1.png",
      alt: "Micheal Johnson",
      name: "Micheal John",
      position: "Director of Alphastream Technologies",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quae dolores quos soluta deserunt  consectetur adipisicing elit. Animi, quae dolores quos soluta deserunt  dolorum fugiat molestias blanditiis? Dolorem, nobis recusandae ipsum assumenda omnis quia nostrum quam in obcaecati optio...",
      image: "/carosel1.png",
      alt: "Sarah Lee",
      name: "Sarah Lee",
      position: "CEO of Tech Solutions",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, quae dolores quos soluta deserunt  consectetur adipisicing elit. Animi, quae dolores quos soluta deserunt  dolorum fugiat molestias blanditiis? Dolorem, nobis recusandae ipsum assumenda omnis quia nostrum quam in obcaecati optio...",
      image: "/carosel1.png",
      alt: "Arslan Tahir",
      name: "Arslan Tahir",
      position: "Senior Manager at Microsoft",
    },
  ];

  return new Response(JSON.stringify(carouselData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
