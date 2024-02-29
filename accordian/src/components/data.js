const data = [
  {
    id: "1",
    question:
      "Can you explain the significance of Accordion Menus in web design and why they are commonly used in modern websites?",
    answer:
      "Accordion menus enhance user experience by organizing content into collapsible sections, allowing users to access desired information quickly without scrolling or navigating multiple pages. They save space, reduce cognitive load, and improve site aesthetics. Commonly used for FAQs, navigation menus, and mobile-responsive designs.",
  },
  {
    id: "2",
    question:
      "What is the difference between Accordion Menu and other menu systems like Dropdown or Tab Navigation? What is the impact on user experience and site functionality?",
    answer:
      "Accordion Menu differs from Dropdown and Tab Navigation primarily in its presentation and interaction style. Accordion Menus display a vertical list of items, expanding to reveal sub-items when clicked, while Dropdowns present options in a single-level list upon user interaction, and Tabs use horizontal navigation with content changing below.",
  },
  {
    id: "3",
    question:
      "How do you handle accessibility concerns related to Accordion Menus, such as screen readers, keyboard navigation, and ARIA attributes?",
    answer:
      "Add ARIA attributes: “aria-expanded” to indicate the state of each panel, “aria-controls” to associate buttons with panels, and “aria-labelledby” for labeling purposes.",
  },
];

export default data;
