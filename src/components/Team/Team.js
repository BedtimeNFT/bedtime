import React from "react";
import "./Team.css";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

// team Members Images
import Member1 from "../../assets/team1.jpeg";
import Member2 from "../../assets/team2.jpeg";
import Member3 from "../../assets/team3.jpeg";

const teamMembers = [
  {
    name: "Boardwalk78 AKA Jeremy Stewart",
    role: "Founder",
    image: Member1,
    twitterLink: "https://twitter.com/boardwalkfloor",
    twitterHandle: "@boardwalkfloor",
    bio: "Boardwalk78 AKA Jeremy Stewart father of four 👀 IRL flooring business Boardwalk floors and More community member and team member of several projects. got my start in 2017 with crypto and haven’t looked back! As always LFGrow",
  },
  {
    name: "NFT Lover Kyle Aka Kyle Brehm",
    role: "Co-Founder",
    image: Member2,
    twitterLink: "https://twitter.com/KyleDBrehm1",
    twitterHandle: "@KyleDBrehm1",
    bio: "NFT Lover Kyle Aka Kyle Brehm @KyleDBrehm1 on Twitter is a devoted Husband, and Father of (2) Amazing Daughters, and Marine Vet started his Web3 journey purchasing his first NFT on 1/31/22. Born and raised in Washington State, Kyle has always stood out as born Leader who elevates the people around him to be the best versions of themselves...",
  },
  {
    name: "WitschiDaD",
    role: "Co-Founder",
    image: Member3,
    twitterLink: "https://twitter.com/Boy1dollar",
    twitterHandle: "@Boy1dollar",
    bio: "I (AKA WitschiDaD) am an experienced operations manager with over 26 years of experience in the oil and gas industry. I have a proven track record of leadership and management skills, which I plan to bring to the NFT community. As a family man with 4 kids and a beautiful wife, I understand the importance of building a strong and supportive community. I have been involved in the crypto and NFT scene for over 3 years and have seen many projects come and go. With my experience and expertise, I am confident that my NFT project will be here to stay ~WitchiDaD",
  },
];

const Team = () => {
  return (
    <div className="storybg" id="team">
      <div className="iproad">
        <h3>IP rights: </h3>
        <br />
        <p>
          The owner of a Creation owns the art IP. They may use the image as
          they wish so long as they own that particular Creation. Use of the
          image for profit must cease upon sale. Although the holder owns the IP
          they do not own any Bedtime logos or other art and therefore cannot
          use it without written approval.
        </p>
        <br />
        <br />
        <h3>Voting rights:</h3> <br />
        <p>Community votes on Bedtime’s direction, utility, and development.</p>
        <br />
        <br />
      </div>

      {/* Team Members  */}

      <div className="team-container">
        {/* Heading  */}
        <div>
          <h2
            data-aos="fade-up"
            data-aos-duration="700"
            className="aos-init aos-animate"
          >
            Meet the Team
          </h2>
        </div>

        {/* Members  */}
        <div className="member-container">
          {/* Map through teamMembers array and render each member */}
          {teamMembers.map((member, index) => (
            <div className="member" key={index}>
              {/* Card header  */}
              <div className="member-header">
                <p className="name1 member-name">{member.name}</p>
                <p className="name2">{member.role}</p>
              </div>

              {/* Flip Card   */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Flip Card Front Side  */}
                  <div className="flip-card-front">
                    <img
                      src={member.image}
                      loading="lazy"
                      alt=""
                      className="member-image"
                    />
                  </div>

                  {/* Flip Card Back Side  */}
                  <div className="flip-card-back">
                    <h6>{member.bio}</h6>
                    <div className="social-media-wrapper">
                      <Link
                        to={member.twitterLink}
                        target="_blank"
                        className="round-social-wrapper"
                      >
                        <FaTwitter className="twitterIcon" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
