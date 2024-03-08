import Image from "next/image";
import React from "react";
import img1 from "../../../public/me.png";
import img2 from '../../../public/background.jpg';

const Aboutpage = () => {

    interface MyStyleType {
        backgroundImage: string;
        objectfit: string;
      }


  return (
    <div className="flex flex-col md:flex-row 2xl:h-screen p-4">
      <div className="mb-4 ml-18 md:w-2/3 lg:w-1/3">
        <Image src={img1} alt="" width={150} height={150} className="rounded-md md:h-96 md:w-60 2xl:h-[400px] 2xl:w-[300px]" />
      </div>
      <div className="text-sm 2xl:text-base text-primary font-medium md:w-full">
        <p>
          Welcome to <b>QUICKIES</b>, where a symphony of culinary delights
          harmonizes with an effortlessly streamlined online experience! Meet
          the creative genius behind the scenes—our exceptional frontend
          developer, <b>Aniket Vishnoi</b>. Armed with an arsenal of
          cutting-edge skills, <b>Aniket Vishnoi</b> has meticulously woven
          together Next.js, TypeScript, HTML, and the enchanting Tailwind CSS to
          conjure up an online haven thats as pleasing to the eyes as it is
          functional.
        </p>
        <br/>
        <p>
          A virtuoso in the languages of JavaScript, CSS, and React.js,
          <b>Aniket Vishnoi</b> artfully navigates the intricacies of modern web
          development. The beating heart of our website lies in the
          sophisticated Redux Toolkit, ensuring a seamless and dynamic user
          journey. Welcome to a culinary adventure divided into three realms:
          Pizza, Burgers, and Pasta—all presented through an interface thats as
          intuitive as it is stunning.
        </p>
        <br/>
        <p>
          But <b>Quickies</b> is not just a feast for the taste buds;
          its a visual and interactive delight.Navigate effortlessly
          through our diverse menu and keep track of your culinary selections
          with the user-friendly cart feature.
        </p>
        <br/>
        <p>
          Beyond the frontend finesse, <b>Aniket Vishnoi</b> extends their mastery to
          backend technologies, incorporating the robust Google Firebase for a
          secure and scalable infrastructure. Proficient in the art of
          object-oriented programming (OOP), <b>Aniket Vishnoi</b> brings a holistic
          approach to web development, striking a perfect balance between
          aesthetics and functionality.
        </p>
        <br/>
        <p>
          Indulge your senses in the seamless fusion of flavor and technology at
          <b>QUICKIES</b>. Join us on this gastronomic journey curated
          by <b>ANIKET VISHNOI</b>, your guide through the realms of Next.js, TypeScript,
          Tailwind CSS, and more. As you place your order, savor the exquisite
          blend of technology and taste, elevating your online dining experience
          to new heights.
        </p>
      </div>
    </div>
  );
};

export default Aboutpage;
