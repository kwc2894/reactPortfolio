import React from 'react';

function Body(){
    return(
<div className="container"> 
		  <header> <a href="index.html">
    <h4 className="logo">MKC&nbsp;</h4>
    </a>
    <nav>
      <ul>
        <li><a href="index.html">HOME</a></li>
        <li><a href="index.html#about">ABOUT</a></li>
		<li> <a href="PortfolioProjects.html">PORTFOLIO</a></li>
        <li> <a href="index.html#contact">CONTACT</a></li>
      </ul>
    </nav>
  </header>
  <section className="hero" id="hero">
    <h2 className="hero_header">MICHAEL <span className="light">CLARK&nbsp;</span></h2>
    <p className="tagline">UX Designer/Developer&nbsp;</p>
	  <img src="images/IMG_3393 2.jpeg" alt="Avatar" className="avatar" />
  </section>
  <section className="about" id="about">
    <h2 className="hidden">About</h2>
	<h4 className="logo">About</h4>
    <p className="text_column">My name is Michael Kenneth Clark. I am from New York City and graduated from the Rochester Institute of Technology. My areas of focus were Human Centered Computing and a bit of Software Engineering. I intend to both program and design for those who have trouble computing. My skills include mastery of HTML, CSS, Javascript, Prototyping. As I continue on through my experience in the world, I encounter more obstacles that I overcome each more challenging than the last. My interests include Video Games, Anime, and Humans Vs. Zombies (A moderated game of tag) His skillset consists of HTML, CSS, Javascript, Prototyping Design, Wireframing, Adobe Creative Cloud, and UX Research&nbsp; </p>
</section>
	<h4 className="logo">Experience</h4>
  <div className="gallery">
    <div className="thumbnail">
      <h1 className="stats">LiveTiles&nbsp;</h1>
      <h4>Customer Success Intern&nbsp;</h4>
		<img src="images/LiveTiles-Cloud-logo1.png" alt="LiveTiles" width="400" height="200" className="cards"/>
      <p>May-Aug 2018&nbsp;</p>
      <p>LiveTiles is a company that branches out to many parts of the world with the common goal of changing the way users access information. This opportunity granted the ability to interact with various website based projects both for the company and in some cases potential clients.</p>
      <p>My involvement: Designed and published projects using HTML, CSS, JavaScript for a Microsoft SharePoint Intranet. The position also involved implementation of user experience-based principles to rebrand old templates to improve productivity and ease-of-use. &nbsp;</p>
    </div>
    <div className="thumbnail">
      <h1 className="stats">Erie Insurance&nbsp;</h1>
      <h4>Enterprise Architecture Intern&nbsp;</h4>
		<img src="images/EIG-Reverse-Logo-White.png" alt="Erie Insurance" width="400" height="200" className="cards"/>
      <p>May-Aug 2019&nbsp;</p>
      <p>Erie Insurance is an insurance company in Erie Pensilvania that consistently strives to provide its customers and policy holders with the most efficient service at the lowest possible cost. Their Enterprise Architecture Innovation team handled projects revolved around the Mendix platform and Microsoft Hololens (an augmented reality headset).</p>
      <p>My Involvement: Used the Mendix platform to make projects specifically for Hololens that the company could use with ease. This position also allowed work with a group for professional projects in the corporate world. &nbsp;</p>
    </div>
    <div className="thumbnail">
      <h1 className="stats">SusArcTec&nbsp;</h1>
      <h4>UI Developer&nbsp;</h4>
		<img src="images/cropped-SUSARC4.jpg" alt="Susarc" width="400" height="200" className="cards"/>
      <p>Oct 2020-Nov 2021&nbsp;&nbsp;</p>
      <p>SusarcTec is a startup company in Rochester NY that takes environmental heavy methodologies and transfers them to pen and paper. They are a child company of Digitronik labs and recently launched their big document collaboration app, Markadoc.&nbsp;</p>
      <p>My involvement: Designed, developed, and contributed to both the look and feel of both the markadoc app and the website on both mobile and desktop views.&nbsp;</p>
    </div>
    <div className="thumbnail">
      <h1 className="stats">Fayevorites</h1>
      <h4>Co-admin/Content Manager&nbsp; &nbsp;</h4>
		<img src="images/Screen Shot 2022-05-01 at 12.51.48 PM.png" alt="Fayevorites" width="400" height="200" className="cards"/>
      <p>Sept 2020-Present&nbsp;</p>
      <p>This is a website dedicated to a community hosted by Anime Voice Actress, Faye Mata.&nbsp;</p>
      <p>My Involvement: Collaborated with fellow editors. Edited and wrote pieces of content regarding roles, news, and lore. &nbsp;</p>
    </div>
  </div>
        </div>
    )
}

export default Body;