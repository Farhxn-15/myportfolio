import React from "react";

// Import your certificate images
import c1 from "../../Assets/c1.jpg";
import c2 from "../../Assets/c2.jpg";
import c3 from "../../Assets/c3.jpg";
import c4 from "../../Assets/c4.jpg";
import c5 from "../../Assets/c5.jpg";

function Certificates() {
  const certificates = [
    {
      name: "Introduction to Mathematical Thinking",
      link: "https://smartexam-mum.s3.amazonaws.com/moocsnewdetails/ImageFile/TS034451510388071683883074.pdf",
      duration: "32 Hours",
      imageUrl: c1,
    },
    {
      name: "Programming Fundamentals",
      link: "https://smartexam-mum.s3.amazonaws.com/moocsnewdetails/ImageFile/TS034451510372021683883195.pdf",
      duration: "16 Hours",
      imageUrl: c2,
    },
    {
      name: "Python Data Structures",
      link: "https://smartexam-mum.s3.amazonaws.com/moocsnewdetails/ImageFile/TS034451510358831713523884.pdf",
      duration: "16 Hours",
      imageUrl: c3,
    },
    {
      name: "Introduction to Data Science in Python",
      link: "https://smartexam-mum.s3.amazonaws.com/moocsnewdetails/ImageFile/TS034451510356461713524018.pdf",
      duration: "32 Hours",
      imageUrl: c4,
    },
    {
      name: "AI Agents for Everyone and Artificial Intelligence Bootcamp",
      link: "https://smartexam-mum.s3.amazonaws.com/moocsnewdetails/ImageFile/TS034451510580701747651564.pdf",
      duration: "32 Hours",
      imageUrl: c5,
    },
  ];

  return (
    <div className="certificates-page" style={{ paddingTop: "90px", position: "relative", zIndex: 2 }}>
      {/* Styled title similar to Projects.js */}
      <h1 className="project-heading">
        My <strong className="purple">Certificates</strong>
      </h1>

      <p style={{ color: "white" }}>
        Here are some of the certificates and courses I have completed.
      </p>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {certificates.map((cert, idx) => (
          <li key={idx} style={{ marginBottom: "3rem", color: "white" }}>
            <h3 style={{ color: "#ccc" }}>{cert.name}</h3>
            <img
              src={cert.imageUrl}
              alt={`${cert.name} certificate`}
              style={{ maxWidth: "100%", height: "auto", marginTop: "0.5rem", borderRadius: "8px" }}
            />
            <div style={{ marginTop: "0.5rem" }}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0d6efd", textDecoration: "underline" }}
              >
                View Certificate
              </a>
            </div>
            <div style={{ marginTop: "0.25rem", fontStyle: "italic", color: "#aaa" }}>
              Duration: {cert.duration}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certificates;
