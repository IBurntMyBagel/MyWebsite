export type InlineText =
    // Text content types
    | {
        type: "text";
        content: string;
    }
    | {
        type: "italic";
        content: string;
    }
    | {
        type: "bold";
        content: string;
    }
    | {
        type: "link";
        content: string;
        href: string;
    };

export type AchievementBlock =
    // Block content types
    | {
        type: "paragraph";
        content: InlineText[];
    }
    | {
        type: "image";
        src: string;
        alt: string;
    };

export type Achievement = {
    // Achievement structure
    id: string;
    title: string;
    date: string; 
    coverImage: string;
    summary: string;
    author: string;
    blocks: AchievementBlock[];
};


