import "./Sevrvices.css";
import Box from "../Box/Box";
export default function Services() {
  let service = [
    {
      id : 1,
      serviceIcon: "bi bi-camera-reels-fill",
      serviceTitle: "WEB DESIGN",
      serviceDesc:
        "(1)Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perferendis modi repellat ipsum culpa cupiditate alias magnam sed laborum vero, accusantium optio harum animi eaque. Dicta harum praesentium ullam totam",
    },

    {
      id : 2,
      serviceIcon: "bi bi-card-text",
      serviceTitle: "WEB DEVELOPMENT",
      serviceDesc:
        "(2)Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perferendis modi repellat ipsum culpa cupiditate alias magnam sed laborum vero, accusantium optio harum animi eaque. Dicta harum praesentium ullam totam",
    },

    {
      id : 3,
      serviceIcon: "bi bi-code-square",
      serviceTitle: "PHOTOGRAPHY",
      serviceDesc:
        "(3)Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perferendis modi repellat ipsum culpa cupiditate alias magnam sed laborum vero, accusantium optio harum animi eaque. Dicta harum praesentium ullam totam",
    },
    {
      id : 4,
      serviceIcon: "bi bi-cloud-sleet-fill",
      serviceTitle: "ME",
      serviceDesc:
        "(4)Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perferendis modi repellat ipsum culpa cupiditate alias magnam sed laborum vero, accusantium optio harum animi eaque. Dicta harum praesentium ullam totam",
    },
    {
      id : 5,
      serviceIcon: "bi bi-cloud-plus",
      serviceTitle: "YOU",
      serviceDesc:
        "(5)Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perferendis modi repellat ipsum culpa cupiditate alias magnam sed laborum vero, accusantium optio harum animi eaque. Dicta harum praesentium ullam totam",
    },
    {
      id : 6,
      serviceIcon: "bi bi-clipboard2-heart",
      serviceTitle: "US",
      serviceDesc:
        "(6)Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perferendis modi repellat ipsum culpa cupiditate alias magnam sed laborum vero, accusantium optio harum animi eaque. Dicta harum praesentium ullam totam",
    },
  ];
  return (
    <>
      <section className="services-container">
        <h1 className="services-title"> SERVICES</h1>
        <p>lorem ipsom, dolor sit amet consectetur adipicing elit</p>
        <div className="boxes">
          { service.map(user => <Box key = {user.id} {...user} />) }
        </div>
      </section>
    </>
  );
}
