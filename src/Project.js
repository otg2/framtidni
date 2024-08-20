import React, { Component } from 'react';

export default function Project({ contentfulFields }) {
  var listItems = <li></li>;
  if (contentfulFields) {
    listItems = contentfulFields.projectItems.map((d) => (
      <li key={d.fields.projectItemName}>
        <img src={d.fields.projectItemImage.fields.file.url}></img>
        {d.fields.projectItemName} - {d.fields.projectItemDescription}
      </li>
    ));
  }

  return (
    <div className='background-green'>
      <h3>{contentfulFields.projectTitle}</h3>
      {listItems}
    </div>
  );
}
