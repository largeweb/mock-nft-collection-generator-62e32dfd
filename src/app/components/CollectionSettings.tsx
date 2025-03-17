xml
<project>
  <name>AI Recipe Manager</name>
  <framework>next-on-pages</framework>
  <overview>
    A web application to manage and categorize recipe collections, enhanced with AI features for recipe suggestions and collection theming.
    The application allows users to create, edit, and delete collections of recipes. It will include integrations with AI services.
    The frontend is developed using Next.js, Tailwind CSS, and Framer Motion.  Data will be stored in Cloudflare KV.
  </overview>
</project>

<component>
  <path>src/app/components/CollectionSettings.tsx</path>
  <description>
    "use client";
    This component renders the settings for a specific collection.
    It allows the user to change collection name, description, and theme.

    - Props:
      - `collectionId`: string - The ID of the collection to display settings for.
      - `onSettingsChange`: (collectionId: string, updates: {name?: string; description?: string; theme?: string}) => void; - A function called when the settings are changed.

    - State Management: useState for managing the collection's name, description, and theme.
    - Data Fetching: It does NOT handle fetching the collections settings directly. It receives these and any updates through the props.
    - Event Handling:
      - onChange event handlers for the input fields to update the component's state.
      - An onSubmit event handler for the form to call the `onSettingsChange` prop function.
    - Styling: Tailwind CSS for styling.
    - Animation: Use Framer Motion for a smooth transition when the component mounts.
    - Edge Compatibility: This component uses client-side functionality ("use client").

  </description>
</component>

<asset>
  <path>src/app/lib/utils.ts</path>
  <description>
    Utility functions for the application, such as date formatting, string manipulation, etc.

    - Functions:  Implement a function called `cn` that allows for conditional class names using `clsx` and `tailwind-merge`.
  </description>
</asset>

<asset>
  <path>src/app/lib/constants.ts</path>
  <description>
    Constants for the application, such as API endpoints, theme options, etc.

    - Theme Options: Define an array of theme options (strings) for the collection settings form (e.g., "light", "dark", "modern", "classic").
  </description>
</asset>