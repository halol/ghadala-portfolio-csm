import PrismicDOM from "prismic-dom";
import Prism from "prismjs";

export const prismify = data => {
  let richText = PrismicDOM.RichText.asHtml(data);
  // Find all instances of <pre class="language-SOME_LANGUAGE">SOME_CONTENT</pre>
  const toReplace = richText.match(
    /<pre\sclass="language-(?:\w*)">(.*?(?=<\/pre>))<\/pre>/gs
  );

  // Keep track of which match index is being replaced
  let replaceIndex = 0;

  data.forEach(docSection => {
    if (docSection.type === "preformatted") {
      // Use label from Prismic to determine language for PrismJS
      const codeLanguage = docSection.label.replace("language-", "");
      richText = richText.replace(
        toReplace[replaceIndex],
        // Include <pre> and <code> tags as per best practices
        `<pre class="language-${codeLanguage}"><code class="language-${codeLanguage}">` +
          // Throw in the highlighted marked-up code
          Prism.highlight(
            docSection.text,
            Prism.languages[codeLanguage],
            codeLanguage
          ) +
          "</code></pre>"
      );
      // Move to the next replaceIndex for the next preformatted block found
      replaceIndex++;
    }
  });
  // Profit!
  return richText;
};
