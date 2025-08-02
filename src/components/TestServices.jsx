import React from "react";
import { MdDesignServices, MdOutlineSupportAgent } from "react-icons/md";
import { FaCode, FaRegObjectGroup } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { TbDeviceMobileCode } from "react-icons/tb";
import "../index.css";

const iconStyle = {
  color: "#3b82f6",
  fontSize: "2.5rem",
  marginBottom: "18px",
};

const testServices = [
  {
    icon: <MdDesignServices style={iconStyle} />,
    title: "Creative Design",
    desc: "The creative design that combines technological expertise and user-friendly experiences.",
  },
  {
    icon: <FaCode style={iconStyle} />,
    title: "Clean Code",
    desc: "I excel at writing clean and organized code. I pay attention to details and adopt best practices in writing code to ensure high performance and reduce programming errors.",
  },
  {
    icon: <TbDeviceMobileCode style={iconStyle} />,
    title: "Responsive Design",
    desc: "I have skills in designing responsive interfaces, where I ensure that websites and applications work perfectly on various devices and screens.",
  },
  {
    icon: <FaRegObjectGroup style={iconStyle} />,
    title: "Material UI",
    desc: "I excel at designing the physical user interface using design principles. Incorporate clean, user-friendly visual elements to create smooth, modern user experiences.",
  },
  {
    icon: <BsFillGrid3X3GapFill style={iconStyle} />,
    title: "Material UI Icons",
    desc: "I have experience using Material UI icons to provide a visual and engaging user experience. I make use of these various icons to clarify functions and facilitate interaction with the application, which enhances ease of use and consistent design.",
  },
  {
    icon: <MdOutlineSupportAgent style={iconStyle} />,
    title: "Awesome Support",
    desc: "I provide great support to ensure a smooth and efficient user experience. I respond quickly to resolve issues and provide assistance, focusing on customer satisfaction and continuous performance improvement of applications and websites.",
  },
];

export default function TestServices() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "40px 20px", // ✅ الحل هنا فقط
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#fff",
          fontSize: "2.5em",
          marginBottom: "40px",
          fontWeight: "bold",
        }}
      >
        Services
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {testServices.map((service, idx) => (
          <div
            key={idx}
            style={{
              background: "#181b20",
              color: "#fff",
              borderRadius: "12px",
              padding: "40px 30px",
              minHeight: "220px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            {service.icon}
            <h3 style={{ margin: "0 0 15px 0", fontWeight: "bold" }}>
              {service.title}
            </h3>
            <p style={{ color: "#b0b0b0" }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
