import { Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Template from "../CustomElements/Template";
import General from "../CustomElements/General";
import ToggleField from "../CustomElements/ToggleField";
import TextField from "../CustomElements/TextField";

const CSSStringToObject = (styles) => {
  if (styles) {
    return styles
      .split(";")
      .filter((style) => style.split(":")[0] && style.split(":")[1])
      .map((style) => [
        style
          .split(":")[0]
          .trim()
          .replace(/-./g, (c) => c.substr(1).toUpperCase()),
        style.split(":")[1].trim(),
      ])
      .reduce(
        (styleObj, style) => ({
          ...styleObj,
          [style[0]]: style[1],
        }),
        {}
      );
  }
};

const newTemplate = {
  type: "template",
  id: "1",
  children: [
    {
      type: "paragrafo",
      id: "2",
      children: [
        {
          type: "texto",
          value: '<strong style="font-size: 24px;">ALVARÁ DE SOLTURA</strong>',
          id: "3",
        },
      ],
      style: "text-align:center;font-size: 24px;",
    },
    {
      type: "paragrafo",
      id: "4",
      style: "font-size: 24px;text-align:center;",
      children: [
        {
          type: "texto",
          value: "<strong>BO Nº 3/2022 </strong>",
          id: "5",
        },
        {
          type: "campo-preencher",
          label: "numerodoprocedimento",
          id: "6",
          style: "font-size: 24px;text-align:center;",
        },
        {
          type: "texto",
          value: " ",
          id: "200",
        },

        {
          type: "texto",
          value: " ",
          id: "200",
        },
        {
          type: "toggle-text",
          value: "<strong>texto adicional</strong>",
          style: "font-size: 24px;text-align:center;",

          id: "7",
        },
      ],
    },
    {
      type: "paragrafo",
      id: "8",
      children: [
        {
          type: "texto",
          value: "O(A) Sr(a) ",
          id: "9",
        },
        {
          type: "campo-preencher",
          label: "nome do delegado",
          value: "João Eduardo Santana Davanço",
          id: "100",
        },
        {
          type: "texto",
          value: " lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          id: "10",
        },
      ],
    },
  ],
};

// above to one line string
const samplehtml = `<template><p><span><strong>ALVARÁ DE SOLTURA</strong></span></p><p><span><strong>BO Nº 3/2022 </strong></span><campo-preencher id="1" style="font-size: 24px;text-align:center;" label="numerodoprocedimento" /><span> </span><span> </span><toggle-text value="texto legal" id="2" style="font-size: 24px;text-align:center;"><strong>span adicional</strong></toggle-text></p><p><span>O(A) Sr(a) </span><campo-preencher label="nome do delegado" value="João Eduardo Santana Davanço" id="3" /><span> lorem ipsum dolor sit amet, consectetur adipiscing elit. </span></p></template>`;

function Peca({ template = newTemplate }) {
  const [togglesIds, setTogglesIds] = useState({});
  const [fields, setFields] = useState({});

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
    console.log(items, type)
    return items;
  };

  useEffect(() => {
    let aux = {};
    const xml = xmlToObject(samplehtml);
    for (const toggle of findTypeIds(xml.childNodes, "toggle-text")) {
      aux[toggle] = false;
    }
    setTogglesIds(aux);
    aux = {};
    for (const field of findTypeIds(xml.childNodes, "campo-preencher")) {
      aux[field] = null;
    }
    setFields(aux);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log({ fields, togglesIds });
  }, [fields, togglesIds]);

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

  const xmlToJSX = (template) => {
    const childNodes = Array.from(template.childNodes);
    if (template.nodeName === "template" || template.nodeName === "div") {
      return (
        <General Element={Template} attributes={template.attributes}>
          {childNodes.map((child) => xmlToJSX(child))}
        </General>
      );
    } else if (template.nodeName === "#text") {
      return <span>{template.textContent}</span>;
    } else if (template.nodeName === "toggle-text") {
      return (
        <General
          Element={ToggleField}
          attributes={template.attributes}
          onClick={onClickToggle}
          enabled={togglesIds[template?.attributes?.id?.value]}
        />
      );
    } else if (template.nodeName === "campo-preencher") {
      return (
        <General
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
          {childNodes.map((child) => xmlToJSX(child))}
        </General>
      );
    }
  };
  const templateToJSXWithValues = (template) => {
    if (template.type === "template") {
      return (
        <div
          id="print"
          style={{
            backgroundColor: "#f5f5f5",
            width: "210mm",
            minHeight: "297mm",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "50px",
          }}
        >
          <div style={{}}>
            {template.children.map((child) => templateToJSXWithValues(child))}
          </div>
        </div>
      );
    }
    if (template.type === "paragrafo") {
      return (
        <p style={CSSStringToObject(template?.style)}>
          {template.children.map((child) => templateToJSXWithValues(child))}
        </p>
      );
    }
    if (template.type === "texto") {
      return <span dangerouslySetInnerHTML={{ __html: template.value }} />;
    }
    if (template.type === "campo-preencher") {
      return (
        <span
          dangerouslySetInnerHTML={{
            __html:
              typeof fields[template.id] === "string"
                ? fields[template.id]
                : template?.value,
          }}
        />
      );
    }
    if (template.type === "toggle-text") {
      const { value, id } = template;
      return (
        <span
          dangerouslySetInnerHTML={{ __html: togglesIds[id] ? value : "" }}
        />
      );
    }
    return null;
  };

  const xmlToObject = (xml) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");
    const xmlObject = xmlDoc.firstChild;
    return xmlObject;
  };

  function printDocument() {
    const input = window.document.getElementById("print");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }

  return (
    <div style={{ width: "60%" }}>
      {/* <div>{templateToJSX(newTemplate)}</div> */}
      <div>{xmlToJSX(xmlToObject(samplehtml))}</div>
      <div style={{ margin: 20 }}></div>
      {templateToJSXWithValues(newTemplate)}
      <Button onClick={printDocument}>GERAR</Button>
    </div>
  );
}

export default Peca;
