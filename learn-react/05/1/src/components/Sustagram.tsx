export default function Sustagram() {
    const images = [
      "https://cdn.pixabay.com/photo/2025/03/02/21/32/eurasier-aloha-puppy-9442845_640.jpg",
      "https://media.istockphoto.com/id/1283550298/ko/%EC%82%AC%EC%A7%84/%EC%84%9C%ED%94%84%EB%9D%BC%EC%9D%B4%EC%A6%88-%EB%B9%99%ED%95%98-%EC%95%9E%EC%97%90%EC%84%9C-%EC%96%BC%EC%9D%8C-%EC%9C%84%EC%97%90-%EC%9E%88%EB%8A%94-%EB%B0%94%EB%8B%A4-%EC%88%98%EB%8B%AC-%EC%97%94%ED%9E%88%EB%93%9C%EB%9D%BC-%EB%A3%A8%ED%8A%B8%EB%A6%AC%EC%8A%A4-%ED%94%84%EB%A6%B0%EC%8A%A4-%EC%9C%8C%EB%A6%AC%EC%97%84-%EC%82%AC%EC%9A%B4%EB%93%9C-%EC%95%8C%EB%9E%98%EC%8A%A4%EC%B9%B4-%EB%B9%99%ED%95%98%EC%97%90%EC%84%9C-%EC%96%BC%EC%9D%8C-%EC%9C%84%EC%97%90-%EB%88%84%EC%9B%8C-%EC%9E%88%EB%8A%94-%EA%B2%83.jpg?s=1024x1024&w=is&k=20&c=ubQE5OjyjnW9PxGwxsqURauNd6bUXMl4q0JXmoom5qw=",
      "https://cdn.pixabay.com/photo/2022/03/25/23/15/shetland-ponies-7091959_640.jpg",
      "https://cdn.pixabay.com/photo/2023/06/01/06/22/british-shorthair-8032816_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/03/31/22/58/calf-2192609_640.jpg",
      "https://cdn.pixabay.com/photo/2019/10/27/12/29/duck-4581608_640.jpg",
    ]
    
    return (
      <div className="w-full max-w-4xl mx-auto py-6 px-4">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
          {/* More Buttons */}
        </header>
  
        <div className="grid grid-cols-3 gap-4">
          {images.map((url, index) => (
            <a key={index} className="group" href="#">
              <img
                src={url}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }