import { R as RETRIEVAL_API_BASE_URL } from "./DQ9UxF7k.js";
const getRAGConfig = async (token) => {
  let error = null;
  const res = await fetch(`${RETRIEVAL_API_BASE_URL}/config`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateRAGConfig = async (token, payload) => {
  let error = null;
  const res = await fetch(`${RETRIEVAL_API_BASE_URL}/config/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...payload
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getEmbeddingConfig = async (token) => {
  let error = null;
  const res = await fetch(`${RETRIEVAL_API_BASE_URL}/embedding`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateEmbeddingConfig = async (token, payload) => {
  let error = null;
  const res = await fetch(`${RETRIEVAL_API_BASE_URL}/embedding/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      ...payload
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const processYoutubeVideo = async (token, url) => {
  let error = null;
  const res = await fetch(`${RETRIEVAL_API_BASE_URL}/process/youtube`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      url
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const processWeb = async (token, collection_name, url) => {
  let error = null;
  const res = await fetch(`${RETRIEVAL_API_BASE_URL}/process/web`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      url,
      collection_name
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const resetVectorDB = async (token) => {
  let error = null;
  const res = await fetch(`${RETRIEVAL_API_BASE_URL}/reset/db`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err.detail;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
export {
  processWeb as a,
  getEmbeddingConfig as b,
  updateEmbeddingConfig as c,
  getRAGConfig as g,
  processYoutubeVideo as p,
  resetVectorDB as r,
  updateRAGConfig as u
};
