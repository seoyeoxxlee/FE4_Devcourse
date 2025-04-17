import ProfileCard from "./components/ProfileCard";
import Button from "./components/Button";
function Text() {
  return <strong>Hello</strong>;
}

export default function App () {
  return (
    <>
      <ProfileCard 
        bg="https://images.pexels.com/photos/158251/forest-the-sun-morning-tucholskie-158251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        userImg="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        uname="Sally Ramos"
        instaId="@sallytheramos"
        onClick={() => alert("Follow")}
      />

      <ProfileCard 
        bg="https://cdn.pixabay.com/photo/2023/10/06/08/16/lavender-8297714_1280.jpg"
        userImg="https://cdn.pixabay.com/photo/2017/03/21/15/08/child-2162410_640.jpg"
        uname="Anna"
        instaId="@annaaaaa"
        onClick={() => alert("Follow")}
      />

      <Button type="button">
        <Text />
      </Button>
    </>
  );
}
