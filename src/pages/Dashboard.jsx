import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { logout } from '../utils/auth';

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('cvs');
  const [partners, setPartners] = useState([
    { id: 1, name: "Stellantis", logo: "/Logos/Stellantis.jpg", website: "https://www.stellantis.com/" },
    { id: 2, name: "Oracle", logo: "/Logos/Oracle.png", website: "https://www.oracle.com/" },
    { id: 3, name: "Akkodis", logo: "/Logos/akkodis.jpg", website: "https://www.akkodis.com/" },
    { id: 4, name: "AVL", logo: "/Logos/avl.png", website: "https://www.avl.com/" },
    { id: 5, name: "Bank of Africa", logo: "/Logos/BankOfAfrica.png", website: "https://www.bankofafrica.ma/" },
    { id: 6, name: "Capgemini", logo: "/Logos/capgemini.png", website: "https://www.capgemini.com/" },
    { id: 7, name: "Inwi", logo: "/Logos/inwi0.jpg", website: "https://www.inwi.ma/" },
    { id: 8, name: "Leyton", logo: "/Logos/Leyton.jpg", website: "https://www.leyton.com/" },
    { id: 9, name: "Maroc Telecom", logo: "/Logos/MAROCTELECOM.jpg", website: "https://www.iam.ma/" },
    { id: 10, name: "OCP Group", logo: "/Logos/ocpjpg.jpg", website: "https://www.ocpgroup.ma/" },
    { id: 11, name: "Safy", logo: "/Logos/safy.png", website: "https://www.safy.ma/" }
  ]);
  const [aboutPhotos, setAboutPhotos] = useState([
    { id: 1, url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", title: "Photo 1" },
    { id: 2, url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400", title: "Photo 2" },
    { id: 3, url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400", title: "Photo 3" }
  ]);
  const [editions, setEditions] = useState([
    { id: 1, year: "2020", photos: [] },
    { id: 2, year: "2021", photos: [] },
    { id: 3, year: "2022", photos: [] },
    { id: 4, year: "2023", photos: [] },
    { id: 5, year: "2024", photos: [] }
  ]);
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    // Load CVs from localStorage
    const storedInscriptions = localStorage.getItem('careerExpoInscriptions');
    if (storedInscriptions) {
      setCvs(JSON.parse(storedInscriptions));
    }
  }, []);

  const handleLogout = () => {
    logout();
    onLogout();
  };

  const addPartner = () => {
    const name = prompt("Nom du partenaire:");
    const website = prompt("Site web:");
    const logo = prompt("URL du logo:");
    if (name && website && logo) {
      setPartners([...partners, { id: Date.now(), name, logo, website }]);
    }
  };

  const deletePartner = (id) => {
    if (confirm("Supprimer ce partenaire?")) {
      setPartners(partners.filter(p => p.id !== id));
    }
  };

  const addAboutPhoto = () => {
    const url = prompt("URL de la photo:");
    const title = prompt("Titre de la photo:");
    if (url && title) {
      setAboutPhotos([...aboutPhotos, { id: Date.now(), url, title }]);
    }
  };

  const deleteAboutPhoto = (id) => {
    if (confirm("Supprimer cette photo?")) {
      setAboutPhotos(aboutPhotos.filter(p => p.id !== id));
    }
  };

  const addEdition = () => {
    const year = prompt("Année de l'édition:");
    if (year) {
      setEditions([...editions, { id: Date.now(), year, photos: [] }]);
    }
  };

  const deleteEdition = (id) => {
    if (confirm("Supprimer cette édition?")) {
      setEditions(editions.filter(e => e.id !== id));
    }
  };

  const addEditionPhoto = (editionId) => {
    const url = prompt("URL de la photo:");
    const title = prompt("Titre de la photo:");
    if (url && title) {
      setEditions(editions.map(e => 
        e.id === editionId 
          ? { ...e, photos: [...e.photos, { id: Date.now(), url, title }] }
          : e
      ));
    }
  };

  const deleteEditionPhoto = (editionId, photoId) => {
    if (confirm("Supprimer cette photo?")) {
      setEditions(editions.map(e => 
        e.id === editionId 
          ? { ...e, photos: e.photos.filter(p => p.id !== photoId) }
          : e
      ));
    }
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: '#F9B233', fontSize: '2.5rem', fontWeight: 'bold' }}>Dashboard Admin</h1>
          <button onClick={handleLogout} className="btn btn-gold">
            Déconnexion
          </button>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {[
            { key: 'cvs', label: 'CVs Étudiants' },
            { key: 'partners', label: 'Partenaires' },
            { key: 'about', label: 'Photos À Propos' },
            { key: 'editions', label: 'Éditions' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '10px',
                border: 'none',
                background: activeTab === tab.key ? '#F9B233' : 'rgba(255,255,255,0.1)',
                color: activeTab === tab.key ? '#0A0F1C' : '#e2e8f0',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="card">
          {/* CVs Tab */}
          {activeTab === 'cvs' && (
            <div>
              <h2 style={{ color: '#F9B233', marginBottom: '2rem' }}>Liste des CVs ({cvs.length})</h2>
              {cvs.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '1.2rem', padding: '3rem' }}>
                  Aucun CV enregistré pour le moment
                </p>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #F9B233' }}>
                        <th style={{ padding: '1rem', textAlign: 'left', color: '#F9B233' }}>Nom</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: '#F9B233' }}>Prénom</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: '#F9B233' }}>Email</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: '#F9B233' }}>Téléphone</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: '#F9B233' }}>École</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: '#F9B233' }}>Niveau</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: '#F9B233' }}>Filière</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: '#F9B233' }}>CV</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: '#F9B233' }}>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cvs.map(cv => (
                        <tr key={cv.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <td style={{ padding: '1rem' }}>{cv.nom}</td>
                          <td style={{ padding: '1rem' }}>{cv.prenom}</td>
                          <td style={{ padding: '1rem' }}>{cv.email}</td>
                          <td style={{ padding: '1rem' }}>{cv.telephone}</td>
                          <td style={{ padding: '1rem' }}>{cv.ecole}</td>
                          <td style={{ padding: '1rem' }}>{cv.niveau}</td>
                          <td style={{ padding: '1rem' }}>{cv.filiere}</td>
                          <td style={{ padding: '1rem' }}>
                            {cv.cv ? (
                              <a href={cv.cv} style={{ color: '#F9B233', textDecoration: 'underline' }}>
                                Télécharger
                              </a>
                            ) : (
                              <span style={{ color: '#94a3b8' }}>Non fourni</span>
                            )}
                          </td>
                          <td style={{ padding: '1rem' }}>{cv.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Partners Tab */}
          {activeTab === 'partners' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ color: '#F9B233' }}>Gestion des Partenaires ({partners.length})</h2>
                <button onClick={addPartner} className="btn btn-gold">
                  + Ajouter Partenaire
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {partners.map(partner => (
                  <div key={partner.id} className="card" style={{ padding: '1rem' }}>
                    <img src={partner.logo} alt={partner.name} style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '1rem' }} />
                    <h3 style={{ color: '#F9B233', marginBottom: '0.5rem' }}>{partner.name}</h3>
                    <p style={{ fontSize: '0.9rem', marginBottom: '1rem', wordBreak: 'break-all' }}>{partner.website}</p>
                    <button onClick={() => deletePartner(partner.id)} style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>
                      Supprimer
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* About Photos Tab */}
          {activeTab === 'about' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ color: '#F9B233' }}>Photos À Propos ({aboutPhotos.length})</h2>
                <button onClick={addAboutPhoto} className="btn btn-gold">
                  + Ajouter Photo
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {aboutPhotos.map(photo => (
                  <div key={photo.id} className="card" style={{ padding: '1rem' }}>
                    <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
                    <h4 style={{ color: '#F9B233', marginBottom: '1rem' }}>{photo.title}</h4>
                    <button onClick={() => deleteAboutPhoto(photo.id)} style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>
                      Supprimer
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Editions Tab */}
          {activeTab === 'editions' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ color: '#F9B233' }}>Gestion des Éditions ({editions.length})</h2>
                <button onClick={addEdition} className="btn btn-gold">
                  + Ajouter Édition
                </button>
              </div>
              {editions.map(edition => (
                <div key={edition.id} style={{ marginBottom: '3rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ color: '#F9B233' }}>Édition {edition.year} ({edition.photos.length} photos)</h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button onClick={() => addEditionPhoto(edition.id)} style={{ background: '#28a745', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>
                        + Photo
                      </button>
                      <button onClick={() => deleteEdition(edition.id)} style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>
                        Supprimer Édition
                      </button>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {edition.photos.map(photo => (
                      <div key={photo.id} style={{ position: 'relative' }}>
                        <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
                        <button 
                          onClick={() => deleteEditionPhoto(edition.id, photo.id)}
                          style={{ position: 'absolute', top: '5px', right: '5px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '50%', width: '25px', height: '25px', cursor: 'pointer', fontSize: '12px' }}
                        >
                          ×
                        </button>
                        <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', textAlign: 'center' }}>{photo.title}</p>
                      </div>
                    ))}
                    {edition.photos.length === 0 && (
                      <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>Aucune photo pour cette édition</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}