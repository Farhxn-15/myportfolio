import React from "react";

// Import your certificate images
import c1 from "../../Assets/c1.jpg";
import c2 from "../../Assets/c2.jpg";
import c3 from "../../Assets/c3.jpg";
import c4 from "../../Assets/c4.jpg";
import c5 from "../../Assets/c5.jpg";
import c6 from "../../Assets/c6.jpg";

function Certificates() {
  const certificates = [
    {
      name: "Introduction to Mathematical Thinking",
      link: "https://coursera.org/share/005fc8b2e5421e88e7c4b062d4fb8e6d",
      duration: "32 Hours",
      imageUrl: c1,
    },
    {
      name: "Programming Fundamentals",
      link: "https://coursera.org/share/e0c29bfaa55ed93bab0cd70d1e9fc4c1",
      duration: "16 Hours",
      imageUrl: c3,
    },
    {
      name: "Python Data Structures",
      link: "https://coursera.org/share/996fc0b6344ebe3dcf4a13424318e14e",
      duration: "16 Hours",
      imageUrl: c5,
    },
    {
      name: "Introduction to Data Science in Python",
      link: "https://coursera.org/share/e1918f55f0a9fa225e9b3e41e5d57667",
      duration: "32 Hours",
      imageUrl: c4,
    },
    {
      name: "Master Prompt Engineering for Generative Ai Course",
      link: "https://e2.udemymail.com/ls/click?upn=u001.TtzRjPf63yUg9yrAxgqE7735MMJ3LdrdgxmaXqQZmIc8-2BXhXuFov1RMrFm6kMvvB-2FYR2gWqjftJrlaJPxhdSW2mEda1So-2B55cYR9zpW9aIiMsYAcXfOzpJxbZujD9sxTLYtjKjHdQD9d3P9I45hMPAKnP1yHe-2F3moYMdcxxAXLuuj9Dpd0CDQe9ww8pWC6UGZ_vS_qtKO6Kc2NLxBiAdgyCFdYkxvw9Rqq0iq0aBWRqJKI45ERKYmPLhYKZN-2FxXq5juuY2ccpYmfBkktwtPsq0v4GEdFE-2FrdAM8-2FeoNhCNqvBghgXAxfTsAmIAnA41B90fd4cIoi2-2FqSsGloRn3esxEwK6LvzR-2BQwXnfeC3p1-2Bki5Gpoh2KwaVqSHs8oVgvqS0pz7rkyheVXxR8uh8zHo7-2BdQOZS8xxrHqRGw7CRejl9pW0tr-2BWs4aH2hAvWw3rPsDFmm-2BBYfkbjfpliWvqPFWfQbheth4ErD4-2F38gVxdHeccW8-2Fy94VcRDq-2F5RmdrSPriBl700OgbqAghrBmtrv2oGUx5nJvOZgTs-2FxJaPh4ljMionk-3D",
      duration: "32 Hours",
      imageUrl: c6,
    },
    {
      name: "AI Agents for Everyone and Artificial Intelligence Bootcamp",
      link: "https://e2.udemymail.com/ls/click?upn=u001.TtzRjPf63yUg9yrAxgqE7735MMJ3LdrdgxmaXqQZmIfEW3brlDpQo3QQXnibMxwaNi-2BBzsFpr632bvolerVHQ3wZAursAhufqa6oWoOs3UnoER2beruVGCHJcuQn-2B3leTAoNxZktNTh57vG-2BiuxROQE2YxLpBDsKGMrxtAp-2B-2BmgxTwAiBKFOiYBuqBiu-2F7b-2Fe2aD_qtKO6Kc2NLxBiAdgyCFdYkxvw9Rqq0iq0aBWRqJKI45ERKYmPLhYKZN-2FxXq5juuY2ccpYmfBkktwtPsq0v4GEdFE-2FrdAM8-2FeoNhCNqvBghgXAxfTsAmIAnA41B90fd4cIoi2-2FqSsGloRn3esxEwK6FmTgSVHe8T3gO-2F0y18Y-2BAYD3QIpQUq-2BDta6BwLXx9Vzl3S9S5pK1D2bFel4FHwL6u7Q4tXXp6a0WfonLLFKwWxh8mH0ESyZu6ON9eYGbZpMgqovVnAFzH8wVP9PdenrcomxVAHQHe7cMDrAjfRQRkZDtn9fbnXU-2FvINu6m63QLEngtichOng8E-2FWy-2BWxIhxz-2FJP2Dv4ke5n4hVWs1UIyh8-3D",
      duration: "32 Hours",
      imageUrl: c2,
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
