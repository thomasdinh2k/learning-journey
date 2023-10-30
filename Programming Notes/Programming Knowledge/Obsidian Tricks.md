# Callouts

Use callouts to include additional content without breaking the flow of your notes.

To create a callout, add `[!info]` to the first line of a blockquote, where `info` is the _type identifier_. The type identifier determines how the callout looks and feels. To see all available types, refer to [Supported types](https://help.obsidian.md/Editing+and+formatting/Callouts#Supported%20types).

```markdown
> [!info]
> Here's a callout block.
> It supports **Markdown**, [[Internal link|Wikilinks]], and [[Embed files|embeds]]!
> ![[og-image.png]]
```

Info

Here's a callout block.  
It supports **Markdown**, [Wikilinks](https://help.obsidian.md/Linking+notes+and+files/Internal+links) and [embeds](https://help.obsidian.md/Linking+notes+and+files/Embedding+files)!  

Callouts are also supported natively on [Obsidian Publish](https://help.obsidian.md/Obsidian+Publish/Introduction+to+Obsidian+Publish).

Note

If you're also using the Admonitions plugin, you should update it to at least version 8.0.0 to avoid problems with the new callout feature.

### Change the title

By default, the title of the callout is its type identifier in title case. You can change it by adding text after the type identifier:

```markdown
> [!tip] Callouts can have custom titles
> Like this one.
```

Callouts can have custom titles

Like this one.

You can even omit the body to create title-only callouts:

```markdown
> [!tip] Title-only callout
```

Title-only callout

### Foldable callouts

You can make a callout foldable by adding a plus (+) or a minus (-) directly after the type identifier.

A plus sign expands the callout by default, and a minus sign collapses it instead.

```markdown
> [!faq]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden when the callout is collapsed.
```

Are callouts foldable?

### Nested callouts

You can nest callouts in multiple levels.

```markdown
> [!question] Can callouts be nested?
> > [!todo] Yes!, they can.
> > > [!example]  You can even use multiple layers of nesting.
```

Can callouts be nested?

Yes!, they can.

You can even use multiple layers of nesting.

### Customize callouts

[CSS snippets](https://help.obsidian.md/Extending+Obsidian/CSS+snippets) and [Community plugins](https://help.obsidian.md/Extending+Obsidian/Community+plugins) can define custom callouts, or even overwrite the default configuration.

To define a custom callout, create the following CSS block:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

The value of the `data-callout` attribute is the type identifier you want to use, for example `[!custom-question-type]`.

- `--callout-color` defines the background color using numbers (0–255) for red, green, and blue.
- `--callout-icon` can be an icon ID from [lucide.dev](https://lucide.dev/), or an SVG element.

SVG icons

Instead of using a Lucide icon, you can also use a SVG element as the callout icon.

```css
--callout-icon: '<svg>...custom svg...</svg>';
```

### Supported types

You can use several callout types and aliases. Each type comes with a different background color and icon.

To use these default styles, replace `info` in the examples with any of these types, such as `[!tip]` or `[!warning]`.

Unless you [Customize callouts](https://help.obsidian.md/Editing+and+formatting/Callouts#Customize%20callouts), any unsupported type defaults to the `note` type. The type identifier is case-insensitive.

> [!note]

> [!abstract]

>[!info]

>[!hint]

>[!info]

>[!done]

>[!faq]

>[!question]+
>What's your name?
>My name is ***Thomas***

>[!warning]

>[!fail]

>[!danger]

>[!example]

>[!quote]
# Markdown#
### Supported Markdown extensions

|Syntax|Description|
|---|---|
|`[[Link]]`|[Internal links](https://help.obsidian.md/Linking+notes+and+files/Internal+links)|
|`![[Link]]`|[Embedding files](https://help.obsidian.md/Linking+notes+and+files/Embedding+files)|
|`![[Link#^id]]`|[Block references](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20block%20in%20a%20note)|
|`^id`|[Defining a block](https://help.obsidian.md/Linking+notes+and+files/Internal+links#Link%20to%20a%20block%20in%20a%20note)|
|`%%Text%%`|[Comments](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Comments)|
|`~~Text~~`|[Strikethroughs](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Styling%20text)|
|`==Text==`|[Highlights](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Styling%20text)|
|` ``` `|[Code blocks](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code%20blocks)|
|`- [ ]`|[Incomplete task](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Task%20lists)|
|`- [x]`|[Completed task](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Task%20lists)|
|`> [!note]`|[Callouts](https://help.obsidian.md/Editing+and+formatting/Callouts)|
|(see link)|[Tables](https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax#Tables)|

# Advanced formatting syntax
## Mermaid Diagram
https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax
```mermaid
graph TD

Hello --> World
From --> Tom
Tom --> Thomas
```
```mermaid
sequenceDiagram
	Alice->>+John: Hello, how are you?
	John-->>-Alice: Hi Alice, I can hear you!
```

```mermaid
graph TB
    A[Previous List] -->|Searches for matching keys| B[Current List]
    B -->|Key exists in current list but not in previous list| C[React creates a component]
    B -->|Key exists in previous list but not in current list| D[React destroys the previous component]
    B -->|Keys match in both lists| E[React moves the corresponding component]

```
```mermaid
graph TB
    A[Prev List] --> B[Current List]
    B --> C[Create Component]
    B --> D[Destroy Component]
    B --> E[Move Component]

```
