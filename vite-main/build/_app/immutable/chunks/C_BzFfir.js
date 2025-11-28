import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
const createNewKnowledge = async (token, name, description, accessControl) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name,
      description,
      access_control: accessControl
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
const getKnowledgeBases = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
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
const getKnowledgeBaseList = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/list`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
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
const getKnowledgeById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
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
const updateKnowledgeById = async (token, id, form) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name: (form == null ? void 0 : form.name) ? form.name : void 0,
      description: (form == null ? void 0 : form.description) ? form.description : void 0,
      data: (form == null ? void 0 : form.data) ? form.data : void 0,
      access_control: form.access_control
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
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
const addFileToKnowledgeById = async (token, id, fileId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/file/add`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      file_id: fileId
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
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
const updateFileFromKnowledgeById = async (token, id, fileId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/file/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      file_id: fileId
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
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
const removeFileFromKnowledgeById = async (token, id, fileId) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/file/remove`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      file_id: fileId
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
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
const resetKnowledgeById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/reset`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
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
const deleteKnowledgeById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/${id}/delete`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
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
const reindexKnowledgeFiles = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/knowledge/reindex`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    }
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
export {
  getKnowledgeBaseList as a,
  getKnowledgeById as b,
  createNewKnowledge as c,
  deleteKnowledgeById as d,
  addFileToKnowledgeById as e,
  removeFileFromKnowledgeById as f,
  getKnowledgeBases as g,
  updateFileFromKnowledgeById as h,
  reindexKnowledgeFiles as i,
  resetKnowledgeById as r,
  updateKnowledgeById as u
};
