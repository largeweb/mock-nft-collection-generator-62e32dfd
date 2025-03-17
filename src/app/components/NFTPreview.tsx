xml
<project>
  <name>NFT Explorer</name>
  <framework>next-on-pages</framework>
  <overview>
    An NFT explorer application allowing users to browse and view details about NFTs on the Solana blockchain.  It will fetch data from the Metaplex API.
  </overview>
</project>

<component>
  <path>src/app/components/NFTPreview.tsx</path>
  <description>
    "use client";
    Displays a preview of an NFT, including its image, name, and a link to view its details.

    - Props: `nft` (object, see below)
    - NFT object:
      - `name`: string, the name of the NFT
      - `imageUrl`: string, URL of the NFT image
      - `mintAddress`: string, the mint address (unique ID) of the NFT
    - State Management: None
    - Event Handling:  Navigates to the NFT details page when clicked.
    - Style: Tailwind CSS for styling the card, image, and text.
    - Animation:  Subtle hover effect using Framer Motion.
    - Edge Compatibility:  Relies on client-side navigation, so "use client" is necessary.
  </description>
</component>