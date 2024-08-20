import "./home-main.scss";

const HomeMain = () => {
  return (
    <main className="HomeMain">
      <div className="Mission">
        <h2>Our Mission</h2>
        <p>
          Signature Health Group provides home care services to people living
          the comfort of their homes within Tauranga region. Our clients and
          their wellbeing are at the heart of our services. We offer services
          tailored to your needs as you cherish comfort of your home and enjoy
          company of your Whanau.
        </p>
      </div>

      <div className="Service__Philosophy">
        <h2>Our Service Philosophy</h2>
        <ul>
          <li>Respectful engagements</li>
          <li>Partnership approach to care</li>
          <li>Protection of your rights</li>
          <li>Active whanau Participation</li>
        </ul>
      </div>

      <div className="TeTiriti">
        <h2>Honouring Te Tiriti</h2>
        <p>
          Our team is Guided by the enduring principles of Te Tiriti (The Treaty
          of Waitangi) and a steadfast commitment to Equity. We strive to
          provide exceptional home care services that reflect the values of
          Partnership, Participation and Protection outlined in the Treaty.
        </p>
      </div>
    </main>
  );
};

export default HomeMain;
