"use client";

import "@repo/typography";
import Image from "next/image";

const Example = () => (
  <div className="size-full overflow-y-auto p-8">
    <div className="typography">
      <h1>Styling the Web: A Modern CSS Journey</h1>

      <p>
        CSS has come a long way since its inception. From simple layout tweaks to
        complex responsive designs, it's become an essential tool for crafting
        delightful web experiences. In this article, we’ll explore various HTML
        elements commonly styled with modern CSS utility systems like{" "}
        <code>tailwindcss</code>
        and component libraries.
      </p>

      <h2>Introduction</h2>
      <p>
        Web design today is more accessible than ever. Thanks to utility-first
        frameworks and component-based architectures, developers can build
        beautiful UIs with less effort.
      </p>

      <h3>Key Benefits of Utility CSS</h3>
      <ul>
        <li>Faster development</li>
        <li>Consistent design system</li>
        <li>Better collaboration between dev and design</li>
      </ul>

      <h3>What You Need</h3>
      <ol>
        <li>Basic HTML/CSS knowledge</li>
        <li>Code editor (e.g., VS Code)</li>
        <li>Modern browser for testing</li>
      </ol>

      <h2>Checklist</h2>
      <ul>
        <li>
          <input checked disabled type="checkbox" /> <p>Install Tailwind CSS</p>
        </li>
        <li>
          <input disabled type="checkbox" /> <p>Configure PostCSS</p>
        </li>
        <li>
          <input disabled type="checkbox" /> <p>Create base components</p>
        </li>
      </ul>

      <h2>Sample Image</h2>
      <p>
        Here's a sample image to test image styling. Make sure it scales well on
        all screen sizes.
      </p>
      <center>
        <Image
          alt="Cute kitten"
          height={400}
          src="https://placehold.co/600x400"
          unoptimized
          width={600}
        />
      </center>

      <h2>Code Example</h2>
      <pre>
        <code>{`/* Tailwind example */
.button {
  @apply px-4 py-2 bg-blue-600 text-white rounded;
}`}</code>
      </pre>

      <h2>Blockquote</h2>
      <blockquote>
        "Design is not just what it looks like and feels like. Design is how it
        works." — Steve Jobs
      </blockquote>

      <h2>Table Example</h2>
      <table>
        <thead>
          <tr>
            <th>Framework</th>
            <th>Type</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tailwind CSS</td>
            <td>Utility-First</td>
            <td>70k+</td>
          </tr>
          <tr>
            <td>Bootstrap</td>
            <td>Component-Based</td>
            <td>160k+</td>
          </tr>
          <tr>
            <td>Bulma</td>
            <td>Utility/Component Hybrid</td>
            <td>45k+</td>
          </tr>
        </tbody>
      </table>

      <h2>Inline Elements</h2>
      <p>
        You can <strong>bold</strong> text, <em>italicize</em> it,{" "}
        <u>underline</u> it, or even add <a href="https://example.com">links</a>.
        Here’s some <code>inline code</code> too.
      </p>

      <h2>Definition List</h2>
      <dl>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets</dd>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
        <dt>JS</dt>
        <dd>JavaScript</dd>
      </dl>

      <h2>Details and Summary</h2>
      <details>
        <summary>Click to expand additional info</summary>
        <p>
          Utility CSS simplifies the process of managing and scaling CSS in large
          projects.
        </p>
      </details>

      <h2>Inline Elements</h2>
      <p>
        You can <strong>bold</strong> text, <em>italicize</em> it,{" "}
        <u>underline</u> it, or even add <a href="https://example.com">links</a>.
        Here’s some <code>inline code</code> too.{" "}
        <mark>Highlight important info</mark> and <small>small text size</small>.{" "}
        <abbr title="HyperText Markup Language">HTML</abbr> is the foundation of
        the web.
      </p>

      <h2>Superscript & Subscript</h2>
      <p>
        E = mc<sup>2</sup> is Einstein's mass-energy equivalence. Water is H
        <sub>2</sub>O.
      </p>

      <h2>Conclusion</h2>
      <p>
        Whether you're using Tailwind, vanilla CSS, or any other system, a solid
        understanding of how HTML elements behave is key to great styling. Test
        extensively to ensure consistent, accessible results across devices.
      </p>
    </div>
  </div>
);

export default Example;
