import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { logout } from '../utils/auth';

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('cvs');
  const [partners, setPartners] = useState([
    { id: 1, name: "Bank of Africa", logo: "/Logos/BankOfAfrica.png", website: "https://www.bankofafrica.ma/" },
    { id: 2, name: "Capgemini", logo: "/Logos/capgemini.png", website: "https://www.capgemini.com/" },
    { id: 3, name: "ENSA", logo: "/Logos/ensa.png", website: "https://www.ensa.ac.ma/" },
    { id: 4, name: "ENSAM", logo: "/Logos/ENSAM.png", website: "https://www.ensam.ac.ma/" },
    { id: 5, name: "Green Energy Park", logo: "/Logos/greenenergypark.png", website: "https://www.greenenergypark.ma/" },
    { id: 6, name: "ISTYA", logo: "/Logos/istya.png", website: "https://www.istya.ma/" },
    { id: 7, name: "Lear Corporation", logo: "/Logos/lear.png", website: "https://www.lear.com/" },
    { id: 8, name: "Leyton", logo: "/Logos/Leyton.jpg", website: "https://www.leyton.com/" },
    { id: 9, name: "Oriliss Consulting", logo: "/Logos/OrilissConsulting.png", website: "https://www.orilissconsulting.com/" },
    { id: 10, name: "Retain", logo: "/Logos/retain.png", website: "https://www.retain.ma/" },
    { id: 11, name: "UCA", logo: "/Logos/uca.png", website: "https://www.uca.ma/" }
  ]);
  const [aboutPhotos, setAboutPhotos] = useState([
    { id: 1, url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", title: "Photo 1" },
    { id: 2, url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400", title: "Photo 2" },
    { id: 3, url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400", title: "Photo 3" }
  ]);
  const [editions, setEditions] = useState([
    { id: 1, year: "2022", photos: [] },
    { id: 2, year: "2023", photos: [] }
  ]);
  const [cvs, setCvs] = useState([]);
  const [scheduleDay1, setScheduleDay1] = useState([
    { id: 1, time: "09:00", event: "Accueil & Inscription", speaker: "" },
    { id: 2, time: "10:00", event: "Mot d'ouverture", speaker: "Directeur ENSA" },
    { id: 3, time: "10:30", event: "IA & Innovation", speaker: "Dr. Amine El Khayati" },
    { id: 4, time: "11:30", event: "Pause Café", speaker: "" },
    { id: 5, time: "12:00", event: "Atelier CV", speaker: "Recruteurs OCP" },
    { id: 6, time: "14:00", event: "Entretiens rapides", speaker: "" },
    { id: 7, time: "16:00", event: "Remise des prix", speaker: "" },
    { id: 8, time: "17:00", event: "Clôture", speaker: "" }
  ]);
  const [scheduleDay2, setScheduleDay2] = useState([
    { id: 1, time: "09:00", event: "Accueil participants", speaker: "" },
    { id: 2, time: "09:30", event: "Conférence Innovation", speaker: "Alexis Todoskoff" },
    { id: 3, time: "10:30", event: "Table ronde", speaker: "" },
    { id: 4, time: "11:00", event: "Pause", speaker: "" },
    { id: 5, time: "11:30", event: "Ateliers pratiques", speaker: "" },
    { id: 6, time: "14:00", event: "Job Dating", speaker: "" },
    { id: 7, time: "15:30", event: "Networking", speaker: "" },
    { id: 8, time: "16:30", event: "Clôture & Remise certificats", speaker: "" }
  ]);

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
    window.location.href = '/';
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
    <div style={{ paddingTop: '140px', minHeight: '100vh', padding: '2rem', position: 'relative', zIndex: 1001 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1002 }}>
          <h1 style={{ color: 'var(--violet)', fontSize: '2.5rem', fontWeight: 'bold', position: 'relative', zIndex: 1002 }}>Dashboard Admin</h1>
          <button onClick={handleLogout} className="btn btn-gold" style={{ position: 'relative', zIndex: 1002 }}>
            Déconnexion
          </button>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {[
            { key: 'cvs', label: 'CVs Étudiants' },
            { key: 'program', label: 'Programme' },
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
                background: activeTab === tab.key ? 'var(--violet)' : 'rgba(255,255,255,0.1)',
                color: activeTab === tab.key ? 'var(--bg)' : '#e2e8f0',
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
          {/* Program Tab */}
          {activeTab === 'program' && (
            <div>
              <h2 style={{ color: 'var(--violet)', marginBottom: '2rem' }}>Gestion du Programme</h2>
              
              {/* Day 1 */}
              <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ color: 'var(--violet)' }}>Jour 1 - 15 Novembre ({scheduleDay1.length} créneaux)</h3>
                  <button 
                    onClick={() => {
                      const time = prompt("Heure (ex: 09:00):");
                      const event = prompt("Événement:");
                      const speaker = prompt("Intervenant (optionnel):") || "";
                      if (time && event) {
                        setScheduleDay1([...scheduleDay1, { id: Date.now(), time, event, speaker }]);
                      }
                    }}
                    className="btn btn-gold"
                  >
                    + Ajouter Créneau
                  </button>
                </div>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {scheduleDay1.map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <div>
                        <strong style={{ color: 'var(--depth-4)' }}>{item.time}</strong>
                        <span style={{ margin: '0 1rem', color: 'var(--violet)' }}>→</span>
                        <span>{item.event}</span>
                        {item.speaker && <em style={{ color: 'var(--violet)', marginLeft: '1rem' }}>({item.speaker})</em>}
                      </div>
                      <button 
                        onClick={() => {
                          if (confirm("Supprimer ce créneau?")) {
                            setScheduleDay1(scheduleDay1.filter(s => s.id !== item.id));
                          }
                        }}
                        style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '5px', cursor: 'pointer' }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 2 */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ color: 'var(--violet)' }}>Jour 2 - 16 Novembre ({scheduleDay2.length} créneaux)</h3>
                  <button 
                    onClick={() => {
                      const time = prompt("Heure (ex: 09:00):");
                      const event = prompt("Événement:");
                      const speaker = prompt("Intervenant (optionnel):") || "";
                      if (time && event) {
                        setScheduleDay2([...scheduleDay2, { id: Date.now(), time, event, speaker }]);
                      }
                    }}
                    className="btn btn-gold"
                  >
                    + Ajouter Créneau
                  </button>
                </div>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {scheduleDay2.map(item => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <div>
                        <strong style={{ color: 'var(--depth-4)' }}>{item.time}</strong>
                        <span style={{ margin: '0 1rem', color: 'var(--violet)' }}>→</span>
                        <span>{item.event}</span>
                        {item.speaker && <em style={{ color: 'var(--violet)', marginLeft: '1rem' }}>({item.speaker})</em>}
                      </div>
                      <button 
                        onClick={() => {
                          if (confirm("Supprimer ce créneau?")) {
                            setScheduleDay2(scheduleDay2.filter(s => s.id !== item.id));
                          }
                        }}
                        style={{ background: '#dc3545', color: 'white', border: 'none', padding: '0.5rem', borderRadius: '5px', cursor: 'pointer' }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CVs Tab */}
          {activeTab === 'cvs' && (
            <div>
              <h2 style={{ color: 'var(--violet)', marginBottom: '2rem' }}>Liste des CVs ({cvs.length})</h2>
              {cvs.length === 0 ? (
                <p style={{ textAlign: 'center', color: 'var(--depth-4)', fontSize: '1.2rem', padding: '3rem' }}>
                  Aucun CV enregistré pour le moment
                </p>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--violet)' }}>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--violet)' }}>Nom</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--violet)' }}>Prénom</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--violet)' }}>Email</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--violet)' }}>Téléphone</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--violet)' }}>École</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--violet)' }}>Niveau</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--violet)' }}>Filière</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--violet)' }}>CV</th>
                        <th style={{ padding: '1rem', textAlign: 'left', color: 'var(--violet)' }}>Date</th>
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
                              <a href={cv.cv} style={{ color: 'var(--violet)', textDecoration: 'underline' }}>
                                Télécharger
                              </a>
                            ) : (
                              <span style={{ color: 'var(--depth-4)' }}>Non fourni</span>
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
                <h2 style={{ color: 'var(--violet)' }}>Gestion des Partenaires ({partners.length})</h2>
                <button onClick={addPartner} className="btn btn-gold">
                  + Ajouter Partenaire
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {partners.map(partner => (
                  <div key={partner.id} className="card" style={{ padding: '1rem' }}>
                    <div style={{ width: '100%', height: '120px', backgroundColor: '#f0c76e', borderRadius: '8px', marginBottom: '1rem', overflow: 'hidden', border: '2px solid #f0c76e', position: 'relative' }}>
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        style={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'fill'
                        }}
                      />
                    </div>
                    <h3 style={{ color: 'var(--violet)', marginBottom: '0.5rem' }}>{partner.name}</h3>
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
                <h2 style={{ color: 'var(--violet)' }}>Photos À Propos ({aboutPhotos.length})</h2>
                <button onClick={addAboutPhoto} className="btn btn-gold">
                  + Ajouter Photo
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {aboutPhotos.map(photo => (
                  <div key={photo.id} className="card" style={{ padding: '1rem' }}>
                    <img src={photo.url} alt={photo.title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
                    <h4 style={{ color: 'var(--violet)', marginBottom: '1rem' }}>{photo.title}</h4>
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
                <h2 style={{ color: 'var(--violet)' }}>Gestion des Éditions ({editions.length})</h2>
                <button onClick={addEdition} className="btn btn-gold">
                  + Ajouter Édition
                </button>
              </div>
              {editions.map(edition => (
                <div key={edition.id} style={{ marginBottom: '3rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ color: 'var(--violet)' }}>Édition {edition.year} ({edition.photos.length} photos)</h3>
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
                      <p style={{ color: 'var(--depth-4)', fontStyle: 'italic' }}>Aucune photo pour cette édition</p>
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
