import { O as OLLAMA_API_BASE_URL } from "./DQ9UxF7k.js";
const verifyOllamaConnection = async (token = "", connection = {}) => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/verify`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      ...connection
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    var _a;
    error = `Ollama: ${((_a = err == null ? void 0 : err.error) == null ? void 0 : _a.message) ?? "Network Problem"}`;
    return [];
  });
  if (error) {
    throw error;
  }
  return res;
};
const getOllamaConfig = async (token = "") => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/config`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = "Server connection failed";
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const updateOllamaConfig = async (token = "", config) => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/config/update`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    },
    body: JSON.stringify({
      ...config
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = "Server connection failed";
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const getOllamaVersion = async (token, urlIdx) => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/api/version${""}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = "Server connection failed";
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return (res == null ? void 0 : res.version) ?? false;
};
const getOllamaModels = async (token = "", urlIdx = null) => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/api/tags${urlIdx !== null ? `/${urlIdx}` : ""}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...token && { authorization: `Bearer ${token}` }
    }
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).catch((err) => {
    console.error(err);
    if ("detail" in err) {
      error = err.detail;
    } else {
      error = "Server connection failed";
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return ((res == null ? void 0 : res.models) ?? []).map((model) => ({ id: model.model, name: model.name ?? model.model, ...model })).sort((a, b) => {
    return ((a == null ? void 0 : a.name) ?? (a == null ? void 0 : a.id) ?? "").localeCompare((b == null ? void 0 : b.name) ?? (b == null ? void 0 : b.id) ?? "");
  });
};
const unloadModel = async (token, tagName) => {
  let error = null;
  const res = await fetch(`${OLLAMA_API_BASE_URL}/api/unload`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      model: tagName
    })
  }).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const createModel = async (token, payload, urlIdx = null) => {
  let error = null;
  const res = await fetch(
    `${OLLAMA_API_BASE_URL}/api/create${urlIdx !== null ? `/${urlIdx}` : ""}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    }
  ).catch((err) => {
    error = err;
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const deleteModel = async (token, tagName, urlIdx = null) => {
  let error = null;
  const res = await fetch(
    `${OLLAMA_API_BASE_URL}/api/delete${urlIdx !== null ? `/${urlIdx}` : ""}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        model: tagName
      })
    }
  ).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2.json();
  }).then((json) => {
    console.debug(json);
    return true;
  }).catch((err) => {
    console.error(err);
    error = err;
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const pullModel = async (token, tagName, urlIdx = null) => {
  let error = null;
  const controller = new AbortController();
  const res = await fetch(`${OLLAMA_API_BASE_URL}/api/pull${urlIdx !== null ? `/${urlIdx}` : ""}`, {
    signal: controller.signal,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name: tagName
    })
  }).catch((err) => {
    console.error(err);
    error = err;
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return [res, controller];
};
const downloadModel = async (token, download_url, urlIdx = null) => {
  let error = null;
  const res = await fetch(
    `${OLLAMA_API_BASE_URL}/models/download${urlIdx !== null ? `/${urlIdx}` : ""}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        url: download_url
      })
    }
  ).catch((err) => {
    console.error(err);
    error = err;
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
const uploadModel = async (token, file, urlIdx = null) => {
  let error = null;
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(
    `${OLLAMA_API_BASE_URL}/models/upload${urlIdx !== null ? `/${urlIdx}` : ""}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    }
  ).catch((err) => {
    console.error(err);
    error = err;
    if ("detail" in err) {
      error = err.detail;
    }
    return null;
  });
  if (error) {
    throw error;
  }
  return res;
};
export {
  getOllamaModels as a,
  uploadModel as b,
  createModel as c,
  deleteModel as d,
  downloadModel as e,
  getOllamaConfig as f,
  getOllamaVersion as g,
  updateOllamaConfig as h,
  pullModel as p,
  unloadModel as u,
  verifyOllamaConnection as v
};
