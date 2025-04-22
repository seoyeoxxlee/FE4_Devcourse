import { useRef, useState } from "react";

export default function Sustagram() {
  const [picture, setPicture] = useState([
    {
      index: 0,
      src: "https://dummyimage.com/600x400/000/fff&text=0",
    },
    {
      index: 1,
      src: "https://dummyimage.com/600x400/000/fff&text=1",
    },
    {
      index: 2,
      src: "https://dummyimage.com/600x400/000/fff&text=2",
    },
    {
      index: 3,
      src: "https://dummyimage.com/600x400/000/fff&text=3",
    },
    {
      index: 4,
      src: "https://dummyimage.com/600x400/000/fff&text=4",
    },
    {
      index: 5,
      src: "https://dummyimage.com/600x400/000/fff&text=5",
    },
  ]);

  // 삭제된 사진을 모아둘 배열 변수 deletedImage
  const deletedImage = useRef<{ index: number; src: string }[]>([]);
  // 몇 번째 사진을 삭제할 지 매개변수로 받고
  const deletePicutreHandler = (index: number) => {
    // 기존에 삭제된 사진들 + 방금 삭제한 사진 -> 새 배열로 저장
    // deletedImgae.current로 useRef([]) 배열에 접근
    // 삭제된 인덱스의 picture는 deletedImage.current에 저장됨
    deletedImage.current = [...deletedImage.current, picture[index]];
    // 실제로 화면에서 사진 삭제
    // array.filter((value, index) => 조건)
    // value 안 쓰니까 생략기호 _ , 
    // 삭제하려는 index만 제외하고 나머지만 남겨
    setPicture((picture) => picture.filter((_, i) => i !== index));
  };

  // 사진 복구
  const recoveryPicutre = () => {
    // 삭제된 사진이 없으면 (복구할 사진이 없으면)
    if (deletedImage.current.length === 0) return;
    // 비구조화 할당 -> 가장 앞에 있는 사진을 삭제된 사진 배열에서 하나 꺼내고, 나머지는 그대로 둠
    const [recoveryPic, ...remainPicture] = deletedImage.current;
    deletedImage.current = remainPicture;
    // [기존 사진에 복구된 사진을 추가한 새 배열].sort(사진이 순서대로 정렬되도록)
    setPicture((picture) =>
      [...picture, recoveryPic].sort((a, b) => a.index - b.index)
    );
  };


  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">SUSTAGRAM</h1>
        {/* More Buttons */}
        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
            onClick={recoveryPicutre}
          >
            <img src="/undo.svg" alt="Moon icon" className="h-5 w-5" />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {picture.map((value, index) => (
          <div className="group relative" key={value.index}>
            <a className="group" href="#">
              <img
                src={value.src}
                width="400"
                height="400"
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition-opacity"
                style={{ aspectRatio: "400 / 400", objectFit: "cover" }}
              />
            </a>
            
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-600 h-10 w-10 absolute top-2 right-2 rounded-full"
              onClick={() => deletePicutreHandler(index)}
            >
              <img src="/delete.svg" alt="Delete icon" className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
