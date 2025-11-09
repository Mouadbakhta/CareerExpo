// API Service for Career Expo
const API_BASE_URL_8080 = import.meta.env.VITE_API_BASE_8080 || 'http://localhost:8080/api';
const API_BASE_URL_8081 = import.meta.env.VITE_API_BASE_8081 || 'http://localhost:8081/api';

// Student API
export const studentAPI = {
  create: async (formData) => {
    const response = await fetch(`${API_BASE_URL_8081}/etudiants/with-cv`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to create student');
    return response.json();
  },

  getAll: async () => {
    const response = await fetch(`${API_BASE_URL_8081}/etudiants`, {
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) throw new Error('Failed to fetch students');
    return response.json();
  },

  getByCompetition: async (competitionId) => {
    const response = await fetch(`${API_BASE_URL_8080}/etudiants/competition/${competitionId}`, {
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) throw new Error('Failed to fetch students');
    return response.json();
  },

  validate: async (id) => {
    const response = await fetch(`${API_BASE_URL_8081}/etudiants/${id}/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) throw new Error('Failed to validate student');
    return response.json();
  },

  refuse: async (id) => {
    const response = await fetch(`${API_BASE_URL_8081}/etudiants/${id}/refuse`, {
      method: 'POST',
    });
    if (!response.ok) throw new Error('Failed to refuse student');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL_8080}/etudiants/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) throw new Error('Failed to delete student');
    return response.ok;
  },

  countByCompetition: async (competitionId) => {
    const response = await fetch(`${API_BASE_URL_8081}/etudiants/competition/${competitionId}/count`, {
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) throw new Error('Failed to count students');
    return response.json();
  },
};

// Competition API
export const competitionAPI = {
  create: async (data) => {
    const response = await fetch(`${API_BASE_URL_8081}/competitions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create competition');
    return response.json();
  },

  getAll: async () => {
    const response = await fetch(`${API_BASE_URL_8080}/competitions`);
    if (!response.ok) throw new Error('Failed to fetch competitions');
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL_8080}/competitions/${id}`);
    if (!response.ok) throw new Error('Failed to fetch competition');
    return response.json();
  },

  getByYear: async (year) => {
    const response = await fetch(`${API_BASE_URL_8080}/competitions/annee/${year}`);
    if (!response.ok) throw new Error('Failed to fetch competition');
    return response.json();
  },

  update: async (id, data) => {
    const response = await fetch(`${API_BASE_URL_8081}/competitions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update competition');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL_8080}/competitions/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete competition');
    return response.ok;
  },
};

// Admin API
export const adminAPI = {
  create: async (data) => {
    const response = await fetch(`${API_BASE_URL_8081}/admins`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create admin');
    return response.json();
  },

  getAll: async () => {
    const response = await fetch(`${API_BASE_URL_8081}/admins`);
    if (!response.ok) throw new Error('Failed to fetch admins');
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL_8081}/admins/${id}`);
    if (!response.ok) throw new Error('Failed to fetch admin');
    return response.json();
  },

  getByEmail: async (email) => {
    const response = await fetch(`${API_BASE_URL_8081}/admins/email/${email}`);
    if (!response.ok) throw new Error('Failed to fetch admin');
    return response.json();
  },

  update: async (id, data) => {
    const response = await fetch(`${API_BASE_URL_8081}/admins/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update admin');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL_8080}/admins/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete admin');
    return response.ok;
  },
};