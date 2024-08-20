import React, { Component } from 'react';

export default function About({ contentfulFields }) {
  var listItems = <li></li>;
  if (contentfulFields) {
    listItems = contentfulFields.skillItems.map((d) => (
      <li key={d.fields.skillItemTitle}>
        {d.fields.skillItemTitle} - {d.fields.skillItemDescription}
      </li>
    ));
  }
  return (
    <div>
      <h3>{contentfulFields.aboutTitle}</h3>
      <p>{contentfulFields.aboutDescription}</p>
      <h4>{contentfulFields.aboutSkillTitle}</h4>
      {listItems}
    </div>
  );
}
