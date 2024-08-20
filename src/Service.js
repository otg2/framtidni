import React, { Component } from 'react';

export default function Service({ contentfulFields }) {
  var listItems = <li></li>;
  if (contentfulFields) {
    listItems = contentfulFields.serviceItems.map((d) => (
      <li key={d.fields.serviceItemTitle}>
        {d.fields.serviceItemTitle} - {d.fields.serviceItemDescription}
      </li>
    ));
  }

  return (
    <div>
      <h3>{contentfulFields.serviceTitle}</h3>
      {listItems}
    </div>
  );
}
