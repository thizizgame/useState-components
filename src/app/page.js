import { Box, Round, Card, Menu } from "./components";

const Home = () => {
  const cardData = [
    {
      title: "fskfds",
      image: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNDktMjIucG5n.png",
      date: "January",
      description: "dsghsgksjgs"
    },
    {
      title: "fskfds",
      image: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNDktMjIucG5n.png",
      date: "January",
      description: "dsghsgksjgs"
    }
  ]
  return (
    <div className="bg-white p-0 m-0 h-screen text-black">
      <div className="flex justify-between pl-10 pr-10 bg-amber-200 w-full h-20">
        <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNDktMjIucG5n.png"></img>
        <div className="flex text-black list-none">
         <Menu title="Home"></Menu>
         <Menu title="About"></Menu>
         <Menu title="Contact"></Menu>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl pb-10">Welcome to Simple Blog</h1>
        <h2>
          Discover insightful articles about web development, programming, and
          technology. Clean design meets quality content.
        </h2>
      </div>
      <h2 className="text-center pt-15">Latest Posts</h2>
      <div className="flex flex-wrap justify-center gap-4">
        
        {cardData.map((el) => {
          return  <Card data={el}></Card>
        })}
      </div>
    </div>
  );
};

export default Home;
