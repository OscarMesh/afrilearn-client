
export interface Subject {
    _id: string;
    name: string;
    description: string;
    thumbnailUrl?: string;
    topics: Topic[];
}

export interface Topic {
    _id: string;
    title: string;
    description: string;
    imageUrl?: string;
    videoUrl: string
}