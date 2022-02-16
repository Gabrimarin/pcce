import { Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Template from "../CustomElements/Template";
import General from "../CustomElements/General";
import ToggleField from "../CustomElements/ToggleField";
import TextField from "../CustomElements/TextField";

const json = {
  type: "template",
  style: "padding: 100px;",
  children: [
    {
      type: "p",
      children: [
        {
          type: "span",
          children: [
            {
              type: "span",
              value: "<strong>NOTA DE CULPA</strong>",
            },
          ],
          style: "font-size:22px;",
        },
      ],
      style: "text-align:center;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          children: [
            {
              type: "span",
              value: "<strong></strong>",
            },
            {
              type: "highlight",
              value: "BO",
            },
          ],
          style: "font-size:19px;",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-align:center;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          children: [
            {
              type: "span",
              value: "<strong> Nº </strong>",
            },
            {
              type: "highlight",
              value: "3",
            },
            {
              type: "span",
              value: "/",
            },
            {
              type: "highlight",
              value: "2022",
            },
          ],
          style: "font-size:19px;",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-align:center;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          children: [
            {
              type: "span",
              value: "O(A) Sr(a) <strong></strong>",
            },
            {
              type: "text-field",
              label: "delegado",
              value: "João Eduardo Santana Davanço",
              id: "delegado",
            },
            {
              type: "span",
              value:
                ", Delegado(a) de Polícia desta Unidade Policial, faz saber ao(a) <strong>CONDUZIDO(A): </strong> ",
            },
            {
              type: "toggle-text",
              value: "Desconhecido 1, Nacionalidade: Brasil",
              id: "1",
            },
            {
              type: "span",
              value: ".",
            },
            {
              type: "span",
              value: " Neste ato por seu(ua) advogado(a), Sr(a) ",
            },
            {
              type: "text-field",
              label: "advogado",
              value: "",
              id: "advogado",
            },
            {
              type: "span",
              value:
                ", que se encontra <strong>PRESO(A) </strong> <strong>EM  FLAGRANTE</strong> nos autos em epígrafe, pela prática da Infração Penal prevista no: <strong></strong>",
            },
            {
              type: "toggle-text",
              value: "FURTO ART. 155 CAPUT DO CPB",
              id: "2",
            },
            {
              type: "span",
              value: ", ocorrida em <strong></strong>",
            },
            {
              type: "toggle-text",
              value: "23/01/2022",
              id: "3",
            },
            {
              type: "span",
              value: ", por volta das ",
            },
            {
              type: "toggle-text",
              value: "10:00",
              id: "4",
            },
            {
              type: "span",
              value: "  horas, no local ",
            },
            {
              type: "toggle-text",
              value: "Rua Danielle Maraisa de Oliveura Mariano, nº 100",
              id: "5",
            },
            {
              type: "span",
              value: " Figurando como <strong>CONDUTOR(A): </strong>",
            },
            {
              type: "span",
              value: ", como TESTEMUNHA(S):  ",
            },
            {
              type: "span",
              value: " e como VÍTIMA(S): ",
            },
            {
              type: "toggle-text",
              value: "Joao Figueiredo Pereira",
              id: "6",
            },
          ],
          style: "font-size:19px;",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-align:justify;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-align:justify;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-indent:4em;text-align:justify;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-align:justify;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          children: [
            {
              type: "highlight",
              value: "ARAPIRACA",
            },
            {
              type: "span",
              value: "-",
            },
            {
              type: "highlight",
              value: "AL",
            },
            {
              type: "span",
              value: ", ",
            },
            {
              type: "highlight",
              value: "16",
            },
            {
              type: "span",
              value: " de ",
            },
            {
              type: "highlight",
              value: "Fevereiro",
            },
            {
              type: "span",
              value: " de ",
            },
            {
              type: "highlight",
              value: "2022",
            },
          ],
          style: "font-size:19px;",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-align:right;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-indent:4em;text-align:center;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-indent:4em;text-align:center;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-indent:4em;text-align:center;",
    },
    {
      type: "p",
      children: [
        {
          type: "text-field",
          label: "delegado",
          value: "João Eduardo Santana Davanço",
          id: "delegado2",
        },
        {
          type: "span",
          value: "<strong></strong>",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-align:center;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: "<strong>Delegado(a) de Polícia</strong>",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-align:center;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-align:center;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "text-align:justify;",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value:
            "Recebi uma via desta <strong>NOTA DE CULPA</strong> às  __ _ _:_ _ _ _ _h do dia _ _ _ _/ _ _ _/_ _ ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "",
    },
    {
      type: "p",
      children: [
        {
          type: "span",
          value: "<strong>PRESO(A):</strong>  ",
        },
        {
          type: "toggle-text",
          value: "Desconhecido 1",
          id: "7",
        },
        {
          type: "span",
          value: " ",
        },
        {
          type: "span",
          value: " ",
        },
      ],
      style: "",
    },
  ],
};

const jsonToXml = (json) => {
  let xml = "";
  const type = json.type;
  const children = json.children;
  const style = json?.style;
  const label = json?.label;
  const value = json?.value;
  const id = json?.id;
  if (json.children) {
    xml += `<${type}${style ? ` style="${style}"` : ""}>`;
    children.forEach((child) => {
      xml += jsonToXml(child);
    });
    xml += `</${type}>`;
  } else if (type === "span") {
    xml += `<${type}${style ? ` style="${style}"` : ""}>${value}</${type}>`;
  } else {
    xml += `<${type}${label ? ` label="${label}"` : ""}${
      value ? ` value="${value}"` : ""
    }${style ? ` style="${style}"` : ""} ${id ? ` id="${id}"` : ""}/>`;
  }
  return xml;
};

const xmlToObject = (xml) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");
  const xmlObject = xmlDoc.firstChild;
  return xmlObject;
};
const samplehtml = jsonToXml(json);

function Peca({ xmlTemplate = samplehtml }) {
  const [togglesIds, setTogglesIds] = useState({});
  const [fields, setFields] = useState({});
  const xmlObject = xmlToObject(xmlTemplate);

  const findTypeIds = (children, type) => {
    const childNodes = Array.from(children);
    const items = childNodes.reduce((acc, child) => {
      if (child.tagName === type) {
        acc.push(child?.attributes?.id?.value);
      }
      if (child.childNodes) {
        acc = acc.concat(findTypeIds(child.childNodes, type));
      }
      return acc;
    }, []);
    return items;
  };

  useEffect(() => {
    let aux = {};
    for (const toggle of findTypeIds(xmlObject.childNodes, "toggle-text")) {
      aux[toggle] = false;
    }
    setTogglesIds(aux);
    aux = {};
    for (const field of findTypeIds(xmlObject.childNodes, "text-field")) {
      aux[field] = null;
    }
    setFields(aux);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onClickToggle(id) {
    setTogglesIds({
      ...togglesIds,
      [id]: !togglesIds[id],
    });
  }

  function handleChangeField(id, value) {
    setFields({
      ...fields,
      [id]: value,
    });
  }

  const xmlToJSX = (template, withValues) => {
    const id = template?.attributes?.id?.value;
    const value = template?.attributes?.value?.value;
    const childNodes = Array.from(template.childNodes);
    if (template.nodeName === "template" || template.nodeName === "div") {
      return (
        <General Element={Template} attributes={template.attributes}>
          {childNodes.map((child) => xmlToJSX(child, withValues))}
        </General>
      );
    } else if (template.nodeName === "highlight") {
      return (
        <General
          Element={"span"}
          style={{ color: withValues ? "black" : "blue" }}
          attributes={template.attributes}
        >
          {value}
        </General>
      );
    } else if (template.nodeName === "#text") {
      return <span>{template.textContent}</span>;
    } else if (template.nodeName === "toggle-text") {
      const spanValue = togglesIds[id] ? value : "";
      return (
        <General
          withValue={withValues}
          spanValue={spanValue}
          Element={ToggleField}
          attributes={template.attributes}
          onClick={onClickToggle}
          enabled={togglesIds[template?.attributes?.id?.value]}
        />
      );
    } else if (template.nodeName === "text-field") {
      const spanValue = typeof fields[id] === "string" ? fields[id] : value;
      return (
        <General
          withValue={withValues}
          spanValue={spanValue}
          Element={TextField}
          attributes={template.attributes}
          value={
            typeof fields[template?.attributes?.id?.value] === "string"
              ? fields[template?.attributes?.id?.value]
              : template?.attributes?.value?.value
          }
          handleChange={handleChangeField}
        />
      );
    } else {
      return (
        <General Element={template.tagName} attributes={template.attributes}>
          {childNodes.map((child) => xmlToJSX(child, withValues))}
        </General>
      );
    }
  };

  function printDocument() {
    const input = window.document.getElementById("print");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  }

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div
          style={{ width: "210mm", height: "297mm", backgroundColor: "#ddd" }}
        >
          <div>{xmlToJSX(xmlObject)}</div>
        </div>
      </div>
      <Button style={{ margin: 10 }} variant="contained" onClick={printDocument}>
        GERAR
      </Button>
      <div style={{ boxShadow: "0px 0px 10px #000" }}>
        <div id="print" style={{ width: "210mm", height: "297mm" }}>
          <div>{xmlToJSX(xmlObject, true)}</div>
        </div>
      </div>
    </div>
  );
}

export default Peca;
