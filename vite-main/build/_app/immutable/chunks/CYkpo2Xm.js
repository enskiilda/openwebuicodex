const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./kq2ZDxMK.js","./CQrtv1eE.js","./WJl3ipnu.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./CQrtv1eE.js";
import purify from "./bQFTtKkZ.js";
import "./DKem_M_z.js";
import "./DwLkIEu4.js";
import { t as toast } from "./BccDN__m.js";
import { c as createNewNote } from "./BInTu4eC.js";
const downloadPdf = async (note) => {
  var _a, _b;
  const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
    __vitePreload(() => import("./kq2ZDxMK.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url),
    __vitePreload(() => import("./C8IzhQs1.js"), true ? [] : void 0, import.meta.url)
  ]);
  const virtualWidth = 1024;
  const virtualHeight = 1400;
  const html = purify.sanitize(((_b = (_a = note.data) == null ? void 0 : _a.content) == null ? void 0 : _b.html) ?? "");
  const isDarkMode = document.documentElement.classList.contains("dark");
  let node;
  if (html instanceof HTMLElement) {
    node = html;
  } else {
    const virtualWidth2 = 800;
    node = document.createElement("div");
    const titleNode = document.createElement("div");
    titleNode.textContent = note.title;
    titleNode.style.fontSize = "24px";
    titleNode.style.fontWeight = "medium";
    titleNode.style.paddingBottom = "20px";
    titleNode.style.color = isDarkMode ? "white" : "black";
    node.appendChild(titleNode);
    const contentNode = document.createElement("div");
    contentNode.innerHTML = html;
    node.appendChild(contentNode);
    node.classList.add("text-black");
    node.classList.add("dark:text-white");
    node.style.width = `${virtualWidth2}px`;
    node.style.position = "absolute";
    node.style.left = "-9999px";
    node.style.height = "auto";
    node.style.padding = "40px 40px";
    console.log(node);
    document.body.appendChild(node);
  }
  const canvas = await html2canvas(node, {
    useCORS: true,
    backgroundColor: isDarkMode ? "#000" : "#fff",
    scale: 2,
    // Keep at 1x to avoid unexpected enlargements
    width: virtualWidth,
    // Set fixed virtual screen width
    windowWidth: virtualWidth,
    // Ensure consistent rendering
    windowHeight: virtualHeight
  });
  if (!(html instanceof HTMLElement)) {
    document.body.removeChild(node);
  }
  const imgData = canvas.toDataURL("image/jpeg", 0.7);
  const pdf = new jsPDF("p", "mm", "a4");
  const imgWidth = 210;
  const pageWidthMM = 210;
  const pageHeight = 297;
  const pageHeightMM = 297;
  if (isDarkMode) {
    pdf.setFillColor(0, 0, 0);
    pdf.rect(0, 0, pageWidthMM, pageHeightMM, "F");
  }
  const imgHeight = canvas.height * imgWidth / canvas.width;
  let heightLeft = imgHeight;
  let position = 0;
  pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;
  while (heightLeft > 0) {
    position -= pageHeight;
    pdf.addPage();
    if (isDarkMode) {
      pdf.setFillColor(0, 0, 0);
      pdf.rect(0, 0, pageWidthMM, pageHeightMM, "F");
    }
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }
  pdf.save(`${note.title}.pdf`);
};
const createNoteHandler = async (title, content) => {
  const res = await createNewNote(localStorage.token, {
    // YYYY-MM-DD
    title,
    data: {
      content: {
        json: null,
        html: content ?? "",
        md: content ?? ""
      }
    },
    meta: null,
    access_control: {}
  }).catch((error) => {
    toast.error(`${error}`);
    return null;
  });
  if (res) {
    return res;
  }
};
export {
  createNoteHandler as c,
  downloadPdf as d
};
