import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-bg">
        <div className="tva-glyph">⧖</div>
      </div>
      <div className="header-content">
        <div className="header-left">
          <img src="/TVA.png" alt="TVA Logo" className="tva-logo" />
        </div>
        <div className="header-right">
          <h1 className="header-title">Emergency ! 
            Miss Minutes needs your help .</h1>
          <p className="header-subtitle">
            The TVA needs you , The timeline is scattered and the multiverse needs a savior . can a true Avenger fix it ?
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header