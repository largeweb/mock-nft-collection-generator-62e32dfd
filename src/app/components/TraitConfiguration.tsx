xml
<project>
  <name>AI Avatar Generator</name>
  <framework>next-on-pages</framework>
  <overview>
    <user-summary>
      AI Avatar Generator is a tool to generate personalized avatars from text descriptions. Users provide details like hair style, eye color, clothing, etc., and the app creates a unique avatar.
    </user-summary>
    <technical-metadata>
      This project uses Next.js with Tailwind CSS for styling. It integrates with a hypothetical AI image generation API to create avatars based on user input. The frontend will handle the user interface and manage state, while the backend (currently mocked) will simulate the AI image generation.
    </technical-metadata>
    <styling>
      The styling focuses on a clean, modern, and playful aesthetic. A vibrant color palette will be used with rounded corners and subtle shadows to create a visually appealing and engaging user experience. The design will be responsive, ensuring optimal display on various devices.
    </styling>
  </overview>
</project>

<component>
  <path>src/app/components/TraitConfiguration.tsx</path>
  <description>
    "use client";
    This component allows users to configure the traits of their avatar (hair style, eye color, clothing, etc.).

    - Purpose: To provide a user interface for selecting and customizing avatar traits.
    - Prop Interface:
      - `onTraitsChange`: A function that is called when the user changes any of the traits. It takes an object containing the selected traits as an argument (e.g., `{ hairStyle: 'short', eyeColor: 'blue', ... }`).
    - State Management:
      - `useState` for managing the state of each configurable trait (hairStyle, eyeColor, clothing, etc.).  Start with 'short', 'blue', and 'casual' as default values.
    - Mock Event Handling: The `onTraitsChange` prop is called whenever a trait's value changes (e.g., when a select dropdown is changed).
    - Style: Tailwind CSS for styling (form elements, layout).
    - Animation: None.
    - Traits:
        - hairStyle (select): Short, Medium, Long
        - eyeColor (select): Blue, Green, Brown
        - clothing (select): Casual, Formal, Fantasy
    - Edge Compatibility:  Uses client-side functionality ("use client").
  </description>
</component>