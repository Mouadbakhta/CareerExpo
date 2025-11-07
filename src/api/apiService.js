// API Service for Career Expo
const API_BASE_URL = import.meta.env.VITE_API_BASE || 'http://localhost:8080/api';

// Student API
export const studentAPI = {
  create: async (formData) => {
    const response = await fetch(`${API_BASE_URL}/etudiants/with-cv`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to create student');
    return response.json();
  },

  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/etudiants`);
    if (!response.ok) throw new Error('Failed to fetch students');
    return response.json();
  },

  getByCompetition: async (competitionId) => {
    const response = await fetch(`${API_BASE_URL}/etudiants/competition/${competitionId}`);
    if (!response.ok) throw new Error('Failed to fetch students');
    return response.json();
  },

  validate: async (id) => {
    const response = await fetch(`${API_BASE_URL}/etudiants/${id}/validate`, {
      method: 'POST',
    });
    if (!response.ok) throw new Error('Failed to validate student');
    return response.json();
  },

  refuse: async (id) => {
    const response = await fetch(`${API_BASE_URL}/etudiants/${id}/refuse`, {
      method: 'POST',
    });
    if (!response.ok) throw new Error('Failed to refuse student');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/etudiants/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete student');
    return response.ok;
  },
};

// Competition API
export const competitionAPI = {
  create: async (data) => {
    const response = await fetch(`${API_BASE_URL}/competitions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create competition');
    return response.json();
  },

  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/competitions`);
    if (!response.ok) throw new Error('Failed to fetch competitions');
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/competitions/${id}`);
    if (!response.ok) throw new Error('Failed to fetch competition');
    return response.json();
  },

  getByYear: async (year) => {
    const response = await fetch(`${API_BASE_URL}/competitions/annee/${year}`);
    if (!response.ok) throw new Error('Failed to fetch competition');
    return response.json();
  },

  update: async (id, data) => {
    const response = await fetch(`${API_BASE_URL}/competitions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update competition');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/competitions/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete competition');
    return response.ok;
  },
};

// Admin API
export const adminAPI = {
  create: async (data) => {
    const response = await fetch(`${API_BASE_URL}/admins`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create admin');
    return response.json();
  },

  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/admins`);
    if (!response.ok) throw new Error('Failed to fetch admins');
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`${API_BASE_URL}/admins/${id}`);
    if (!response.ok) throw new Error('Failed to fetch admin');
    return response.json();
  },

  getByEmail: async (email) => {
    const response = await fetch(`${API_BASE_URL}/admins/email/${email}`);
    if (!response.ok) throw new Error('Failed to fetch admin');
    return response.json();
  },

  update: async (id, data) => {
    const response = await fetch(`${API_BASE_URL}/admins/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update admin');
    return response.json();
  },

  delete: async (id) => {
    const response = await fetch(`${API_BASE_URL}/admins/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete admin');
    return response.ok;
  },
};
