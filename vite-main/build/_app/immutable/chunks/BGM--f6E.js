import { a as WEBUI_API_BASE_URL } from "./DQ9UxF7k.js";
const getModelItems = async (token = "", query, viewOption, selectedTag, orderBy, direction, page) => {
  let error = null;
  const searchParams = new URLSearchParams();
  if (query) {
    searchParams.append("query", query);
  }
  if (viewOption) {
    searchParams.append("view_option", viewOption);
  }
  if (selectedTag) {
    searchParams.append("tag", selectedTag);
  }
  if (page) {
    searchParams.append("page", page.toString());
  }
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/list?${searchParams.toString()}`, {
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
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getModelTags = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/tags`, {
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
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const importModels = async (token, models) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/import`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ models })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getBaseModels = async (token = "") => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/base`, {
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
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const createNewModel = async (token, model) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(model)
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
const getModelById = async (token, id) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("id", id);
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/model?${searchParams.toString()}`, {
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
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const toggleModelById = async (token, id) => {
  let error = null;
  const searchParams = new URLSearchParams();
  searchParams.append("id", id);
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/model/toggle?${searchParams.toString()}`, {
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
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateModelById = async (token, id, model) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/model/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ ...model, id })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    return json;
  }).catch((err) => {
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteModelById = async (token, id) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/model/delete`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ id })
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
const deleteAllModels = async (token) => {
  let error = null;
  const res = await fetch(`${WEBUI_API_BASE_URL}/models/delete/all`, {
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
    error = err;
    console.error(err);
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
export {
  getModelItems as a,
  getModelTags as b,
  createNewModel as c,
  deleteModelById as d,
  getBaseModels as e,
  deleteAllModels as f,
  getModelById as g,
  importModels as i,
  toggleModelById as t,
  updateModelById as u
};
