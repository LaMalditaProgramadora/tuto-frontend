import "../App.css";

const SectionList = () => {
  return (
    <>
      <div className="page-title">
        <h2>Secciones</h2>
        <button type="button" className="nes-btn is-error red-button">
          + Agregar
        </button>
      </div>
      <div className="cards">
        {Array.from({ length: 16 }).map((_, indexRow) => (
          <div className="card" key={indexRow}>
            <div className="nes-container with-title is-rounded">
              <p className="title">ES3A</p>
              <ul className="nes-list is-disc card-list">
                <li>
                  <p className="li-left-padding">2021-I</p>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionList;
