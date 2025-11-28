import { A as AUDIO_API_BASE_URL } from "./DQ9UxF7k.js";
const getAudioConfig = async (token) => {
  let error = null;
  const res = await fetch(`${AUDIO_API_BASE_URL}/config`, {
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
const updateAudioConfig = async (token, payload) => {
  let error = null;
  const res = await fetch(`${AUDIO_API_BASE_URL}/config/update`, {
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
const transcribeAudio = async (token, file, language) => {
  const data = new FormData();
  data.append("file", file);
  if (language) {
    data.append("language", language);
  }
  let error = null;
  const res = await fetch(`${AUDIO_API_BASE_URL}/transcriptions`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      authorization: `Bearer ${token}`
    },
    body: data
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
const synthesizeOpenAISpeech = async (token = "", speaker = "alloy", text = "", model) => {
  let error = null;
  const res = await fetch(`${AUDIO_API_BASE_URL}/speech`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      input: text,
      voice: speaker,
      ...model
    })
  }).then(async (res2) => {
    if (!res2.ok) throw await res2.json();
    return res2;
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
const getModels = async (token = "") => {
  let error = null;
  const res = await fetch(`${AUDIO_API_BASE_URL}/models`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
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
const getVoices = async (token = "") => {
  let error = null;
  const res = await fetch(`${AUDIO_API_BASE_URL}/voices`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
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
  getAudioConfig as a,
  getModels as b,
  getVoices as g,
  synthesizeOpenAISpeech as s,
  transcribeAudio as t,
  updateAudioConfig as u
};
